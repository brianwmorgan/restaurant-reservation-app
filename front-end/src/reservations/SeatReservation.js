import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import axios from "axios";
import TableOptions from "../tables/TableOptions";
import ErrorAlert from "../layout/ErrorAlert";

// Defines the seat form for seating a reservation at a table on the seat page.

export default function SeatReservation() {
  const URL = process.env.REACT_APP_API_BASE_URL;
  const history = useHistory();
  const { reservation_id } = useParams();
  const [tables, setTables] = useState([]);
  const [selectedTable, setSelectedTable] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();
    setError(null);
    async function listTables() {
      try {
        const response = await axios.get(URL + "/tables", {
          signal: abortController.signal,
        });
        setTables(response.data.data);
        setSelectedTable(response.data.data[0].table_id);
      } catch (error) {
        setError(error);
      }
    }
    listTables();
    return () => abortController.abort();
  }, [URL]);

  const options = tables.map((table) => (
    <TableOptions table={table} key={table.table_id} />
  ));

  const handleChange = (event) => {
    event.preventDefault();
    setSelectedTable(event.target.value);
  };

  // Handles a request to update the table's 'reservation_id' assignment.
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${URL}/tables/${selectedTable}/seat`, {
        data: { reservation_id: reservation_id },
      });
      history.push("/dashboard");
    } catch (error) {
      setError(error.response.data.error);
    }
  };

  return (
    <div>
      <h4>Seat Reservation</h4>
      <ErrorAlert error={error} />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="table_id">Seat reservation at table:</label>
          <select name="table_id" onChange={handleChange}>
            <option>Select an option</option>
            {options}
          </select>
        </div>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => history.goBack()}
        >
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}
