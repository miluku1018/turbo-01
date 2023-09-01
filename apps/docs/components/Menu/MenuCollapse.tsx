import { Link } from "@components/UI";
import { useAuth } from "@core/context/auth";
import { MenuConfig } from "@core/types";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Collapse from "@mui/material/Collapse";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Typography from "@mui/material/Typography";
import React, { Fragment, useState } from "react";

const style = {
  menuWrapper: {
    display: "grid",
    gap: "16px",
    pb: "16px",
  },
  menuItem: (theme: any) => ({
    gap: "16px",
    py: "0",
    ".icon": {
      color: theme.palette.menu.main,
    },
  }),
  menuBtn: (theme: any) => ({
    justifyContent: "space-between",
    p: "16px",
    "*": {
      color: theme.palette.text.secondary,
    },
  }),
  type: {
    textTransform: "uppercase",
  },
};

const MenuCollapse: React.FC<MenuConfig> = ({ type, menus = [] }) => {
  const { me, logOut } = useAuth();

  const [open, setOpen] = useState(false);

  const handleClose = (name?: string) => {
    if (name === "Log Out") logOut();
    setOpen(false);
  };

  return (
    <>
      <ListItemButton sx={style.menuBtn} onClick={() => setOpen(!open)}>
        <Typography variant="menuType" color="text.secondary" sx={style.type}>
          {type === "email" ? me?.email : type}
        </Typography>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open} timeout="auto" unmountOnExit>
        <List disablePadding sx={style.menuWrapper}>
          {menus.map((menu, index) => {
            const { icon: Icon, name, path, component: Component } = menu;

            return (
              <Fragment key={index}>
                {Component ? (
                  <Component />
                ) : (
                  <Link href={path || ""}>
                    <ListItemButton
                      disableRipple
                      sx={style.menuItem}
                      onClick={() => handleClose(name)}
                    >
                      {Icon && <Icon fontSize="small" className="icon" />}
                      <Typography color="text.primary">{name}</Typography>
                    </ListItemButton>
                  </Link>
                )}
              </Fragment>
            );
          })}
        </List>
      </Collapse>
    </>
  );
};

export default MenuCollapse;
