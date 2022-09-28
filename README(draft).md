![Periodic Tables](https://raw.githubusercontent.com/micah-patrick/restaurant-reservation/main/front-end/src/readme/readme-header.png "Periodic Tables")

#
# Periodic Tables | Restaurant Reservation System


Periodic Tables is a restaurant reservation system for fine dining restaurants. Users of the application are restaurant employees who wish to take reservations when a customer calls and to seat them when they come in to the restaurant.

## Links
(link to live server here)
(link to live app here) - are both of these needed?

## Technology

### Frontend:
- React, React Router, React Hooks, Javascript, HTML / JSX, Bootstrap, CSS, Open Iconic
(icon links here)

### Backend:
- Node.js, Express, PostgreSQL, Knex

[![react](https://cdn.iconscout.com/icon/free/png-96/react-1-282599.png)](https://reactjs.org/)
[![nodejs](https://cdn.iconscout.com/icon/free/png-96/node-js-1174925.png)](https://nodejs.org/en/) 
[![expressjs](https://hackr.io/tutorials/learn-express-js/logo/logo-express-js?ver=1557508379)](https://expressjs.com/)
[![postgresql](https://cdn.iconscout.com/icon/free/png-96/postgresql-11-1175122.png)](https://www.postgresql.org/)

## How the App Works
### Home Screen
![edit card screen](/screenshots/new/edit-card-screen.jpg)  
(PLACEHOLDER FOR SCREENSHOT)  
The Home screen is the first page the user sees. It is displayed at `/`.  
The Home screen has the following features:
- A `Create Deck` button brings the user to the Create Deck screen at `/decks/new`.
- Existing decks are each shown with the deck name, the number of cards, and a `View`, `Study`, and `Delete` button.
- Clicking the `View` button brings the user to the View Deck screen at `/decks/:deckId`.
- Clicking the `Study` button brings the user to the Study screen at `decks/:deckId/study`.
- Clicking the `Delete` button displays a prompt with a warning message that gives the user an option to delete the deck or cancel this action.

## API

### Routes

The API allows for the following routes:

Method | Route | Description
 -|-|-
| `GET` | `/reservations` | Lists all reservations for the current date.
| `GET` | `/reservations?date=YYYY-MM-DD` | Lists all reservations on the query date.
| `POST` | `/reservations` | Creates a new reservation. No `reservation_id` or `status` needs to be provided. All other fields are required.
| `GET` | `/reservations/:reservation_id` | Reads a specific reservation by `reservation_id`.
| `PUT` | `/reservations/:reservation_id` | Updates a specific reservation by `reservation_id`.
| `PUT` | `/reservations/:reservation_id/status` | Updates the status of a specific reservation by `reservation_id`.
| `GET` | `/tables` | Lists all tables.
| `POST` | `/tables` | Creates a new table. Only `table_name` and `capacity` need be provided.
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
