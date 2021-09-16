import React from "react";
import NoTransaction from "components/customers/home/parts/NoTransaction";
import DetailTransaction from "components/customers/home/parts/DetailTransaction";
import { getTrxFromCustomer } from "api/customer";
import { useQuery } from "react-query";

function Home() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "getCustomerTrx",
    async (e) => getTrxFromCustomer()
  );
  console.log(">>", data);
  return (
    //<NoTransaction />
    <DetailTransaction data={data} />
  );
}

export default Home;
