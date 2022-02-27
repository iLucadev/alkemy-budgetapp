import React from "react";
import Chart from "./Chart";

const Balance = () => {
  return (
    <div className="col-start-2 col-span-3 flex flex-col justify-center font-bold">
      <h2 className="text-lg">Balance: Junio</h2>
      <div className="flex justify-center space-x-6">
        <div className="flex flex-col">
          <div className="flex justify-center space-x-2">
            <p className="font-mono text-4xl">AR$189,74</p>
            <p className="place-self-center text-green-500 text-md">+1,54%</p>
          </div>
          <div className="flex justify-center divide-x font-semibold mt-4">
            <div className="px-6">
              <p className="text-md">Ingresos</p>
              <p className="text-xl text-green-500 ">AR$281,17</p>
            </div>
            <div className="px-6">
              <p className="text-md">Egresos</p>
              <p className="text-xl text-red-500 ">AR$72,65</p>
            </div>
          </div>
        </div>
        <Chart />
      </div>
    </div>
  );
};

export default Balance;
