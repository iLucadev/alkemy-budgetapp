import React from "react";

const operationCard = ({ data }) => {
  console.log(data.value);

  return (
    <tr className="h-8">
      <td className="">{data.category}</td>
      <td className="">{data.concept}</td>
      <td className="">${data.value}</td>
    </tr>
  );
};

export default operationCard;
