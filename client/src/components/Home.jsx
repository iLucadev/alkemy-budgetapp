import React from "react";
import Balance from "./Balance";
import History from "./History";

const Home = () => {
  return (
    <div className="flex flex-1 pt-10 pb-10">
      <div className="w-1/2">
        <Balance />
      </div>
      <div className="w-1/2">
        <History />
      </div>
    </div>
  );
};

export default Home;
