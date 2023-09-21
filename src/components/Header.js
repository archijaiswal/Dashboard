import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import AddIcon from '@mui/icons-material/Add';
import Toolbar from '@mui/material/Toolbar';
import AppBar from '@mui/material/AppBar';

import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import {
 
    Box,
    IconButton,
  } from "@mui/material";
const Header = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: '50px',
        backgroundColor: 'black',
        '&:hover': {
          // backgroundColor: alpha(theme.palette.common.white, 0.25),
          backgroundColor: '#2A3235'
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        }
      }));

      
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  return (
    <Box sx={{ flexGrow: 1}}>
        <AppBar position="static" elevation={0} sx={{pt:2, backgroundColor:'#20272C'}}>
        <Toolbar>
         <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton sx={{pr:2}}> 
          <Badge color="error" overlap="circular" badgeContent=" " 
          // variant="dot"
          >
                <NotificationsNoneOutlinedIcon />
              </Badge>
              </IconButton>

      <Button variant="contained"><AddIcon />Create New Project</Button>
    
      </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;

