# MyReads Project

##Overview

This project is based on React and includes interaction with an API provided by udacity for sending and receiving information.
The intention of the project is that the user can easily search and add books to their shelves (Currently reading, want to read, read).

##Installation 

Install all project dependencies with `npm install`
Start the development server with `npm start`

##Dependencies

* This project utilizes React Router for the navigation.
* The API provided for Udacity for the interaction, contains the following methods:
** `getAll`
** `update`
** `search`

##Functionality:
*Home. The home page contains the user's shelves with their corresponding books, each book has the functionality of being able to move to another shelf, selecting another shelf will automatically update the view showing the book on its new shelf.
*Search. On the home page there is a button to open the search page, on this page there is an input where the user can enter a book and if there are matches, the corresponding books will be shown, in the same way as on the home page, each book has the functionality of being added to a shelf.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

##Credits
* The implementation of the Not Found Page component is based in the example on this link -> https://ultimatecourses.com/blog/react-router-not-found-component