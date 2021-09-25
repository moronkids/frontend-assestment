// /* eslint-disable no-unreachable */
import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import Wrapper from "components/layouts";
import { Hooks } from "providers";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import { useMutation, useQuery } from "react-query";
import { postApproveTrxAgent, postDeclineTrxAgent } from "api/agent";
import { deleteTrx } from "api/customer";
import Popup from "components/layouts/popup/popup";

const Logged = ({ component: Component, ...rest }) => {
  const { isLoading, isError, data, error, mutate } = useMutation(
    "approveTrxAgent",
    async (e) => postApproveTrxAgent({ id_transaksi: 3 }),
    {}
  );
  const {
    isLoading: loadDec,
    isError: isErrorDec,
    data: dataDec,
    error: errDec,
    mutate: mutateDec,
  } = useMutation(
    "approveTrxAgent",
    async (e) => postDeclineTrxAgent({ id_transaksi: 3 }),
    {}
  );
  const {
    isLoading: loadDel,
    isError: isErrorDel,
    data: dataDel,
    error: errDel,
    mutate: mutateDel,
  } = useMutation("deleteTrx", async (e) => deleteTrx({ id_transaksi: 3 }), {});
  const {
    details,
    setDetails,
    confirmation,
    setConfirmation,
    id,
    action,
    setPopUpRate,
    popUpRate,
  } = useContext(Hooks);
  console.log(details, ">>debug");
  useEffect(() => {}, [details]);
  const token = localStorage.getItem("token");
  console.log(token, "sd");
  if (token === null) {
    return <Redirect to="/login" />;
  }
  if (window.location.pathname === "/") {
    return <Redirect to="/home" />;
  }
  //  useEffect(() => {

  // }, [details]);
  const Actx = (action) => {
    if (action == 0) {
      return "Kamu akan membatalkan pembayaran";
    } else if (action == 1) {
      return "Kamu akan mengkonfirmasi pembayaran";
    } else if (action == 2) {
      return "Kamu akan membatalkan pembayaran";
    } else if (action == 3) {
      return "Kamu akan menghapus transaksi";
    }
  };
  const hitConfirmation = (stat) => {
    switch (stat) {
      case 0:
        mutateDec();
        break;
      case 1:
        mutate();
        break;
      case 2:
        mutateDec();
        break;
      case 3:
        mutateDel();
        break;

      default:
        break;
    }
  };
  // /
  return (
    <Route
      {...rest}
      render={(props) => {
        return (
          <>

            <div
              onClick={() => {
                setDetails(false);
                setPopUpRate(false);
                setConfirmation(false);

              }}
              className={`overlay position-fixed d-none ${
                (details || popUpRate) && "d-block"
              }`}
              style={{
                backgroundColor: "#000000",
                width: "100vw",
                height: "100vh",
                zIndex: "148",
                opacity: "0.5",
              }}
            ></div>
            <Dialog
              open={confirmation}
              onClose={(e) => {
                setConfirmation(!confirmation);
                setDetails(false);
              }}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Konfirmasi Transaksi"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  {Actx(action)}
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                {/* action === 1 ? mutate() : mutateDec() */}
                <Button
                  onClick={(e) => {
                    setConfirmation(!confirmation);
                    setDetails(false);
                  }}
                >
                  Disagree
                </Button>
                <Button
                  onClick={(e) => {
                    setConfirmation(!confirmation);
                    setDetails(false);
                    hitConfirmation(action);
                  }}
                  autoFocus
                >
                  Agree
                </Button>
              </DialogActions>
            </Dialog>

            <Wrapper>
              <Popup />
              <Component {...props} />
            </Wrapper>
          </>
        );
      }}
    />
  );
};

export default Logged;
