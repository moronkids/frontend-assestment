import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
const guest = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <>
            <Component {...props} />
          </>
        );
      }}
    />
  );

};

export default guest;