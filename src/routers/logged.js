/* eslint-disable no-unreachable */
// /* eslint-disable no-unreachable */
import React, { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
// import { useQuery, QueryClient } from "react-query";
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
import {
  useMutation,
  useQuery,
  QueryClient,
  useQueryClient,
} from "react-query";
import {
  confirmTrx,
  postApproveTrxAgent,
  postDeclineTrxAgent,
  postFinishTrxAgent,
} from "api/agent";
import { deleteTrx } from "api/customer";
import Popup from "components/layouts/popup/popup";

const Logged = ({ component: Component, ...rest }) => {
  // const queryClient = new QueryClient();
  const queryClient = useQueryClient();

  // const refetchQuery = async () => {
  //   await queryClient.refetchQueries();
  // };
  const {
    details,
    setDetails,
    confirmation,
    setConfirmation,
    id,
    action,
    idTrx,
    setPopUpRate,
    popUpRate,
    setAgent,
  } = useContext(Hooks);
  console.log(details, ">>debug");
  const { isLoading, isError, data, error, mutate } = useMutation(
    "approveTrxAgent",
    async (e) => postApproveTrxAgent({ id_transaksi: idTrx }),
    {
      onSuccess: async () => {
        await queryClient.refetchQueries();
      },
    }
  );
  const {
    isLoading: loadDec,
    isError: isErrorDec,
    data: dataDec,
    error: errDec,
    mutate: mutateDec,
  } = useMutation(
    "declineTrxAgent",
    async (e) => postDeclineTrxAgent({ id_transaksi: idTrx }),
    {
      onSuccess: async () => {
        await queryClient.refetchQueries();
      },
    }
  );
  const {
    isLoading: loadFinish,
    isError: isErrorFinish,
    data: dataFinish,
    error: errFinish,
    mutate: mutateFinish,
  } = useMutation(
    "finishTrxAgent",
    async (e) => postFinishTrxAgent({ id_transaksi: idTrx }),
    {
      onSuccess: async () => {
        await queryClient.refetchQueries();
      },
    }
  );
  const {
    isLoading: loadDel,
    isError: isErrorDel,
    data: dataDel,
    error: errDel,
    mutate: mutateDel,
  } = useMutation(
    "deleteTrx",
    async (e) => deleteTrx({ id_transaksi: idTrx }),
    {
      onSuccess: async () => {
        await queryClient.refetchQueries();
      },
    }
  );
  console.log(idTrx, "transaksi");
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
    // alert(action)
    if (action == 0) {
      return "Kamu akan membatalkan transaksi";
    } else if (action == 1) {
      return "Kamu akan mengkonfirmasi transaksi";
    } else if (action == 2) {
      return "Kamu akan menghapus transaksi";
    } else if (action == 3) {
      return "Kamu akan menyelesaikan transaksi";
    } else {
    }
  };

  const hitConfirmation = async (stat) => {
    switch (stat) {
      case 0:
        await mutateDec(); //menolak

        break;
      case 1:
        await mutate(); //confirm

        break;
      case 2:
        await mutateDel(); //delete

        break;
      case 3:
        await mutateFinish();

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
                setAgent(false);
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

            <Popup />
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
