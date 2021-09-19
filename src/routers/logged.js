import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from 'components/layouts';
import { Hooks } from "providers";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@material-ui/core";
import { useMutation, useQuery } from "react-query";
import { postApproveTrxAgent, postDeclineTrxAgent } from "api/agent";
const Logged = ({ component: Component, ...rest }) => {
  const { isLoading, isError, data, error, mutate } = useMutation(
    "approveTrxAgent",
    async (e) => postApproveTrxAgent({"id_transaksi" : 3}),
    {}
  );
  const { isLoading:loadDec, isError: isErrorDec, data: dataDec, error: errDec, mutate: mutateDec } = useMutation(
    "approveTrxAgent",
    async (e) => postDeclineTrxAgent({"id_transaksi" : 3}),
    {}
  );
  const {details, setDetails, confirmation, setConfirmation, id, action} = useContext(Hooks);
  const token = localStorage.getItem('token');
  console.log(token, "sd")
  if (token === null) {
    return <Redirect to="/login" />
  }
  if(window.location.pathname === '/'){
    return <Redirect to="/home" />
  }

  return (
    <Route
      {...rest}
      render={props => {
        return (
          <>
            <Dialog
        open={confirmation}
        onClose={(e) => {setConfirmation(!confirmation); setDetails(false)}}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Konfirmasi Transaksi"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {
              action === 1 ?
              'Kamu akan mengkonfirmasi pembayaran' : 'Kamu akan membatalkan pembayaran'
            }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={(e) => {setConfirmation(!confirmation); setDetails(false); }}>Disagree</Button>
          <Button onClick={(e) => {setConfirmation(!confirmation); setDetails(false); action === 1 ? mutate() : mutateDec()}} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
            <div
            onClick={() => setDetails(!details)}
            className={`overlay position-fixed d-none ${details && 'd-block'}`}
            style={{
              backgroundColor: "#000000",
              width: "100vw",
              height: "100vh",
              zIndex: '148',
              opacity: '0.5'
            }}>

            </div>
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