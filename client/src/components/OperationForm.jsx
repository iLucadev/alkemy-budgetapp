import React, { useEffect } from "react";
import { useState } from "react";

const OperationForm = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState({
    concept: null,
    category: null,
    amount: null,
  });

  const handleButton = () => {
    setIsActive(!isActive);
  };

  const handleChange = (e) => {
    setData((oldValues) => ({ ...oldValues, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  useEffect(() => {
    console.log(isActive);
    console.log(data);
  });

  return (
    <div className="row-start-4 row-span-2 col-start-2 col-span-3 py-4 space-y-3 flex justify-center">
      {!isActive ? (
        <button
          className="h-10 px-6 font-semibold rounded-md bg-green-500 text-white"
          onClick={handleButton}
        >
          Nuevo registro
        </button>
      ) : (
        <div className="w-96 space-y-4 pb-4">
          <h1 className="text-lg font-semibold text-slate-900">
            Nuevo registro
          </h1>
          <form
            onSubmit={handleSubmit}
            className="flex justify-between items-end flex-wrap"
          >
            <div className="flex flex-col items-start w-44">
              <label htmlFor="concept" className="font-semibold text-sm">
                Concept
              </label>
              <select
                name="concept"
                value={data.concept}
                onChange={handleChange}
                className="w-full h-8 border-2 border-gray-200 rounded outline-none focus:border-purple-500"
              >
                <option value="income" selected>
                  income
                </option>
                <option value="income">expense</option>
              </select>
            </div>
            <div className="flex flex-col items-start w-44">
              <label htmlFor="category" className="font-semibold text-sm">
                Category
              </label>
              <input
                type="text"
                name="category"
                value={data.category}
                onChange={handleChange}
                className="w-full h-8 border-2 border-gray-200 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex flex-col items-start w-44">
              <label htmlFor="amount" className="font-semibold text-sm">
                Amount
              </label>
              <input
                type="number"
                name="amount"
                value={data.amount}
                onChange={handleChange}
                className="w-full h-8 border-2 border-gray-200 rounded outline-none focus:border-purple-500"
              />
            </div>
            <div className="flex justify-between w-44">
              <button
                type="submit"
                className="h-10 px-6 font-semibold rounded-md bg-blue-500 text-white"
              >
                Aceptar
              </button>
              <button
                className="h-10 font-semibold text-slate-900"
                onClick={handleButton}
              >
                cancelar
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default OperationForm;
