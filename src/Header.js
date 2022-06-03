import React from "react";
import "./Header.css";
import PersonIcon from "@mui/icons-material/Person";
import IconButton from "@mui/material/IconButton";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import ForumIcon from "@mui/icons-material/Forum";

const Header = () => {
  return (
    <div className="Header">
      <IconButton>
        <PersonIcon fontSize="Large" className="header_icon profile" />
      </IconButton>
      <IconButton>
        <WhatshotIcon fontSize="Large" className="header_icon logo" />
      </IconButton>
      <IconButton>
        <ForumIcon fontSize="Large" className="header_icon forum" />
      </IconButton>
    </div>
  );
};

export default Header;
