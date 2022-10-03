# Periodic Tables | Restaurant Reservation and Seating System

Periodic Tables is a dynamic reservation and seating system for restaurant managers and employees. A user can view reservations by date, add new reservations, edit/cancel/search for existing reservations, add new tables, and seat/unseat reservations at tables.

## Links
[Live Heroku Client App](https://res-app-client-morgan.herokuapp.com/)  
[Live Heroku Server](https://res-app-server-morgan.herokuapp.com/)

## Technology

### Frontend:
- React, React Router, React Hooks, Javascript, HTML / JSX, Bootstrap, CSS, Open Iconic  
  
![React icon](images/react.png)
![JS icon](images/javascript.png)
![HTML icon](images/html.png)
![Bootstrap icon](images/bootstrap.png)


### Backend:
- Node.js, Express, PostgreSQL, Knex  
  
![Node.js icon](images/node-js.png)
![Express icon](images/express.png)
![PostgreSQL icon](images/postgresql.png)
![Knex.js icon]()

## How the App Works
### Dashboard
The **Dashboard** page serves as the homepage for the app. The navigation bar (which appears on all pages for this app) includes links to the **Dashboard**, **Search**, **New Reservation**, and **New Table** pages. This page displays a list of reservations for a given day as well as a list of tables in the restauarant. From the reservations list, a user can navigate to the **Seat Reservation** and **Edit Reservation** pages as well as cancel a specific reservation. The reservation's status updates automatically. From the tables list, a user can unseat a table and finish the reservation assigned to it. The table's status updates automatically. A user can toggle between different dates by clicking the **Previous Date**, **Today**, and **Next Date** buttons or select a specific calendar date with the datepicker.  
![edit card screen](/screenshots/new/edit-card-screen.jpg) 

### Search
The **Search** page allows a user to look-up reservations in the system by phone number. Partial phone numbers are acceptable inputs. If there are any reservations that match the input, they are displayed in a list that includes options to seat, edit, or cancel a reservation if its current status is _booked_. If there are no matching reservations, the user will get a "No reservations found" message.  
![edit card screen](/screenshots/new/edit-card-screen.jpg) 

### New Reservation
The **New Reservation** page allows a user to create a new reservation. All fields are required and have constraints. The _Mobile Number_ must be 10 digits. The _Date of Reservation_ must be for today or a future date and cannot be on Tuesdays (when the restaurant is closed). The _Time of Reservation_ must be between 10:30am and 9:30pm. The _Number of People_ must be at least 1. If any inputs are invalid, the user will get an informative error message.  
![edit card screen](/screenshots/new/edit-card-screen.jpg) 

### Edit Reservation
The **Edit Reservation** page allows a user to edit an existing reservation. When a user navigates to this page, the fields will be populated with the existing reservation's current information, which the user can edit. All constraints from the **New Reservation** page are present on this page. If any inputs are invalid, the user will get an informative error message.  
![edit card screen](/screenshots/new/edit-card-screen.jpg) 

### New Table
The **New Table** page allows a user to create a new table in the restaurant. Both fields are required. The _Table Name_ must be at least two characters. The _Capacity_ must be at least 1. If any inputs are invalid the user will get an informative error message.  
![edit card screen](/screenshots/new/edit-card-screen.jpg) 

### Seat Table
The **Seat Table** page allows a user to seat a specific reservation at a table in the restaurant. A drop-down list provides table options. If a table is currently occupied or does not have sufficient capacity for that specific reservation, the user will get an informative error message.  
![edit card screen](/screenshots/new/edit-card-screen.jpg) 

## API

### Routes

The API allows for the following routes:

Method | Route | Description
 -|-|-
| `GET` | `/reservations` | Lists all reservations for the current date.
| `GET` | `/reservations?date=YYYY-MM-DD` | Lists all reservations on the query date.
| `POST` | `/reservations` | Creates a new reservation. No `reservation_id` or `status` need to be provided. All other fields are required.
| `GET` | `/reservations/:reservation_id` | Reads a specific reservation by `reservation_id`.
| `PUT` | `/reservations/:reservation_id` | Updates a specific reservation by `reservation_id`.
| `PUT` | `/reservations/:reservation_id/status` | Updates the status of a specific reservation by `reservation_id`.
| `GET` | `/tables` | Lists all tables.
| `POST` | `/tables` | Creates a new table. Only `table_name` and `capacity` need to be provided.
| `PUT` | `/tables/:table_id/seat` | Assigns a table to a reservation and changes that reservation's `status` to _seated_.
| `DELETE` | `/tables/:table_id/seat` | Removes a reservation from a table and changes that reservation's `status` to _finished_.

### HTTP Methods
| Route       | Get         | Put        | Post         | Delete       |      
| ----------- | ----------- | ---------- | ------------ | ------------ |
| ```/reservations```      | ✅      |❌      | ✅    |       ❌       |
| ```/reservations/:reservation_id```   | ✅        | ✅       | ❌         | ❌         |
| ```/reservations/:reservation_id/status```      | ❌      |✅      | ❌    |       ❌       |
| ```/tables```   | ✅        | ❌       | ✅         | ❌         |
| ```/tables/:table_id```   | ✅        | ❌       | ❌         | ❌         |
| ```/tables/:table_id/seat```   | ❌        | ✅       | ❌         | ✅         |

### Reservations

The `reservations` table represents all the reservations to the restaurant. Each reservation has the following fields:

- `reservation_id`: (Primary Key)
- `first_name`: (String) The first name of the customer.
- `last_name`: (String) The last name of the customer.
- `mobile_number`: (String) The customer's mobile phone number.
- `reservation_date`: (Date) The date of the reservation.
- `reservation_time`: (Time) The time of the reservation.
- `people`: (Integer) The size of the party.
- `Status`: (String) The reservation status can be _booked, seated, finished, or cancelled_ and defaults to _booked_.

An example record looks like the following:

```json
  {
    "first_name": "Rick",
    "last_name": "Sanchez",
    "mobile_number": "202-555-0164",
    "reservation_date": "2020-12-31",
    "reservation_time": "20:00:00",
    "people": 6,
    "status": "booked"
  }
```
### Tables

The `tables` table represents all the tables in the restaurant. Each table has the following fields:

- `table_id`: (Primary Key)
- `table_name`: (String) The name of the table.
- `capacity`: (Integer) The maximum number of people that the table can seat.
- `reservation_id`: (Foreign Key) The reservation - if any - that is currently seated at the table.

An example record looks like the following:

```json
  {
    "table_name": "Bar #1",
    "capacity": 1,
    "reservation_id": 8,
  }
```

## Installation

1. Fork and clone this repository.
1. Run `cp ./back-end/.env.sample ./back-end/.env`.
1. Update the `./back-end/.env` file with the connection URL's to your ElephantSQL database instance.
1. Run `cp ./front-end/.env.sample ./front-end/.env`.
1. You should not need to make changes to the `./front-end/.env` file unless you want to connect to a backend at a location other than `http://localhost:5001`.
1. Run `npm install` to install project dependencies.
1. Run `npm run start:dev` to start your server in development mode.
