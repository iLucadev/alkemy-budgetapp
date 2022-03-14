import React, { useState, useEffect, useContext } from "react";
import { Tab } from "@headlessui/react";
import { GlobalContext } from "../store/GlobalContext";

const History = () => {
  let [categories, setCategories] = useState({
    recientes: [],
    ingresos: [],
    egresos: [],
  });

  const { userOperations } = useContext(GlobalContext);

  useEffect(() => {
    const incomes = userOperations.filter((inc) => {
      if (inc.category === "incomes") return inc;
    });
    const expenses = userOperations.filter((exp) => {
      if (exp.category === "expenses") return exp;
    });
    setCategories({
      ...categories,
      egresos: expenses.slice(0, 9),
      ingresos: incomes.slice(0, 9),
      recientes: userOperations.slice(0, 9),
    });
  }, [userOperations]);

  console.log(categories);

  const classNames = (...classes) => {
    return classes.filter(Boolean).join(" ");
  };

  return (
    <div className="flex flex-col items-center space-y-6">
      <h3 className="font-bold text-2xl">Últimas 10 operaciones</h3>
      <div className="w-full">
        <Tab.Group>
          <Tab.List className="flex p-1 space-x-1 bg-gray-500 rounded-xl">
            {Object.keys(categories).map((category) => (
              <Tab
                key={category}
                className={({ selected }) =>
                  classNames(
                    "w-full py-2.5 text-md leading-5 font-medium text-blue-700 rounded-lg",
                    "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60",
                    selected
                      ? "bg-white shadow"
                      : "text-blue-100 hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            {Object.values(categories).map((posts, idx) => (
              <Tab.Panel
                key={idx}
                className={classNames(
                  "rounded-xl",
                  "focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60"
                )}
              >
                <ul className="space-y-2">
                  {posts.map((post) => (
                    <li
                      key={post.operation_id}
                      className="relative rounded-xl bg-slate-200 p-3 hover:bg-coolGray-100 flex justify-between"
                    >
                      <p
                        className={`${
                          post.category === "expenses"
                            ? "text-red-600"
                            : "text-green-600"
                        } w-32 text-lg font-bold leading-5`}
                      >
                        AR${post.amount}
                      </p>
                      <p className="text-md w-32 font-medium leading-5">
                        {post.concept}
                      </p>
                      <p className="text-md w-32 font-medium leading-5">
                        {post.category}
                      </p>
                    </li>
                  ))}
                </ul>
              </Tab.Panel>
            ))}
          </Tab.Panels>
        </Tab.Group>
      </div>
    </div>
  );
};

export default History;
