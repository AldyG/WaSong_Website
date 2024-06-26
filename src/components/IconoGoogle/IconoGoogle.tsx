/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

interface Props {
  className: any;
  iconoGoogle: string;
}

export const IconoGoogle = ({ className, iconoGoogle = "/img/icono-google.png" }: Props): JSX.Element => {
  return (
    <div className={`icono-google ${className}`}>
      <img className="img" alt="Icono google" src={iconoGoogle} />
    </div>
  );
};

IconoGoogle.propTypes = {
  iconoGoogle: PropTypes.string,
};
