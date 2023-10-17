import React, { useEffect, useState } from "react";
import { Grid, TextField } from "@mui/material";
import { Button } from "@mui/material";
import { useWindowSize } from "@uidotdev/usehooks";
import { BtnStyle, BtnStyleSmall } from "../../MuiStyles";
import LaunchIcon from "@mui/icons-material/Launch";
import { Translations } from "../../Translations";

export const Create = () => {
  const [newCampaign, setNewCampaign] = useState({
    id: "",
    languages: [],
  });

  const [newTranslation, setNewTranslation] = useState({
    language: "",
    content: {
      title: "",
      blurb: "",
      tweet: "",
      link: "",
    },
  });

  const { width } = useWindowSize();

  return (
    <div className="pageContainer">
      <Grid container alignItems={"flex-start"} spacing={width > 600 ? 2 : 0}>
        <Grid item id="blurb" xs={12} sm={6}>
          <span className="langBtnBox">
            <Button sx={BtnStyleSmall} size="small" disabled>
              English
            </Button>

            <Button sx={BtnStyleSmall} size="small">
              Add Language
            </Button>
          </span>

          <TextField
            style={{
              textAlign: width < 600 ? "center" : "left",
              margin: "20px 0",
            }}
            value={newTranslation.title}
            label="Campaign Title:"
            fullWidth
            onChange={(e) =>
              setNewTranslation({ ...newTranslation, title: e.target.value })
            }
          />

          {width > 599 && (
            <>
              {" "}
              <TextField
                style={{
                  textAlign: width < 600 ? "center" : "left",
                  marginBottom: "20px",
                }}
                value={newTranslation.blurb}
                multiline
                fullWidth
                label="Campaign Explainer:"
                rows={9}
                onChange={(e) =>
                  setNewTranslation({
                    ...newTranslation,
                    title: e.target.blurb,
                  })
                }
              />
              <TextField
                style={{ textAlign: width < 600 ? "center" : "left" }}
                value={newTranslation.link}
                fullWidth
                label="Link to Further Information"
                onChange={(e) =>
                  setNewTranslation({
                    ...newTranslation,
                    title: e.target.link,
                  })
                }
              />
            </>
          )}
        </Grid>

        <Grid item id="tweet" xs={12} sm={6}>
          <TextField
            multiline
            rows={7}
            autofocus
            fullWidth
            label="Template Tweet:"
            value={newTranslation.tweet}
            inputProps={{
              style: {
                fontSize: "14px",
                margin: "-10px -5px",
                lineHeight: "18px",
              },
            }}
            sx={{ backgroundColor: "#F7F8F8", borderRadius: "5px", marginTop: width>600 ?'46px' : '10px' }}
            onChange={(e) =>
              setNewTranslation({ ...newTranslation, tweet: e.target.value })
            }
          />
          <div
            style={{ textAlign: "right", fontSize: "12px", color: "#F7F8F8" }}
          >
            {newTranslation.tweet?.length}/260
          </div>
        </Grid>

        {width < 600 && (
          <Grid item xs={12}>
            <>
              {" "}
              <TextField
                style={{
                  textAlign: width < 600 ? "center" : "left",
                  marginBottom: "20px",
                  marginTop: "20px",
                }}
                value={newTranslation.blurb}
                multiline
                fullWidth
                label="Campaign Explainer:"
                rows={7}
                onChange={(e) =>
                  setNewTranslation({
                    ...newTranslation,
                    title: e.target.blurb,
                  })
                }
              />
              <TextField
                style={{ textAlign: width < 600 ? "center" : "left" }}
                value={newTranslation.link}
                fullWidth
                label="Link to Further Information"
                onChange={(e) =>
                  setNewTranslation({
                    ...newTranslation,
                    title: e.target.link,
                  })
                }
              />
            </>
          </Grid>
        )}
      </Grid>
    </div>
  );
};
