export const BtnStyle = {
  fontFamily: "Helvetica",
  color: "#14343B",
  textTransform: "none",
  backgroundColor: "#F7F8F8",
  fontWeight: "800",
  "&:disabled, &:hover, &:active": {
    backgroundColor: "#D6FE51",
    color: "#14343B",
  },
  margin: "0 2px ",
};

export const BtnStyleSmall = {
  fontFamily: "Helvetica",
  color: "#14343B",
  textTransform: "none",
  fontSize: "10px",
  height: "20px",
  backgroundColor: "#D2D4D4",
  fontWeight: "800",
  "&:disabled, &:hover, &:active": {
    backgroundColor: "#D6FE51",
    color: "#14343B",
  },
  margin: "0 2px ",
};

export const TextFieldStyle = {
  marginTop: "8px",
  "& label.Mui-focused": {
    color: "#537A8B",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#537A8B",
  },
  "& .MuiFilledInput-underline:after": {
    borderBottomColor: "#537A8B",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#537A8B",
    },
    "& .MuiSelect-root": {
      "&.Mui-focused fieldset": {
        borderColor: "#537A8B",
      },
    },
  },
};
