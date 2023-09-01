import { useNotice } from "@core/context/notice";
import Badge from "@mui/material/Badge";
import Typography from "@mui/material/Typography";
import React from "react";

interface MenuBadgeProps {
  name?: string;
}

const style = {
  wrapper: {
    "& .MuiBadge-badge": {
      right: "-12px",
      color: "white !important",
    },
  },
};

const MenuBadge: React.FC<MenuBadgeProps> = ({ name }) => {
  const { notice } = useNotice();

  const count = name ? notice[name] : undefined;

  return (
    <Badge sx={style.wrapper} color="primary" badgeContent={count}>
      <Typography variant="menuItem" color="text.primary">
        {name}
      </Typography>
    </Badge>
  );
};

export default MenuBadge;
