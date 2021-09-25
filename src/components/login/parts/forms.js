import React, { useState } from "react";
import { useMutation, useQuery } from "react-query";
import { apiLogin } from "api/auth";

function Forms() {
  const [email, setEmail] = useState(null);
  const [pass, setPass] = useState(null);
  const { isLoading, isError, data, error, mutate } = useMutation(
    "login",
    async (e) => {
      await apiLogin({
        username: email,
        password: pass,
      });
    },
    {
      refetchInterval: false,
    }
  );

  return (
    <div className="forms h-100">
      <div className="wrapLogin ">
        <div className="iconLogin d-flex m-auto" />
        <div className="formLogin">
          <div className="inputLogin">
            <div className="label">Email</div>
            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputLogin">
            <div className="label">Password</div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="wrapBtn d-flex justify-content-center align-items-center">
            <div className="btnLogin" onClick={(e) => mutate(e)}>
              LOGIN
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Forms;
