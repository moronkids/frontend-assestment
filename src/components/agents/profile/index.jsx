import { agentProfile } from "api/agent";
import React from "react";
import { useQuery } from "react-query";
import Section1 from "./parts/section_1";
import Section2 from "./parts/section_2";
import Section3 from "./parts/section_3";
import Spinner from "assets/img/spinner.svg";
function Index() {
  const { isLoading, isError, data, error, refetch } = useQuery(
    "agentProfile",
    async (e) => await agentProfile(),
    {
      refetchInterval: false,
    }
  );
  return (
   <>
    {isLoading ? (
      <div className="w-100 h-100 d-flex justify-content-center align-items-center m-auto">
      <img src={Spinner} alt="" width={150} height={150} srcset="" />
      </div>
      ) : (
        <div className="profile">
          {" "}
          <Section1 data={data} />
          <hr />
          <Section2 data={data} />
          <Section3 data={data} />

        </div>
      )}
      </>
  );
}

export default Index;
