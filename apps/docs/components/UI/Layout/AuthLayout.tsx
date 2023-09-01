import { useAuth } from "@core/context/auth";
import { Box, Stack, Typography } from "@mui/material";
import { Theme } from "@mui/material/styles";
import aegisCustodyImg from "@public/images/aegis-custody.svg";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Progress from "./Progress";
import Sidebar from "./Sidebar";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const style = {
  container: (theme: Theme) => ({
    display: "grid",
    gridTemplateColumns: "auto 1fr",
    gap: "60px",
    m: "30px",
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: "auto",
    },
  }),
  footer: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    m: "30px",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  }),
  main: (theme: Theme) => ({
    display: "flex",
    flexDirection: "column",
    gap: "30px",
    minHeight: "calc(100vh - 194px)",
    overflow: "scroll",
    [theme.breakpoints.down("md")]: {
      minHeight: "calc(100vh - 174px)",
    },
  }),
  text: (theme: Theme) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  }),
  logo: (theme: Theme) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "10px",
    width: "100%",
    [theme.breakpoints.down("md")]: {
      justifyContent: "center",
    },
  }),
};

const AuthLayout: React.FC<AuthLayoutProps> = ({ children }) => {
  const router = useRouter();

  const { status } = useAuth();
  console.log("status :", status);

  // const { data } = useAppVersion();

  useEffect(() => {
    if (status === "reviewing") router.push("/onboarding/status");

    if (status === "onboarding") router.push("/onboarding");

    if (status === "unauthenticated") router.push("/logIn");
  }, [router, status]);

  if (status === "loading") {
    return <></>;
  }

  if (status === "authenticated") {
    return (
      <>
        <Progress />

        <Navbar />

        <Box sx={style.container}>
          <Stack gap={2}>
            <Sidebar />
          </Stack>

          <Box component="main" sx={style.main}>
            {children}
          </Box>
        </Box>

        <Box component="footer" sx={style.footer}>
          <Typography color="primary" sx={style.text}>
            Version
          </Typography>

          <Box sx={style.logo}>
            <Typography color="primary">Powered by</Typography>
            <Box width="100%" maxWidth="190px">
              <Image
                src={aegisCustodyImg}
                alt="aegis-custody"
                layout="responsive"
              />
            </Box>
          </Box>
        </Box>
      </>
    );
  }

  return <></>;
};

export default AuthLayout;
