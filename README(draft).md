# restaurant-reservation-app
This CRUD application is a capstone project for the frontend development section of Thinkful's software engineering program. It allows users to create, read, update, and delete decks of flashcards so they can study any subject.

(link to live deployment here)

## Technology
### Built with:
- HTML, CSS, JavaScript, React, Bootstrap, Open Iconic
[![postgresql](https://cdn.iconscout.com/icon/free/png-256/postgresql-11-1175122.png)](https://www.postgresql.org/) 
[![react](https://cdn.iconscout.com/icon/free/png-256/react-1-282599.png)](https://reactjs.org/)
[![expressjs](https://hackr.io/tutorials/learn-express-js/logo/logo-express-js?ver=1557508379)](https://expressjs.com/)
[![nodejs](https://cdn.iconscout.com/icon/free/png-256/node-js-1174925.png)](https://nodejs.org/en/)

## Installation
1. Fork and clone this repository.
2. Run `npm install` to install project dependencies.
3. Run `npm start` to start the application.

## API

| Route       | Get         | Put        | Post         | Delete       |      
| ----------- | ----------- | ---------- | ------------ | ------------ |
| ```/reservations```      | ✅      |❌      | ✅    |       ❌       |
| ```/reservations/:reservation_id```   | ✅        | ✅       | ❌         | ❌         |
| ```/reservations/:reservation_id/status```      | ❌      |✅      | ❌    |       ❌       |
| ```/tables```   | ✅        | ❌       | ✅         | ❌         |
| ```/tables/:table_id```   | ✅        | ❌       | ❌         | ❌         |
| ```/tables/:table_id/seat```   | ❌        | ✅       | ❌         | ✅         |

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

### Delete Deck Prompt:
(PLACEHOLDER FOR SCREENSHOT)  
When the user clicks on the `Delete` button associated with a particular deck, a warning message is shown and the user can either click `OK` or `Cancel`. If the user clicks `OK`, the deck is deleted and will no longer be visible on the Home screen. If the user clicks `Cancel`, the action will be canceled.

### Create Deck Screen:
(PLACEHOLDER FOR SCREENSHOT)  
The Create Deck screen allows the user to create new decks. It is displayed at `/decks/new`.  
The Create Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home screen, followed by the text: `Create Deck`.
- A form is shown with the appropriate fields for creating a new deck.
- If the user clicks the `Submit` button, the user is taken to this new deck's View Deck screen.
- If the user clicks the `Cancel` button, the user is taken back to the Home screen.

### View Deck Screen:
(PLACEHOLDER FOR SCREENSHOT)  
The View Deck screen allows the user to view all of the information about a deck. It is displayed at `/decks/:deckId`.  
The View Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home screen, followed by the name of the deck.
- This screen includes the deck's name and description.
- The screen includes `Edit`, `Study`, `Add Cards`, and `Delete` buttons. Each button takes the user to a different destination, as follows:
  * `Edit` --> Edit Deck screen, `/decks/:deckId/edit`.
  * `Study` --> Study screen, `/decks/:deckId`.
  * `Add Cards` --> Add Card screen, `decks/:deckId/cards/new`.
  * `Delete` --> Shows a warning message before deleting the deck.
- Each card in the deck:
  * Is listed on the page under the `Cards` heading.
  * Shows a `Front` (question) and `Back` (answer) side to the card.
  * Has an `Edit` button that takes the user to the Edit Card screen at `/decks/:deckId/cards/:cardId/edit`.
  * Has a `Delete` button that allows that card to be deleted.

### Delete Card Prompt
(PLACEHOLDER FOR SCREENSHOT)  
When the user clicks the `Delete` button associated with a card, a warning message is shown and the user can either click `OK` or `Cancel`. If the user clicks `OK`, the card is deleted and will no longer be visible on the View Deck screen. If the user clicks `Cancel`, the action will be canceled.

### Edit Deck Screen:
(PLACEHOLDER FOR SCREENSHOT)  
The Edit Deck screen allows the user to modify the information of an existing deck. It is displayed at `/decks/:deckId/edit`.  
The Edit Deck screen has the following features:
- A breadcrumb navigation bar with a link to the Home screen, followed by a link to the deck being edited's View Deck screen, and finally, the text: `Edit Deck`.
- It displays the same form as the Create Deck screen, except it is pre-filled with information for the existing deck.
- The user can edit and update the form.
- If the user clicks the `Cancel` button, the action is canceled and the user is taken back to the View Deck screen.
- If the user clicks the `Submit` button, the new deck is created and the user is taken back to the View Deck screen.

### Study Screen:
(PLACEHOLDER FOR SCREENSHOT)  
The Study screen allows the user to study the cards in a deck. It is displayed at `/decks/:deckId/study`.  
The Study screen has the following features:
- A breadcrumb navigation bar with a link to the Home screen, followed by a link to that deck's View Deck screen, and finally the text: `Study`. 
- The deck's title is shown on the screen.
- Cards are shown one at a time, front-side first.
- A `Flip` button at the bottom of each card "flips" it to the other side.
- After flipping the card, the screen shows a `Next` button that allows the user to continue to the next card.

### Next Button:
(PLACEHOLDER FOR SCREENSHOT)  
After clicking the `Flip` button on the Study screen, the back of the card will be displayed and include a `Next` button. Clicking the `Next` button will display the front of the next card in the deck. Clicking the `Flip` button again will re-display the front of the card.

### Restart Prompt:
(PLACEHOLDER FOR SCREENSHOT)  
After the final card in the deck has been shown, a prompt is displayed offering the user an opportunity to restart the deck. If the user does not restart the deck, they are returned to the Home screen.

### Not Enough Cards:
(PLACEHOLDER FOR SCREENSHOT)  
If a user tries to study a deck with two or fewer cards, the Study screen will display a `Not enough cards` message and an `Add Cards` button. Clicking the `Add Cards` button will take the user to the Add Card screen at `decks/:deckId/cards/new`.  

### Add Card Screen:
(PLACEHOLDER FOR SCREENSHOT)  
The Add Card screen allows the user to add a new card to an existing deck. It is displayed at `/decks/:deckId/cards/new`.  
The  screen has the following features:
- A breadcrumb navigation bar with a link to the Home screen, followed by a link to that card's View Deck screen, and finally the text `Add Card`.
- The screen displays the deck title followed by the text `Add Card`.
- The screen displays a form with the `Front` and `Back` fields for a new card.
- If the user clicks the `Done` button, the user is taken to that deck's View Deck screen.
- If the user clicks the `Save` button, a new card is created and added to the end of that deck. Then the form is cleared and the process for adding a new card is restarted.

### Edit Card Screen:
(PLACEHOLDER FOR SCREENSHOT)  
The Edit Card screen allows the user to modify the information of an existing card. It is displayed at `/decks/:deckId/cards/:cardId/edit`.  
The Edit Card screen has the following features:
- A breadcrumb navigation bar with a link to the Home screen, followed by a link to that card's View Deck screen, and finally the text: `Edit Card :cardId`. 
- It displays the same form as the Add Card screen, except it is pre-filled with information for the existing card
- The existing information can be edited and updated.
- If the user clicks the `Cancel` button, the edit is canceled and the user is taken back to that deck's View Deck screen.
- If the user clicks the `Submit` button, the card updates are saved and the user is taken back to that deck's View Deck screen.
