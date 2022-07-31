import React from "react";

const ReceiptsTable = (receipt) => {
  console.log(receipt);
  const { date, amount, payment, remark } = receipt.receipt;

  return (
    <div>
      {/* <h2>Receipt List</h2>
      <h3>Date: {date}</h3>
      <h3>Amount: {amount}</h3>
      <h3>Payment Type: {payment}</h3>
      <h3>Remark: {remark}</h3> */}

      <table>
        <tbody>
          <tr>
            <td>{date}</td>
            <td>{amount}</td>
            <td>{payment}</td>
            <td>{remark}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ReceiptsTable;
