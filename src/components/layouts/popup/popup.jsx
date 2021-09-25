import { postRating } from "api/customer";
import { Hooks } from "providers";
import React, { useContext, useEffect } from "react";
import { useMutation } from "react-query";

function Popup() {
  const { popUpRate, setPopUpRate, details, setDetails } = useContext(Hooks);
  const { isLoading, isError, data, error, mutate } = useMutation(
    "postRating",
    async (e) => postRating({ id_transaksi: 3, rating: 5 }),
    {}
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
      {/* <div
          className="h-100"
          style={{
            height: "100%",
            display: popUpRate && "grid",
          }}
        > */}
      <div
        className={`w-100 h-100 popup-box position-fixed m-auto d-none ${
          popUpRate && "d-block"
        }`}
        style={{
          zIndex: 1000,
        }}
      >
        <div className="m-auto">
          <div className="popup-box__img text-center m-auto"></div>
          <div className="popup-box__desc text-center m-auto">
            Bagaimana pelayanan Antar-Jemput di Barokah?
          </div>
          <div className="popup-box__rate text-center m-auto justify-content-center align-items-center">
            <div className="star-fill" />
            <div className="star-fill" />
            <div className="star-fill" />
            <div className="star-fill" />
            <div className="star-nofill" />
          </div>
          <div
            onClick={() => {
              mutate();
              setPopUpRate(!popUpRate);
              setDetails(!details);
            }}
            className="popup-box__submit text-center m-auto d-flex justify-content-center align-items-center"
            style={{
              cursor: "pointer",
            }}
          >
            Submit
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* </div> */}
    </>
  );
}

export default Popup;
