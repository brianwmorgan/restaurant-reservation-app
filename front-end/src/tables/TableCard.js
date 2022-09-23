import React from "react";

export default function TableCard({ table, onFinish }) {
  // const URL = process.env.REACT_APP_API_BASE_URL;

  // const handleFinishClick = async (event) => {
  //   event.preventDefault();
  //   const message = `Is this table ready to seat new guests? This cannot be undone.`;

  //   if (window.confirm(message)) {
  //     try {
  //       await axios.delete(`${URL}/tables/${table.table_id}/seat`);
  //       window.location.reload();
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   }
  // };

  function handleFinishClick({
    target: { dataset: { tableIdFinish, reservationIdFinish } } = {},
  }) {
    if (
      tableIdFinish &&
      reservationIdFinish &&
      window.confirm(
        "Is this table ready to seat new guests?\n\nThis cannot be undone."
      )
    ) {
      onFinish(tableIdFinish, reservationIdFinish);
    }
  }

  return (
    <tr>
      <td>{table.table_name}</td>
      <td>{table.capacity}</td>
      <td data-table-id-status={table.table_id}>{table.status}</td>
      <td>
        {table.status === "occupied" && (
          <button
            data-table-id-finish={table.table_id}
            data-reservation-id-finish={table.reservation_id}
            className="btn btn-primary"
            onClick={handleFinishClick}
          >
            Finish
          </button>
        )}
      </td>
    </tr>
  );
}
