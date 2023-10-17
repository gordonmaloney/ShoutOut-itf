import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { useParams } from "react-router-dom";
import { Campaigns } from "../../Campaigns";
import { Button } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import { BtnStyle, BtnStyleSmall } from "../../MuiStyles";
import LaunchIcon from "@mui/icons-material/Launch";
import TweetModal from "./TweetModal";
import { Translations } from "../../Translations";

export const Campaign = () => {
  const { campId } = useParams();
  const Campaign = Campaigns.find((item) => item.id == campId);

  const Languages = Campaign.languages.map((lang) => lang.language);

  const [langIndex, setLangIndex] = useState(0);
  const Language = Languages[langIndex];

  //find translation - use English if none
  const translation =
    Translations.find((item) => item.language == Language)?.copy ||
    Translations.find((item) => item.language == "English").copy;

  const [tweet, setTweet] = useState("");
  const { width } = useWindowSize();

  useEffect(() => {
    setTweet(Campaign.languages[langIndex].content.tweet);
  }, [langIndex, campId]);

  return (
    <div className="pageContainer">
      <Grid container alignItems={"flex-start"} spacing={width > 600 ? 2 : 0}>
        <Grid item id="blurb" xs={12} sm={6}>
          <span className="langBtnBox">
            {Languages.map((lang, index) => (
              <Button
                sx={BtnStyleSmall}
                key={lang}
                size="small"
                disabled={index == langIndex}
                onClick={() => setLangIndex(index)}
              >
                {lang}
              </Button>
            ))}
          </span>

          <h1
            className="campaignTitle"
            style={{ textAlign: width < 600 ? "center" : Language == "العربية" ? "right" : "left", direction: Language == "العربية" && 'rtl' }}
          >
            {Campaign.languages[langIndex].content.title}
          </h1>

          {width > 599 && (
            <p className="blurb" style={{direction: Language == "العربية" && 'rtl'}}>
              {Campaign.languages[langIndex].content.blurb}

              {Campaign.languages[langIndex].content?.link && (
                <>
                  <br />
                  <br />
                  <a
                    target="_blank"
                    href={Campaign.languages[langIndex].content.link}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <LaunchIcon /> {Campaign.languages[langIndex].content.link}
                  </a>
                </>
              )}
            </p>
          )}
        </Grid>

        <Grid item id="tweet" xs={12} sm={6}>
          {width > 600 && (
            <h2 style={{ margin: "35px 0 10px 0", direction: Language == "العربية" && 'rtl' }}>{translation.your_msg}</h2>
          )}
          <div className="TweetBox">
            <TextField
              multiline
              rows={7}
              autofocus
              fullWidth
              value={tweet}
              inputProps={{
                style: {
                  fontSize: "14px",
                  margin: "-10px -5px",
                  lineHeight: "18px",
                },
              }}
              sx={{ backgroundColor: "#F7F8F8", borderRadius: "5px" }}
              onChange={(e) => setTweet(e.target.value)}
            />
            <div
              style={{ textAlign: "right", fontSize: "12px", color: "#F7F8F8" }}
            >
              {tweet.length}/260
            </div>

            <center>
              <TweetModal
                tweet={tweet}
                translation={translation}
                Language={Language}
              />

              <p style={{ color: "white", fontSize: "10px" }}>
                {translation.btn_helper}
              </p>
            </center>
          </div>
        </Grid>

        {width < 600 && (
          <Grid item xs={12}>
            <p className="blurb" style={{direction: Language == "العربية" && 'rtl'}}>
              {Campaign.languages[langIndex].content.blurb}
              {Campaign.languages[langIndex].content?.link && (
                <>
                  <br />
                  <br />

                  <a
                    target="_blank"
                    href={Campaign.languages[langIndex].content.link}
                    style={{ display: "flex", alignItems: "center" }}
                  >
                    <LaunchIcon /> {Campaign.languages[langIndex].content.link}
                  </a>
                </>
              )}
            </p>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
