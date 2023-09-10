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
  const a = JSON.parse(localStorage.getItem('userData'));
  const [lightMode, setLightMode] = React.useState(true);
  const [conversation, setConversation] = React.useState([{}]);
  const match = [];
  const navigate = useNavigate();
  var userId = a._id;
  React.useEffect(() => {
    console.log('ans', userId);
    const config = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${a.token}`,
        'Content-Type': 'application/json',
        'X-User-ID': userId, // Custom header to pass userId
      },
    };
    const fetchData = async () => {
      try {
        const response = await fetch(
          'https://9mv3cy-5000.csb.app/chat/fetch',
          config
        );
        const resData = await response.json();
        console.log('data is', resData);
        setConversation(resData);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [a._id]);

  console.log('d', conversation);
  // ...
  // Your existing code
  // ...
  // Your existing code

  if (conversation.length > 0) {
    // Accessing the users array within the conversation objects using map
    const usersArraysInConversations = conversation.map(
      (conversationItem) => conversationItem.users
    );

    console.log('Users arrays in conversations:', usersArraysInConversations);

    // Find the user whose _id matches a._id
    let matchedUser = null;

    usersArraysInConversations.map((usersArray) => {
      console.log(usersArray);
      if (Array.isArray(usersArray)) {
        const user = usersArray.find((user) => user._id != a._id);
        if (user) {
          matchedUser = user;
          // Exit the loop if a match is found
          console.log('Matched User:', matchedUser);
          match.push(matchedUser);
        }
      }
    });

    console.log('match', match);
    // console.log('Matched User:', matchedUser);

    // Your JSX code for rendering the Sidebar
  }

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
        {match.map((conversation) => (
          <ConversationsItem props={conversation} key={conversation.name} />
        ))}
      </div>
    </div>
  );
}
