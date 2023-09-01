import { FieldsController } from "@components/Controller";
import {
  LogInForgotPwdBtn,
  LogInSetNewPwdDialog,
  LogInSetTfaDialog,
  LogInVerifyTfaDialog,
} from "@components/LogIn";
import { Button, FormBox, Layout } from "@components/UI";
import { WAITING_FOR_VIEWER_COUNTS } from "@core/graphql/queries";
import { FieldConfig } from "@core/types";
import { textValidated } from "@core/types/FieldConfig";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSignInUser, useValidatedForm } from "@utils/hooks";
import Head from "next/head";
import Script from "next/script";
import { ReactElement, useState } from "react";
import { toast } from "react-toastify";

type FormData = {
  email: string;
  password: string;
};

const configs: FieldConfig[] = [
  {
    type: "TEXT",
    name: "email",
    label: "User Account (Email)",
    required: true,
    validated: textValidated.email(),
  },
  {
    type: "PASSWORD",
    name: "password",
    label: "Password",
    required: true,
    validated: textValidated,
  },
];

const recaptchaSiteKey = process.env["NEXT_PUBLIC_RECAPTCHA_SITE_KEY"] || "";

const LogIn = () => {
  const [type, setType] = useState<string>();

  const [signInUser, { loading }] = useSignInUser();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<FormData>(configs);

  const onSubmit = async (formData: FormData) => {
    const token = await grecaptcha.execute(recaptchaSiteKey, {
      action: "aegisVault",
    });

    const { data } = await signInUser({
      variables: {
        email: formData.email,
        password: formData.password,
        recaptchaToken: token,
      },
      refetchQueries: [WAITING_FOR_VIEWER_COUNTS],
    });

    if (
      data?.signInUser.__typename !== "CompanyUser" &&
      data?.signInUser.__typename !== "IndividualUser"
    ) {
      toast.error("Incorrect user account or password.");
      return;
    }

    if (!data.signInUser.hasSetPassword) {
      setType("setNewPwd");
      return;
    }

    if (!data.signInUser.hasSetTfa) {
      setType("setTfa");
      return;
    }

    setType("verifyTfa");
  };

  const handleClose = () => {
    setType(undefined);
  };

  return (
    <>
      <Head>
        <title>Log In</title>
        <meta name="description" content="Log In" />
      </Head>

      <Script
        src={`https://www.google.com/recaptcha/api.js?render=${recaptchaSiteKey}`}
      />

      <Box component="form" onSubmit={handleSubmit(onSubmit)}>
        <FormBox>
          <Stack gap="10px">
            <Typography variant="h1">Log In</Typography>
            <Typography variant="subtitle1" color="text.primary">
              Enter details to log in.
            </Typography>
          </Stack>

          <Box />

          <FieldsController configs={configs} form={{ control, errors }} />

          <LogInForgotPwdBtn />

          <Button type="submit" variant="contained" loading={loading}>
            Log In
          </Button>

          <Box>
            <Typography component="span" color="text.primary">
              Don’t have an account?
            </Typography>{" "}
            <Typography component="a" variant="link" fontSize="14px">
              Onboard with Aegis
            </Typography>
          </Box>
        </FormBox>
      </Box>

      {type === "setTfa" && (
        <LogInSetTfaDialog open={true} onClose={handleClose} />
      )}

      {type === "verifyTfa" && (
        <LogInVerifyTfaDialog open={true} onClose={handleClose} />
      )}

      {type === "setNewPwd" && (
        <LogInSetNewPwdDialog open={true} onClose={handleClose} />
      )}
    </>
  );
};

LogIn.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default LogIn;
