import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import { English, EngBody } from "./Forms/English";
import { Spanish, EsBody } from "./Forms/Spanish";
import { Portuguese, PtBody } from "./Forms/Portuguese";
export const Post = () => {
  const { Language } = useParams();
  const { width } = useWindowSize();

  return (
    <div className="pageContainer">
      <Grid container alignItems={"flex-start"} spacing={width > 600 ? 2 : 0}>
        <Grid item id="blurb" xs={12} sm={6}>
          {Language == "English" && <EngBody />}
          {Language == "Español" && <EsBody />}
          {Language == "Português" && <PtBody />}

          <img
            style={{ display: width < 600 && "none" }}
            src="https://www.itfglobal.org/sites/default/files/styles/node_main/public/node/news/image/1-JAS-IMG_9975.jpg?itok=lrO10hIu"
            width="100%"
          />
        </Grid>

        <Grid item id="tweet" xs={12} sm={6}>
          {Language == "English" && <English />}
          {Language == "Español" && <Spanish />}
          {Language == "Português" && <Portuguese />}
        </Grid>
      </Grid>
    </div>
  );
};
