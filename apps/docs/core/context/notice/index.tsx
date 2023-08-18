import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";

interface NoticeState {
  notice: { [key: string]: number };
  status: "loading" | "success";
}

interface NoticeProviderProps {
  children: React.ReactNode;
}

const NoticeContext = createContext({} as NoticeState);

export const useNotice = (): NoticeState => useContext(NoticeContext);

export const NoticeProvider: React.FC<NoticeProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, {
    status: "loading",
    notice: {},
  });

  // const { data, loading } = useWaitingForViewerCounts()

  // useEffect(() => {
  //   if (loading) {
  //     dispatch({ type: 'loading' })
  //   } else {
  //     const notice = Object.values(OperationType).reduce<{ [key: string]: number }>(
  //       (prev, curr) => {
  //         prev[curr] = 0
  //         return prev
  //       },
  //       { [MenuName.PENDING_APPROVAL]: 0 },
  //     )

  //     data?.waitingForViewerCounts.operations.forEach(item => {
  //       notice[item.type] = item.count
  //       notice[MenuName.PENDING_APPROVAL] += item.count
  //     })

  //     dispatch({ type: 'success', payload: notice })
  //   }
  // }, [data, loading])

  return (
    <NoticeContext.Provider
      value={{
        notice: state.notice,
        status: state.status,
      }}
    >
      {children}
    </NoticeContext.Provider>
  );
};
