import React, { useRef, useState } from "react";
import ReceiptsTable from "./ReceiptsTable";

const Receipt = () => {
  const dateRef = useRef("");
  const amountRef = useRef(0);
  const paymentRef = useRef("");
  const remarkRef = useRef("");

  const [receipts, setReceipts] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = dateRef.current.value;
    const amount = amountRef.current.value;
    const payment = paymentRef.current.value;
    const remark = remarkRef.current.value;
    const receipt = {
      date: date,
      amount: amount,
      payment: payment,
      remark: remark,
    };

    setReceipts((receipts) => [...receipts, receipt]);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Receipt Details</h2>
        <label htmlFor="date">Date: </label>
        <input
          type="datetime"
          ref={dateRef}
          name="date"
          id=""
          placeholder="Enter Date"
        />
        <br />
        <label htmlFor="amount">Amount: </label>
        <input
          type="text"
          name="amount"
          ref={amountRef}
          id=""
          placeholder="Enter Amount (in INR) "
        />
        <br />
        <label htmlFor="paymentmode">Payment Mode: </label>
        <select name="paymentmode" id="" ref={paymentRef}>
          <option value="Cash">Cash</option>
          <option value="Debit Card">Debit Card</option>
          <option value="Credit Card">Credit Card</option>
        </select>
        <br />
        <label htmlFor="amount">Remark: </label>
        <input
          type="text"
          name="remark"
          id=""
          ref={remarkRef}
          placeholder="Enter Remark"
        />
        <br />
        <button type="submit">Submit</button>
        {receipts.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Amount</th>
                <th>Payment Mode</th>
                <th>Remark</th>
              </tr>
            </thead>
          </table>
        )}
        {receipts.map((receipt, index) => (
          <ReceiptsTable key={index} receipt={receipt}></ReceiptsTable>
        ))}
      </form>
    </div>
  );
};

export default Receipt;
