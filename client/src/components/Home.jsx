import React from "react";
import Balance from "./Balance";
import RecordCard from "./History";
import OperationForm from "./OperationForm";

const Home = () => {
  return (
    <div className="flex-1 grid grid-rows-4 grid-cols-5 justify-center text-center h-3/6 space-y-8">
      <Balance />
      <RecordCard />
      <OperationForm />
    </div>
  );
};

export default Home;
