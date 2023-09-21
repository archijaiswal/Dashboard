import React, {useContext} from "react"; 
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Avatar from '@mui/material/Avatar';
import Divider from "@mui/material/Divider";
import CardHeader from '@mui/material/CardHeader';
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import logo from "../images/reslink.png";
import Avatar1 from "../images/Avatar1.png";
import {UserContext} from "../context/UserContext";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import MailIcon from '@mui/icons-material/Mail';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
const drawerWidth = 240;

export default function Sidebar() {
  const user = useContext(UserContext);
  // console.log(user);
  return (
    <Box sx={{ flexGrow: 1}}>
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#23262D",
      
        },
        "&. MuiList-root":{
              ":hover": {
            bgcolor: "pink",},
        },        
        pl:2,
      }}
      variant="permanent"
      anchor="left"
    >
      <List sx={{pl:2,pr:2}}>
        <ListItemButton sx={{'&:hover': { background: 'black' }}}>
          <ListItemIcon sx={{mt:2, mb:2}}>
            <img src={logo} alt="" height={35} />
          </ListItemIcon>
        </ListItemButton>
        {["Dashboard", "Project", "Staffing", "Messages"].map((text, index) => (
          <ListItem key={index} disablePadding sx={{'&:hover': { background: 'black' }}}>
            <ListItemButton>
              <ListItemIcon>
                {index%2 === 0 ? <BarChartOutlinedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    
      <Box sx={{ flexGrow: 1 }} />
      <List sx={{pl:2,pr:2}}>
        {["Support", "Settings"].map((text, index) => (
          <ListItem key={index} disablePadding sx={{'&:hover': { background: 'black' }}}>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <SettingsOutlinedIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <CardHeader sx={{pl:2,pr:2}}
    title={user.name}
    subheader={user.email}
    avatar={<Avatar alt="" src={Avatar1} />
  }
   />
    </Drawer>
    </Box>
  );
}
