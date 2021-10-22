import { agentProfile } from "api/agent";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router";
import ChooseTransaction from "./parts/ChooseTransaction";
import FormTransaction from "./parts/FormTransaction";

function Transaction() {
  const { type } = useParams();
  const { isLoading, isError, data, error, refetch } = useQuery(
    "agentProfile",
    async (e) => await agentProfile(),
    {
      refetchInterval: false,
    }
  );
  return (
    <>
      <div className="d-block w-100 d-flex justify-content-center align-items-center mx-auto">
        <FormTransaction data={data} isLoading={isLoading} />
      </div>
    </>
  );
}

export default Transaction;
