import React from "react";
import NoRequest from "components/agents/home/part/noRequest";
import DetailRequest from "components/agents/home/part/detailRequest";
import { useQuery } from "react-query";
import { getTrxFromAgent } from "api/agent";

function Home() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "getTrxFromAgent",
    async (e) => getTrxFromAgent(),
    {}
  );

  return (
    //   <noRequest />
    <>
      <DetailRequest data={data} isLoading={isLoading} />
    </>
  );
}

export default Home;
