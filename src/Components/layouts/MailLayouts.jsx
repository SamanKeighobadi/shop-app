import React from "react";
import AppHeader from "../common/AppHeader";

const MailLayouts = ({children,productLength}) => {
  
  return (
    <div>
      <AppHeader productLength={productLength} />
      {children}
    </div>
  );
};

export default MailLayouts;
