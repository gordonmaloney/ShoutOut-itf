import React from "react";
import { Campaigns } from "../../Campaigns";

import { Card, CardContent, Grid } from "@mui/material";
import { Link } from "react-router-dom";

export const Browse = () => {
  console.log(Campaigns[0].languages[0]);
  return (
    <div className="pageContainer">
      <Grid container spacing={2} justifyContent={"center"}>
        {[...Campaigns].reverse().map((camp) => (
          <Grid item>
            <Link to={`campaign/${camp.id}`} style={{ textDecoration: "none" }}>
              <Card sx={{ width: "200px", height: "200px" }}>
                <CardContent>
                  <h3 style={{ marginTop: 0 }}>
                    {camp.languages[0].content.title}
                  </h3>
                  <p className="browseCard">
                    {camp.languages[0].content.blurb}
                  </p>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
