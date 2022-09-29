import React from "react";
import { useHistory } from "react-router";
import { unSeatTable } from "../utils/api";

export default function TableCard({ table }) {
  const history = useHistory();

  function statusText() {
    if (table.reservation_id) {
      return "occupied";
    } else {
      return "free";
    }
  }

  const handleFinishClick = async (event) => {
    event.preventDefault();
    const message = `Is this table ready to seat new guests? This cannot be undone.`;
    try {
      if (window.confirm(message)) {
        await unSeatTable(table.table_id);
        history.go(0);
      }
    } catch (error) {
      return error;
    }
  };

  return (
    <tr>
      <td>{table.table_name}</td>
      <td>{table.capacity}</td>
      <td data-table-id-status={table.table_id}>{statusText()}</td>
      <td>
        {table.reservation_id && (
          <button
            data-table-id-finish={table.table_id}
            className="btn btn-sm btn-danger"
            onClick={handleFinishClick}
          >
            <span className="oi oi-check mr-2" />
            Finish
          </button>
        )}
      </td>
    </tr>
  );
}
