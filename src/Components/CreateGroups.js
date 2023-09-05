import React from 'react';
import './myStyles.css';
import DoneOutlineRoundedIcon from '@mui/icons-material/DoneOutlineRounded';
import { IconButton } from '@mui/material';

export default function CreateGroups() {
  return (
    <div className="createGroups-container">
      <input placeholder="Group Name" className="search-box" />
      <IconButton>
        <DoneOutlineRoundedIcon />
      </IconButton>
    </div>
  );
}
