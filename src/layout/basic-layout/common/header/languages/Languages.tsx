import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import logoUS from 'assets/images/flags/US.svg'
import logoVI from 'assets/images/flags/VI.svg'
import { ListItemIcon, Box, Typography } from '@mui/material';

const Languages = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (event: any) => {
    //console.log(event.target.innerText);
    setAnchorEl(null);
  };
  return (
    <Box>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="inherit"
        onClick={handleClick}
      >
        <img src={logoUS} alt="image" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>
          <ListItemIcon><img src={logoUS} alt="EN"/></ListItemIcon>
          <ListItemIcon>
            <Typography>English</Typography>
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
        <ListItemIcon><img src={logoVI} alt="VI"/></ListItemIcon>
          <ListItemIcon>
            <Typography>Việt Nam</Typography>
          </ListItemIcon>
        </MenuItem>
      </Menu>
    </Box>
  )
}

export default Languages
