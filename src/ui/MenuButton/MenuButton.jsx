import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MenuButton = styled(Button)({
    width: "192px",
    height: "48px",
    justifyContent: "left",
    margin: "0 auto",
    paddingLeft: "20px",
    fontSize: "14px",
    fontWeight: "500",
    lineHeight: "22px",
    textTransform: "none",
    borderRadius: "12px",
    boxShadow: "none",
    color: "#212121",
    fontFamily: ["Inter"].join(","),
    "&:hover": {
      backgroundColor: "#E1E1F7",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "#E1E1F7",
    },
  });

  export default MenuButton;