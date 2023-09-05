import React from 'react';
import './myStyles.css';
import ConversationsItem from './ConversationsItem';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import SearchIcon from '@mui/icons-material/Search';
import LightModeIcon from '@mui/icons-material/LightMode';
import { IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function Sidebar() {
  const [lightMode, setLightMode] = React.useState(true);
  const [conversation, setConversation] = React.useState([
    {
      name: 'John Doe',
      lastMessage: 'Hello!123456789',
      timeStamp: '10:00',
    },
    {
      name: 'heer',
      lastMessage: 'Hello!ddd',
      timeStamp: '10:00',
    },
    {
      name: 'Roby',
      lastMessage: 'Helloyes!',
      timeStamp: '10:00',
    },
  ]);
  const navigate = useNavigate();

  return (
    <div className="sidebar-container">
      <div className={'sb-header' + (!lightMode ? ' dark' : '')}>
        <div>
          <IconButton onClick={() => navigate('/app')}>
            <AccountCircleOutlinedIcon
              className={'icon' + (!lightMode ? ' dark' : '')}
            />
          </IconButton>
        </div>
        <div>
          <IconButton onClick={() => navigate('users')}>
            <PersonAddIcon className={'icon' + (!lightMode ? ' dark' : '')} />
          </IconButton>
          <IconButton onClick={() => navigate('groups')}>
            <GroupAddIcon className={'icon' + (!lightMode ? ' dark' : '')} />
          </IconButton>
          <IconButton onClick={() => navigate('create-groups')}>
            <AddCircleIcon className={'icon' + (!lightMode ? ' dark' : '')} />
          </IconButton>
          <IconButton onClick={() => setLightMode(!lightMode)}>
            {lightMode && (
              <NightlightIcon
                className={'icon' + (!lightMode ? ' dark' : '')}
              />
            )}
            {!lightMode && (
              <LightModeIcon className={'icon' + (!lightMode ? ' dark' : '')} />
            )}
          </IconButton>
        </div>
      </div>
      <div className={'sb-search' + (!lightMode ? ' dark' : '')}>
        <IconButton>
          <SearchIcon className={'icon' + (!lightMode ? ' dark' : '')} />
        </IconButton>
        <input
          placeholder="search"
          className={'search-box' + (!lightMode ? ' dark' : '')}
        />
      </div>
      <div className={'sb-conversation' + (!lightMode ? ' dark' : '')}>
        {conversation.map((conversation) => (
          <ConversationsItem props={conversation} key={conversation.name} />
        ))}
      </div>
    </div>
  );
}
