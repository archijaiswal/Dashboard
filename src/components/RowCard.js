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

const RowCard = () => {
  return (
  
    <Stack spacing={2} direction="row">
      <Grid container spacing={2} sx={{ pt: "16px" }}>
        <Grid item xs={6} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ m: 2 }}>
                Posted Projects
              </Typography>

              <Divider />

              <Grid container spacing={2} sx={{ pt: "16px" }}>
              {["Resume Review", "Interview", "Task", "Payment"].map((text, index) => (
                <>
                  <Grid item xs={8} md={8} key={index}>
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
                <Grid item xs={4} md={4}>
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
          <Card>
            <CardContent>
              <Typography variant="h5" component="div" sx={{ m: 2 }}>
               Recent Activities
              </Typography>

              <Divider />

              <Grid container spacing={2} sx={{ pt: "16px" }}>
                <Grid item xs={8} md={8}>
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
                <Grid item xs={8} md={8}>
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
