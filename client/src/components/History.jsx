import React from "react";
import { records } from "../utils/records";
import OperationCard from "./OperationCard";

const History = () => {
  return (
    <div className="row-start-2 row-span-3 col-start-2 col-span-3 space-y-3 flex flex-col items-center">
      <h3 className="font-bold text-md">Últimas 10 operaciones</h3>
      <table className="table-auto w-3/4">
        <thead className="font-bold text-md text-slate-700 bg-slate-200">
          <tr>
            <th>Categoría</th>
            <th>Concepto</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {records.map((record) => (
            <OperationCard key={record.index} data={record} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default History;
