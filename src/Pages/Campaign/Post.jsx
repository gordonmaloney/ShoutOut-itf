import React from "react";
import shareImg from "../../Images/shareImg.jpeg";
import { useParams } from "react-router-dom";
import { Grid } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import { English, EngBody } from "./Forms/English";
import { Spanish, EsBody } from "./Forms/Spanish";
import { Portuguese, PtBody } from "./Forms/Portuguese";
import { FrBody, French } from "./Forms/French";
import { ArBody, Arabic } from "./Forms/Arabic";

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
          {Language == "French" && <FrBody />}
          {Language == "العربية" && <ArBody />}
          {Language == "हिन्दी" && <EngBody />}

          <img src={shareImg} width="100%" />
        </Grid>

        <Grid item id="tweet" xs={12} sm={6}>
          {Language == "English" && <English />}
          {Language == "Español" && <Spanish />}
          {Language == "Português" && <Portuguese />}
          {Language == "Français" && <French />}
          {Language == "العربية" && <Arabic />}
          {Language == "हिन्दी" && <English />}
        </Grid>
      </Grid>
    </div>
  );
};
