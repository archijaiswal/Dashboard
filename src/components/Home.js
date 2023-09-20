import React,{useContext} from "react";
import {  Typography, 
  Box,
} from "@mui/material";
import CssBaseline from '@mui/material/CssBaseline';


import Sidebar from "./Sidebar";
import Infocard from "./Infocard";
import RowCard from "./RowCard";
import Header from "./Header";
import { UserContext } from "../context/UserContext";
const Home = () => {
  const user = useContext(UserContext);
  return (
    <div>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Sidebar />
       
          <Box sx={{width:'100%'}}>
          <Header />
            <Box spacing={2} sx={{width:'100%', p:'24px', mt:'69px'}}>
            <Box sx={{mb: 2}}>
              <Typography variant="h4" fontWeight={500}>
                Welcome back, {user.name}
              </Typography>
              <Typography fontWeight={300} variant="h6" >
                Track, Manage researchers and submissions.
              </Typography>
              <Infocard />
              </Box>
              <RowCard />
            </Box>
        </Box>
      </Box>
    </div>
  );
};

export default Home;
