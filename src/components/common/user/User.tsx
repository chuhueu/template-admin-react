import React from 'react'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import IconButton from '@mui/material/IconButton';

const User = () => {
  return (
    <div>
      <IconButton aria-label="user">
        <AccountCircleOutlinedIcon />
      </IconButton>
    </div>
  )
}

export default User