import React from "react";
import { styled } from "@mui/material/styles";
import MuiAppBar, { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { IconButton, Toolbar, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { HeaderProps } from "lib/interfaces";
import { Languages, Notifications, User} from "components";

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth: number;
}

/** Custom AppBar component
 * This is primary header of your website
 */
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerwidth}px)`,
    marginLeft: `${drawerwidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header: React.FC<HeaderProps> = ({
  open,
  handleToggleDrawer,
  drawerwidth,
}) => {
  return (
    <AppBar position="fixed" open={open} drawerwidth={drawerwidth}>
      <Toolbar>
        <Box display="flex" alignItems="center">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleToggleDrawer}
            edge="start"
            sx={{ mr: 2, ...(open && { display: "none" }) }}
          >
            <MenuIcon />
          </IconButton>
        </Box>
        {/* Components */}
        <Box display="flex" alignItems="center" marginLeft="auto">
          <Languages />
          <Notifications />
          <User />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
