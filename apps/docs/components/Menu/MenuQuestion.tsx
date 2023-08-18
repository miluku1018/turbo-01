import { Link, TooltipIcon } from "@components/UI";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import { Divider, Stack, Typography } from "@mui/material";
import { Fragment } from "react";

const style = {
  container: {
    m: "8px 16px",
  },
  divider: {
    m: "16px -16px",
  },
};

const getTimeZone = (timeZone: string) => {
  return new Date().toLocaleString(undefined, {
    hour12: false,
    timeZone: timeZone,
  });
};

const getServiceInfo = async () => {
  const endMinutes = 1080; // 18:00 minutes
  const startMinutes = 540; // 09:00 minutes

  const cstZone = getTimeZone("CST");
  const hktZone = getTimeZone("Asia/Hong_Kong");
  const cstMinutes =
    new Date(cstZone).getHours() * 60 + new Date(cstZone).getMinutes();
  const hktMinutes =
    new Date(hktZone).getHours() * 60 + new Date(hktZone).getMinutes();

  const isAvailable =
    (cstMinutes >= startMinutes && cstMinutes < endMinutes) ||
    (hktMinutes >= startMinutes && hktMinutes < endMinutes);

  return { cstZone, hktZone, isAvailable };
};

const MenuQuestion = () => {
  // const { data } = useRequest(getServiceInfo, {
  //   pollingInterval: 60000,
  // })

  const list = [
    {
      label: "SERVICE STATUS",
      info: " Indicates whether the current time falls within our service hours. Requests initiated outside of service time will be processed in the order they were received once the next applicable service time begins.",
      value: (
        <Stack direction="row" alignItems="center" gap="5px">
          {/* {data?.isAvailable ? "Available" : "Unavailable"}
          {data?.isAvailable ? (
            <CircleIcon color="success" sx={{ fontSize: 12 }} />
          ) : (
            <CircleIcon color="disabled" sx={{ fontSize: 12 }} />
          )} */}
        </Stack>
      ),
    },
    {
      label: "SERVICE TIME",
      info: "Refers to the designated business hours in the time zones where our custody entities are located, namely South Dakota, Hong Kong, and Singapore.",
      value: (
        <>
          <div>9am - 6pm CST & HKT</div>
          {/* <div>CST：{formatDateTime(data?.cstZone, 'HH:mm:ss')}</div> */}
          {/* <div>HKT：{formatDateTime(data?.hktZone, 'HH:mm:ss')}</div> */}
        </>
      ),
    },
    {
      label: "SUPPORT",
      info: "In addition to contacting your Relationship Manager, you can reach out to our Ops team via email for any inquiries you may have. We highly recommend setting up a Slack Connect channel to ensure continuous customer support and receive prompt assistance.",
      value: <>ops@aegiscustody.com</>,
    },
    {
      label: "HELP CENTER",
      info: "Here are some useful links to help you familiarize yourself with the platform and its features.",
      value: (
        <Stack>
          <Link
            target="_blank"
            href="https://aegis-custody.gitbook.io/aegis-vault"
          >
            <Stack
              direction="row"
              alignItems="center"
              gap="5px"
              color="text.primary"
            >
              User Guide <InsertLinkIcon />
            </Stack>
          </Link>

          <Link
            target="_blank"
            href="https://drive.google.com/drive/folders/1tJ77ZJk62mBnTiovjcgfG35VKa6Rbvya?usp=sharing"
          >
            <Stack
              direction="row"
              alignItems="center"
              gap="5px"
              color="text.primary"
            >
              Demo Videos <InsertLinkIcon />
            </Stack>
          </Link>
        </Stack>
      ),
    },
  ];

  return (
    <Stack sx={style.container}>
      {list.map((item, index) => {
        return (
          <Fragment key={index}>
            <Typography variant="menuType" color="text.secondary" mb="4px">
              <Stack direction="row" alignItems="center" gap="5px">
                {item.label}
                <TooltipIcon icon={HelpOutlineIcon} title={item.info} />
              </Stack>
            </Typography>

            <Typography variant="menuItem">{item.value}</Typography>

            {index !== list.length - 1 && <Divider sx={style.divider} />}
          </Fragment>
        );
      })}
    </Stack>
  );
};

export default MenuQuestion;
