import React from "react";

const ReceiptsTable = ({ receipt }) => {
  const { date, amount, payment, remark } = receipt;

  return (
    <div>
      <h2>Receipt List</h2>
      <h3>Date: {date}</h3>
      <h3>Amount: {amount}</h3>
      <h3>Payment Type: {payment}</h3>
      <h3>Remark: {remark}</h3>
    </div>
  );
};

export default ReceiptsTable;
