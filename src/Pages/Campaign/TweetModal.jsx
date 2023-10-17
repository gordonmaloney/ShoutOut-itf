import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { BtnStyle } from "../../MuiStyles";
import { useNavigate } from "react-router-dom";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  maxWidth: "95vw",
  bgcolor: "#14343B",
  border: "2px solid #14343B",
  boxShadow: 24,
  p: 2,
  borderRadius: "10px",
};

export default function TweetModal({ tweet, Language, translation }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleTweet = () => {
    let sendLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      tweet + "\nvia @ITFglobalunion"
    )}`;

    const width = 550;
    const height = 400;
    const left = window.innerWidth / 2 - width / 2;
    const top = window.innerHeight / 2 - height / 2;

    const windowFeatures = `width=${width},height=${height},left=${left},top=${top}`;

    window.open(sendLink, "twitter", windowFeatures);

    setTimeout(() => {
      navigate(`/post/${Language}`);
    }, 3000);
  };

  return (
    <div>
      <Button style={BtnStyle} onClick={handleOpen}>
        {translation.btn_text}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, direction: Language == "العربية" && "rtl" }}>
          <div
            style={{
              backgroundColor: "#F7F8F8",
              padding: "10px",
              borderRadius: "5px",
              paddingBottom: "1px",
              marginBottom: "10px",
            }}
          >
            <h3 style={{ marginTop: 0 }}>{translation.modal_title}</h3>

            <p>{translation.modal_text}</p>
          </div>

          <center>
            <Button onClick={handleTweet} sx={BtnStyle}>
              {translation.modal_btn}
            </Button>
          </center>
        </Box>
      </Modal>
    </div>
  );
}
