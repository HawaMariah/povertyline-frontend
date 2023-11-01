import React from "react";
import { useContext } from "react";
import { dataContext } from "../../data/DataContextProvider";

function Applicant({ id, name, email, CV, onDeleteTransaction }) {
  const { deleteFromApllicantsServer } = useContext(dataContext);
  function deleteHandler(id) {
    // console.log(id);
    onDeleteTransaction(id);
    deleteFromApllicantsServer(id);
  }
  return (
    <>
      <td>{id}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{CV}</td>

      <td className="edit-td">
        <button className="icon" onClick={() => deleteHandler(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
      </td>
    </>
  );
}

export default Applicant;

/**
 * 
 * import React from "react";

function Transaction({
  id,
  amount,
  description,
  category,
  date,
  onDeleteTransaction,
  onEditTransaction,
}) {
  // console.log(id, amount, description, category, date);
  function deleteHandler(id) {
    // console.log(id);
    onDeleteTransaction(id);
  }
  function editteHandler(id) {
    // console.log(id);
    onEditTransaction(id);
  }

  return (
    <>
      <td>{id}</td>
      <td>{category}</td>
      <td>{description}</td>
      <td>{amount}</td>
      <td>{date}</td>

      <td className="edit-td">
        <button className="icon" onClick={() => deleteHandler(id)}>
          <i className="fa-solid fa-trash-can"></i>
        </button>
        <button className="icon" onClick={() => editteHandler(id)}>
          <i className="fa-solid fa-pen"></i>
        </button>
      </td>
    </>
  );
}

export default Transaction;

 */
