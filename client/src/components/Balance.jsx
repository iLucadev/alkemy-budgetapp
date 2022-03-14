import React, { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../store/GlobalContext";
import Chart from "./Chart";

const Balance = () => {
  const [userIncomes, setUserIncomes] = useState([]);
  const [userExpenses, setUserExpenses] = useState([]);

  const { userOperations } = useContext(GlobalContext);

  useEffect(() => {
    const incomes = userOperations.map((inc) => {
      return inc.category === "incomes" ? inc.amount : null;
    });

    const expenses = userOperations.map((exp) => {
      return exp.category === "expenses" ? exp.amount : null;
    });

    console.log(incomes, expenses);

    setUserIncomes(incomes);
    setUserExpenses(expenses);
  }, [userOperations]);

  let totalExpenses = 0;
  totalExpenses = userExpenses.reduce(
    (previous, current) => previous + current,
    totalExpenses
  );

  let totalIncomes = 0;
  totalIncomes = userIncomes.reduce(
    (previous, current) => previous + current,
    totalIncomes
  );

  let balance = totalIncomes - totalExpenses;

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="flex flex-col justify-between h-full font-bold">
      <div className="flex flex-col justify-between h-1/3">
        <div className="flex flex-col justify-center items-center space-y-4">
          <p className="text-2xl">Balance</p>
          <div className="flex space-x-2">
            <p
              className={classNames(
                "font-mono",
                "text-6xl",
                balance > 0 ? "text-slate-800" : "text-red-600"
              )}
            >
              AR${balance}
            </p>
          </div>
        </div>
        <div className="flex justify-center divide-x font-semibold">
          <div className="flex flex-col items-center space-y-2 px-8">
            <p className="text-xl">Ingresos</p>
            <p className="text-4xl text-green-500 ">AR${totalIncomes}</p>
          </div>
          <div className="flex flex-col items-center space-y-2 px-8">
            <p className="text-xl">Egresos</p>
            <p className="text-4xl text-red-500 ">AR${totalExpenses}</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center h-2/3">
        <Chart />
      </div>
    </div>
  );
};

export default Balance;
