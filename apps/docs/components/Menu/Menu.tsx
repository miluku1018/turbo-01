import { Button, Link } from "@components/UI";
import { MenuConfig } from "@core/types";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ListItemText from "@mui/material/ListItemText";
import MuiMenu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";

const style = {
  menuItem: (theme: any) => ({
    gap: "16px",
    "&:hover *": {
      color: theme.palette.primary.main,
    },
  }),
  menuBtn: {
    minWidth: "40px",
    p: 0,
  },
};

const Menu: React.FC<MenuConfig> = ({ icon: Icon, type, path, menus = [] }) => {
  // const { me, logOut } = useAuth()

  const [open, setOpen] = useState<null | HTMLElement>(null);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (menus.length) setOpen(event.currentTarget);
  };

  const handleClose = (name?: string) => {
    // if (name === "Log Out") logOut();
    setOpen(null);
  };

  return (
    <>
      <Link href={path || ""}>
        {Icon ? (
          <Button
            color="secondary"
            variant="outlined"
            sx={style.menuBtn}
            onClick={handleOpen}
          >
            <Icon fontSize="small" />
          </Button>
        ) : (
          <Button
            color="secondary"
            variant="outlined"
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            aria-controls={open ? "basic-menu" : undefined}
            endIcon={menus.length > 0 ? <ArrowDropDownIcon /> : undefined}
            onClick={handleOpen}
          >
            {/* {type === "email" ? me?.email : type} */}
          </Button>
        )}
      </Link>

      <MuiMenu
        open={!!open}
        anchorEl={open}
        onClose={() => setOpen(null)}
        MenuListProps={{ "aria-labelledby": "button" }}
      >
        {menus.map((item, index) => {
          const { icon: Icon, name, path, component: Compoennt } = item;

          return Compoennt ? (
            <Compoennt key={index} />
          ) : (
            <Link key={index} href={path || ""}>
              <MenuItem sx={style.menuItem} onClick={() => handleClose(name)}>
                {Icon && <Icon color="menu" />}
                <ListItemText>
                  <Typography color="text.primary">{name}</Typography>
                </ListItemText>
              </MenuItem>
            </Link>
          );
        })}
      </MuiMenu>
    </>
  );
};

export default Menu;
