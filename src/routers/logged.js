import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from 'components/layouts';
const Logged = ({ component: Component, ...rest }) => {
  const token = localStorage.getItem('token');
  console.log(token, "sd")
  if (token === null) {
    return <Redirect to="/login" />
  }
  return (
    <Route
      {...rest}
      render={props => {
        return (
          <>
            <Wrapper>
              <Component {...props} />
            </Wrapper>
          </>
        );
      }}
    />
  );

};

export default Logged;