import { getTrxFromCustomer, postRating } from "api/customer";
import { Hooks } from "providers";
import React, { useContext, useEffect, useState } from "react";
import { useMutation, useQueryClient } from "react-query";

function Popup() {
  const {
    popUpRate,
    setPopUpRate,
    details,
    setDetails,
    idTrx,
    agent,
    rateCustomer,
  } = useContext(Hooks);
  const queryClient = useQueryClient();
  const [star, setStar] = useState([0, 0, 0, 0, 0]);
  const { isLoading, isError, data, error, mutate } = useMutation(
    "postRating",
    async (e) =>
      postRating({
        id_transaksi: idTrx,
        rating: star.filter((x) => x === 1).length,
      }),
    {
      onSuccess: async () => {
        await queryClient.fetchQuery("getCustomerTrx", getTrxFromCustomer(), {
          staleTime: 10000,
        });
      },
    }
  );
  useEffect(() => {}, [popUpRate]);
  return (
    <>
      {/* <div
        className={`w-100 h-100 popup position-fixed d-none ${
          popUpRate && "d-block"
        }`}
        style={{ zIndex: "1000" }}
      > */}
      <div
        className="h-100"
        style={{
          height: "100%",
          display: popUpRate ? "flex" : "none",
          position: "absolute",
          // display: "flex",
          width: "100vw",
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <div
          className={`w-100 h-100 popup-box position-fixed m-auto d-none ${
            popUpRate && "d-block"
          }`}
          style={{
            zIndex: 1000,
          }}
        >
          {agent ? (
            <>
              <div className="d-block text-center mx-auto w-100 h-100">
                <div className="d-flex justify-content-center align-items-center h-100">
                  <div className="d-block">
                    <h3 className="text-center">Your Rate :</h3>
                    <h1
                      style={{
                        fontSize: "80px",
                      }}
                    >
                      {rateCustomer}
                    </h1>
                    <h4>
                      <i>
                        This is transaction rate where is giving by our beloved
                        customer
                      </i>
                    </h4>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="m-auto">
              <div className="popup-box__img text-center m-auto"></div>
              <div className="popup-box__desc text-center m-auto">
                Bagaimana pelayanan Antar-Jemput di Barokah?
              </div>
              <div className="popup-box__rate text-center m-auto justify-content-center align-items-center">
                {star.map((val, i) => (
                  <div
                    className={`star-${val === 0 ? "no" : ""}fill`}
                    onClick={async () => {
                      const newArr = [0, 0, 0, 0, 0];

                      for (let ix = 0; ix <= i; ix++) {
                        newArr[ix] = 1;
                      }
                      await setStar([...newArr]);
                    }}
                  />
                ))}
                {/* <div className="star-fill" />
              <div className="star-fill" />
              <div className="star-fill" />
              <div className="star-fill" />
              <div className="star-nofill" /> */}
              </div>
              <div
                onClick={() => {
                  mutate();
                  setPopUpRate(isLoading);
                  setDetails(false);
                }}
                className="popup-box__submit text-center m-auto d-flex justify-content-center align-items-center"
                style={{
                  cursor: "pointer",
                }}
              >
                Submit
              </div>
            </div>
          )}
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Popup;
