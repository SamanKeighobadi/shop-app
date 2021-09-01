import React from "react";
import AppHeader from "../common/AppHeader";

const MailLayouts = ({children}) => {
  
  return (
    <div>
      <AppHeader />
      {children}
    </div>
  );
};

export default MailLayouts;
