import { agentProfile } from "api/agent";
import React from "react";
import { useQuery } from "react-query";
import Section1 from "./parts/section_1";
import Section2 from "./parts/section_2";
import Section3 from "./parts/section_3";

function Index() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "login",
    async (e) => await agentProfile(),
    {
      refetchInterval: false,
    }
  );
  return (
    <div className="profile">
      <Section1 data={data} />
      <hr />
      <Section2 data={data} />
      <Section3 data={data} />
    </div>
  );
}

export default Index;
