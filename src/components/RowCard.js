import React from "react";
import TimelineDot from "@mui/lab/TimelineDot";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Divider,
  Box,
  Stack,
} from "@mui/material";
import '../App.css'
const RowCard = () => {
  return (
  
    <Stack spacing={2} direction="row" sx={{p:0}}>
      <Grid container spacing={2} sx={{ px:0}}>
        <Grid item xs={6} md={6} className="padl">
          <Card sx={{ pl:0, border: 1, borderColor: "#5f666b" ,borderRadius: '8px'}} >
            <CardContent> 
              <Typography variant="h5" component="div" sx={{ m: 2 }}>
                Posted Projects
              </Typography>

              <Divider />

              <Grid container spacing={2} sx={{ pt:2}}>
              {["Resume Review", "Interview", "Task", "Payment"].map((text, index) => (
                <>
                  <Grid item xs={8} md={8} key={index} sx={{'&:hover': { background: 'black' }}}>
                  <Box
                    sx={{
                      width: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    Lorem ipsum dolor sit amet
                  </Box>
                </Grid>
                <Grid item xs={4} md={4} >
                  <Stack direction="row">
                     {index % 2 === 0 ? 
                     <TimelineDot color="error" sx={{ marginTop: "6.5px" }} /> 
                     :<TimelineDot color="warning" sx={{ marginTop: "6.5px" }} />} 
                    
                    <Typography sx={{ pl: 2 }}>{text}</Typography>
                  </Stack>
                </Grid>
                </>
               ))}
              </Grid>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={6} md={6}>
          <Card sx={{border: 1, borderColor: "#5f666b" ,borderRadius: '8px', ml:0}}>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ m: 2 }}>
               Recent Activities
              </Typography>

              <Divider />

              <Grid container spacing={2} sx={{ pt: 2 }}>
                <Grid item xs={8} md={8} sx={{'&:hover': { background: 'black' }}}>
                <Stack direction="row">
                    <TimelineDot color="success" sx={{ marginTop: "6.5px" }} />
                    <Typography sx={{ pl: 2 }}>Interview is scheduled</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4} md={4}>
                <Typography
                    sx={{
                      width: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    6.29 P.M.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ pt: "16px" }}>
                <Grid item xs={8} md={8} sx={{'&:hover': { background: 'black' }}}>
                <Stack direction="row">
                    <TimelineDot color="warning" sx={{ marginTop: "6.5px" }} />
                    <Typography sx={{ pl: 2 }}>Interview is scheduled</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4} md={4}>
                <Typography
                    sx={{
                      width: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    6.29 P.M.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ pt: "16px" }}>
                <Grid item xs={8} md={8}>
                <Stack direction="row">
                    <TimelineDot color="info" sx={{ marginTop: "6.5px" }} />
                    <Typography sx={{ pl: 2 }}>Interview is scheduled</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4} md={4} sx={{'&:hover': { background: 'black' }}} >
                <Typography
                    sx={{
                      width: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    6.29 P.M.
                  </Typography>
                </Grid>
              </Grid>
              <Grid container spacing={2} sx={{ pt: "16px" }}>
                <Grid item xs={8} md={8} sx={{'&:hover': { background: 'black' }}} >
                <Stack direction="row">
                    <TimelineDot color="primary" sx={{ marginTop: "6.5px" }} />
                    <Typography sx={{ pl: 2 }}>Interview is scheduled</Typography>
                  </Stack>
                </Grid>
                <Grid item xs={4} md={4}>
                <Typography
                    sx={{
                      width: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    6.29 P.M.
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default RowCard;
