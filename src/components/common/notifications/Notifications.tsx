import React from 'react'
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import IconButton from '@mui/material/IconButton';

const Notifications = () => {
  return (
    <div>
      <IconButton aria-label="notify">
        <NotificationsNoneIcon />
      </IconButton>
    </div>
  )
}

export default Notifications