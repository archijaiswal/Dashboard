import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
// import { styled } from "@mui/material/styles";

import icon1 from "../images/icon1.png";
import edit from "../images/edit.png";
import bookmark from "../images/bookmark.png";
import watch from "../images/watch.png";
import "../App.css";
const Infocard = () => {
  // const StyledCard = styled(Card)(() => ({
  //   display: "flex",
  //   p: "8px",
  //   border: 1,
  //   borderColor: "#5f666b",
  //   borderRadius: "8px",
  // }));
  return (
    <Grid container spacing={{ xs: 1, md: 2 }} sx={{ pt: "24px" }}>
      {/* First Row */}
      <Grid item xs={12} md={3}>
        <Card className="common">
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
      <Grid item xs={12} md={3}>
        <Card className="common">
          <CardContent sx={{ width: "75%" }}>
            <Typography variant="h3" component="div">
              08
            </Typography>
            <Typography>Proposals</Typography>
          </CardContent>

          <Box p={2} component="span" sx={{ m: "auto" }}>
            <img src={edit} alt="" />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card className="common">
          <CardContent sx={{ width: "75%" }}>
            <Typography variant="h3" component="div">
              07
            </Typography>
            <Typography>Active Jobs</Typography>
          </CardContent>

          <Box p={2} component="span" sx={{ m: "auto" }}>
            <img src={bookmark} alt="" />
          </Box>
        </Card>
      </Grid>
      <Grid item xs={12} md={3}>
        <Card className="common">
          <CardContent sx={{ width: "75%" }}>
            <Typography variant="h3" component="div">
              40
            </Typography>
            <Typography>Applications</Typography>
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
