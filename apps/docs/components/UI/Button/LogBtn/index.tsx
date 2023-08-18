import { Dialog, IconBtn } from "@components/UI";
import { OperationLogs } from "@core/graphql/types";
import AutoStoriesIcon from "@mui/icons-material/AutoStories";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

interface LogBtnProps {
  subtitle?: string;
  operationLogs?: OperationLogs;
}

const LogBtn: React.FC<LogBtnProps> = ({ subtitle, operationLogs }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <IconBtn onClick={() => setOpen(true)}>
        <AutoStoriesIcon />
      </IconBtn>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <Stack gap="10px">
          <Typography variant="title">Log</Typography>
          <Typography variant="subtitle1">
            {subtitle || "Participants and processes"}
          </Typography>
        </Stack>
        {/*
        <LogList name="Data Creation" data={operationLogs?.create} />

        {operationLogs?.updates?.map((item, index) => (
          <LogList key={index} name="Update Data" data={item} />
        ))} */}
        {/*
        {operationLogs?.remove && <LogList name="Remove Data" data={operationLogs.remove} />} */}
      </Dialog>
    </>
  );
};

export default LogBtn;
