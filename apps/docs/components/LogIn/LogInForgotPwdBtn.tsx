import { FieldsController } from "@components/Controller";
import { Button, Dialog } from "@components/UI";
import { FieldConfig } from "@core/types";
import { textValidated } from "@core/types/FieldConfig";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useSendResetPasswordEmail, useValidatedForm } from "@utils/hooks";
import { useState } from "react";
import { toast } from "react-toastify";

type FormData = {
  email: string;
};

const configs: FieldConfig[] = [
  {
    type: "TEXT",
    name: "email",
    label: "User Account (Email)",
    required: true,
    validated: textValidated.email(),
    hint: (
      <>
        If the entered user account is valid, you will receive an email with
        reset link. Please contact Admin at <b>admin@aegiscustody.com</b> if you
        need further assistance.
      </>
    ),
  },
];

const recaptchaSiteKey = process.env["NEXT_PUBLIC_RECAPTCHA_SITE_KEY"] || "";

const LogInForgotPwdBtn = () => {
  const [open, setOpen] = useState(false);

  const [sendResetPasswordEmail, { loading }] = useSendResetPasswordEmail();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useValidatedForm<FormData>(configs);

  const onSubmit = async (formData: FormData) => {
    const token = await grecaptcha.execute(recaptchaSiteKey, {
      action: "aegisVaultForgotPassword",
    });

    const { data } = await sendResetPasswordEmail({
      variables: {
        email: formData.email,
        recaptchaToken: token,
      },
    });

    const message = data?.sendResetPasswordEmail.message;

    if (data?.sendResetPasswordEmail.__typename === "Success") {
      toast.success(message);
      setOpen(false);
    }

    if (data?.sendResetPasswordEmail.__typename === "AccountNotFoundError") {
      toast.error(message);
    }
  };

  return (
    <Box textAlign="right">
      <Button disableRipple onClick={() => setOpen(true)}>
        <Typography color="text.primary">Forgot Password?</Typography>
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack gap="10px">
          <Typography variant="h1">Forgot Password?</Typography>
          <Typography variant="subtitle1">
            Enter user account to receive temporary password.
          </Typography>
        </Stack>

        <FieldsController configs={configs} form={{ control, errors }} />

        <Button
          variant="contained"
          loading={loading}
          onClick={handleSubmit(onSubmit)}
        >
          Confirm
        </Button>
      </Dialog>
    </Box>
  );
};

export default LogInForgotPwdBtn;
