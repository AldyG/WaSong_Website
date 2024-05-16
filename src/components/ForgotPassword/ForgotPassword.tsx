/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import React from "react";
import "./style.css";

interface Props {
  divClassName: any;
}

export const ForgotPassword = ({ divClassName }: Props): JSX.Element => {
  return (
    <div className="forgot-password">
      <div className={`text-wrapper-3 ${divClassName}`}>Forgot Password?</div>
    </div>
  );
};