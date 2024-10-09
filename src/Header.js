import React from "react";
import HighlightIcon from "@mui/icons-material/Highlight";

const Header = (props) => {
  return (
    <header>
      <h1>
        <HighlightIcon style={{marginRight: '0.15rem'}}/>
        {props.title}
      </h1>
    </header>
  );
};

export default Header;
