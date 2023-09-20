import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import icon1 from "../images/icon1.png";
import edit from "../images/edit.png";
import bookmark from "../images/bookmark.png";
import watch from "../images/watch.png"
const Infocard = () => {
  return (
    <Grid container spacing={2} sx={{pt:'16px'}}>
      {/* First Row */}
      <Grid item xs={3} md={3}>
        <Card
          sx={{ display: "flex", p: "8px", border: 1, borderColor: "#3C4246" ,borderRadius: '8px' }}
        >
          <CardContent sx={{ width: "75%" }}>
            <Typography variant="h3" component="div">
              07
            </Typography>
            <Typography>Active User</Typography>
          </CardContent>

          <Box p={2} component="span" sx={{ m: "auto" }}>
            <img src={icon1} alt="" />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={3} md={3}>
      <Card
          sx={{ display: "flex", p: "8px", border: 1, borderColor: "#3C4246",borderRadius: '8px'  }}
        >
          <CardContent sx={{ width: "75%" }}>
            <Typography variant="h3" component="div">
              03
            </Typography>
            <Typography>Active Jobs</Typography>
          </CardContent>

          <Box p={2} component="span" sx={{ m: "auto" }}>
            <img src={edit} alt="" />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={3} md={3}>
      <Card
          sx={{ display: "flex", p: "8px", border: 1, borderColor: "#3C4246" ,borderRadius: '8px' }}
        >
          <CardContent sx={{ width: "75%" }}>
            <Typography variant="h3" component="div">
              07
            </Typography>
            <Typography>Active User</Typography>
          </CardContent>

          <Box p={2} component="span" sx={{ m: "auto" }}>
            <img src={bookmark} alt="" />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={3} md={3}>
      <Card
          sx={{ display: "flex", p: "8px", border: 1, borderColor: "#3C4246", borderRadius: '8px' }}
        >
          <CardContent sx={{ width: "75%" }}>
            <Typography variant="h3" component="div">
              04
            </Typography>
            <Typography>Proposals</Typography>
          </CardContent>

          <Box p={2} component="span" sx={{ m: "auto" }}>
            <img src={watch} alt="" />
          </Box>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Infocard;
