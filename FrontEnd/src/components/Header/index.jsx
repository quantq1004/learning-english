import React, { useState } from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Notifications, AccountCircle, ExitToApp } from '@mui/icons-material';
import {
  StyledAvatar,
  StyledTypography,
  StyledBox,
  StyledIconButton,
  StyledMenuItem,
  StyledMenu,
} from './index.style';

const Header = ({ onLogout }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  const handleReturn = () => navigate('/');

  const handleIconClick = (event) => setAnchorEl(event.currentTarget);

  const handleCloseMenu = () => setAnchorEl(null);

  const onLogoutClick = () => {
    onLogout();
    handleCloseMenu();
    window.location.href = '/login';
  };

  return (
    <AppBar>
      <Toolbar>
        <StyledAvatar src="./logo.png" onClick={handleReturn} />
        <StyledTypography onClick={handleReturn}>FlashCards</StyledTypography>
        <StyledBox className="customBox" />
        <StyledBox>
          <StyledIconButton>
            <Notifications />
          </StyledIconButton>
          <StyledIconButton onClick={handleIconClick}>
            <AccountCircle />
          </StyledIconButton>
          <StyledMenu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleCloseMenu}
          >
            <StyledMenuItem onClick={handleCloseMenu} className="customItem">
              Manage your account
            </StyledMenuItem>
            <StyledMenuItem onClick={onLogoutClick}>
              <ExitToApp sx={{ mr: 2 }} />
              Log out
            </StyledMenuItem>
          </StyledMenu>
        </StyledBox>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
