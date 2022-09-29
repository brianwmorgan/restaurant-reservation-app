import React from "react";
import TableCard from "./TableCard";

export default function TablesList({ tables }) {
  const tablesList = tables.map((table) => {
    return <TableCard key={table.table_id} table={table} />;
  });

  return (
    <div>
      <table className="table table-info table-striped table-hover table-bordered table-responsve">
        <thead className="table table-info-dark">
          <tr>
            <th scope="col" className="text-center">Table Name</th>
            <th scope="col" className="text-center">Capacity</th>
            <th scope="col" className="text-center">Status</th>
            <th scope="col" className="text-center">Unseat Table</th>
          </tr>
        </thead>
        <tbody>{tablesList}</tbody>
      </table>
    </div>
  );
}
