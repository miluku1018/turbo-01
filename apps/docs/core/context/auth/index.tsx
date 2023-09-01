import client from "@core/graphql";
import {
  CompanyUser,
  IndividualUser,
  OnboardingState,
} from "@core/graphql/types";
import { useMe, useSignOut } from "@utils/hooks";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";

interface AuthState {
  me?: CompanyUser | IndividualUser;
  logIn: () => Promise<void>;
  logOut: () => Promise<void>;
  status:
    | "loading"
    | "reviewing"
    | "onboarding"
    | "authenticated"
    | "unauthenticated";
}

interface AuthProviderProps {
  children: React.ReactNode;
}

const AuthContext = createContext({} as AuthState);

export const useAuth = (): AuthState => useContext(AuthContext);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, { status: "loading" });

  const { data, refetch } = useMe({
    pollInterval: 3600000,
    onError: () => {
      dispatch({ type: "unauthenticated" });
    },
  });

  const [signOut] = useSignOut();

  const logIn = async () => {
    await refetch();
  };

  const logOut = async () => {
    await signOut({ update: () => client.clearStore() });
    await refetch();
  };

  useEffect(() => {
    const me = data?.me;
    const userData = me?.account;
    const onboardingState = userData?.client?.onboarding.state;

    if (!me) return;

    if (!me.hasVerifiedTfa) {
      dispatch({ type: "unauthenticated" });
      return;
    }

    if (onboardingState === OnboardingState.Approved) {
      dispatch({ type: "authenticated", payload: userData });
      return;
    }

    if (
      onboardingState === OnboardingState.AccountCreated ||
      onboardingState === OnboardingState.AdditionalInfoRequested
    ) {
      dispatch({ type: "onboarding", payload: userData });
      return;
    }

    if (
      onboardingState === OnboardingState.Reviewing ||
      onboardingState === OnboardingState.Pended
    ) {
      dispatch({ type: "reviewing", payload: userData });
      return;
    }

    dispatch({ type: "unauthenticated" });
  }, [data]);

  return (
    <AuthContext.Provider
      value={{
        me: state.me,
        logIn,
        logOut,
        status: state.status,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
