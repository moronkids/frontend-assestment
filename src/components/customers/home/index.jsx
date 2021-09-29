import React from "react";
import NoTransaction from "components/customers/home/parts/NoTransaction";
import DetailTransaction from "components/customers/home/parts/DetailTransaction";
import { getTrxFromCustomer } from "api/customer";
import { useQuery } from "react-query";
import Spinner from 'assets/img/spinner.svg'
function Home() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "getCustomerTrx",
    async (e) => getTrxFromCustomer()
  );
  console.log(">>", data);
  return (
    //<NoTransaction />
    <>
    {
      isLoading ? (
              <div className="w-100 h-100 d-flex justify-content-center align-items-center m-auto">
      <img src={Spinner} alt="" width={150} height={150} srcset="" />
      </div>
      ) :
      (    <DetailTransaction data={data} />)
    }
    </>

  );
}

export default Home;
