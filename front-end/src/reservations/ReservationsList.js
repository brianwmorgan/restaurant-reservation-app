import React from "react";
import ReservationEntry from "./ReservationEntry";

export default function ReservationsList({ reservations, searchMode }) {
  if (searchMode) {
    const reservationsList = reservations.map((reservation) => {
      return (
        <ReservationEntry
          key={reservation.reservation_id}
          reservation={reservation}
        />
      );
    });
    // return (
    //   <div>
    //     <table className="table table-success table-striped table-hover table-bordered table-responsive-sm">
    //       <thead className="table table-success-dark">
    //         <tr>
    //           <th scope="col" className="text-left">First Name</th>
    //           <th scope="col" className="text-left">Last Name</th>
    //           <th scope="col" className="text-center">Mobile Number</th>
    //           <th scope="col" className="text-center">Time</th>
    //           <th scope="col" className="text-center"># of People</th>
    //           <th scope="col" className="text-center">Status</th>
    //           <th scope="col" className="text-center">Seat</th>
    //           <th scope="col" className="text-center">Edit</th>
    //           <th scope="col" className="text-center">Cancel</th>
    //         </tr>
    //       </thead>
    //       <tbody>{reservationsList}</tbody>
    //     </table>
    //   </div>
    // );

    return (
      <div>{reservationsList}</div>
    )

  } else {
    const reservationsList = reservations
      .filter((reservation) => {
        return reservation.status !== "cancelled";
      })
      .map((reservation) => {
        return (
          <ReservationEntry
            key={reservation.reservation_id}
            reservation={reservation}
          />
        );
      });

    // return (
    //   <div>
    //     <table className="table table-success table-striped table-hover table-bordered table-responsive-sm">
    //       <thead className="table table-success-dark">
    //         <tr>
    //           <th scope="col" className="text-left">First Name</th>
    //           <th scope="col" className="text-left">Last Name</th>
    //           <th scope="col" className="text-center">Mobile Number</th>
    //           <th scope="col" className="text-center">Time</th>
    //           <th scope="col" className="text-center"># of People</th>
    //           <th scope="col" className="text-center">Status</th>
    //           <th scope="col" className="text-center">Seat</th>
    //           <th scope="col" className="text-center">Edit</th>
    //           <th scope="col" className="text-center">Cancel</th>
    //         </tr>
    //       </thead>
    //       <tbody>{reservationsList}</tbody>
    //     </table>
    //   </div>
    // );

    return (
      <div>{reservationsList}</div>
    )
  }
}
