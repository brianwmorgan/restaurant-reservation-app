import React from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import { getDisplayDate, getDisplayTime } from "../utils/date-time";

export default function ReservationEntry({ reservation }) {
  const URL = process.env.REACT_APP_API_BASE_URL;
  const history = useHistory();

  const handleCancelClick = async (event) => {
    event.preventDefault();
    const message = `Do you want to cancel this reservation? This cannot be undone.`;

    if (window.confirm(message)) {
      try {
        await axios.put(
          `${URL}/reservations/${reservation.reservation_id}/status`,
          { data: { status: "cancelled" } }
        );
        history.go(0);
      } catch (error) {
        return error;
      }
    }
  };

  const displayDate = getDisplayDate(reservation.reservation_date);
  const displayTime = getDisplayTime(reservation.reservation_time);

  // return (
  //   <tr>
  //     <td className="text-left align-middle">{reservation.first_name}</td>
  //     <td className="text-left align-middle">{reservation.last_name}</td>
  //     <td className="text-center align-middle">{reservation.mobile_number}</td>
  //     <td className="text-center align-middle">{displayTime}</td>
  //     <td className="text-center align-middle">{reservation.people}</td>
  //     <td className="text-center align-middle" data-reservation-id-status={reservation.reservation_id}>
  //       {reservation.status}
  //     </td>
  //     <td className="text-center align-middle">
  //       {reservation.status === "booked" && (
  //         <Link to={`/reservations/${reservation.reservation_id}/seat`}>
  //           <button className="btn btn-sm btn-primary">
  //             <span className="oi oi-people mr-2" />
  //             Seat
  //           </button>
  //         </Link>
  //       )}
  //     </td>
  //     <td className="text-center align-middle">
  //       {reservation.status === "booked" && (
  //         <Link to={`/reservations/${reservation.reservation_id}/edit`}>
  //           <button className="btn btn-sm btn-secondary">
  //             <span className="oi oi-pencil mr-2" />
  //             Edit
  //           </button>
  //         </Link>
  //       )}
  //     </td>
  //     <td className="text-center align-middle">
  //       {reservation.status === "booked" && (
  //         <button
  //           className="btn btn-sm btn-danger"
  //           data-reservation-id-cancel={reservation.reservation_id}
  //           onClick={handleCancelClick}
  //         >
  //           <span className="oi oi-trash mr-2" />
  //           Cancel
  //         </button>
  //       )}
  //     </td>
  //   </tr>
  // );

  const statusColor = {
    booked: "success",
    seated: "primary",
    finished: "secondary",
    cancelled: "danger",
  };

  return (
    <div className="row flex-column flex-md-row bg-light border mx-1 my-3 px-2 py-2">
      <div
        className={`col text-center text-md-left align-self-center mr-3`}
        style={{ maxWidth: "100px" }}
      >
        <span
          className={`my-2 badge text-white bg-${
            statusColor[reservation.status]
          }`}
          data-reservation-id-status={reservation.reservation_id}
        >
          {reservation.status}
        </span>
      </div>
      <div className="col align-self-center">
        <h5 className="mb-1">
          {reservation.first_name} {reservation.last_name}
        </h5>
        <p className="mb-0">
          Party of {reservation.people}
          <span className="ml-3">{reservation.mobile_number}</span>
        </p>
      </div>
      <div className={`col align-self-center`}>
        <p className="mb-0">{displayDate.display}</p>
        <p className="mb-0">{displayTime}</p>
      </div>

      <div className="col align-self-center">
        {reservation.status === "booked" && (
          <Link to={`/reservations/${reservation.reservation_id}/seat`}>
            <button className="btn btn-sm btn-primary">
              <span className="oi oi-people mr-2" />
              Seat
            </button>
          </Link>
        )}

        {reservation.status === "booked" && (
          <Link to={`/reservations/${reservation.reservation_id}/edit`}>
            <button className="btn btn-sm btn-secondary">
              <span className="oi oi-pencil mr-2" />
              Edit
            </button>
          </Link>
        )}

        {reservation.status === "booked" && (
          <button
            className="btn btn-sm btn-danger"
            data-reservation-id-cancel={reservation.reservation_id}
            onClick={handleCancelClick}
          >
            <span className="oi oi-trash mr-2" />
            Cancel
          </button>
        )}
      </div>
    </div>
  );
}
