# Google Books

Search Google Books [here](https://fierce-badlands-44122.herokuapp.com/)

## Overview
React-based Google Books Search app. The application consists of two pages: 

    Search - User can search for books via the Google Books API and render them here. 
    User has the option to "View" a book, bringing them to the book on Google Books, or 
    "Save" a book, saving it to the Mongo database.

    Saved - Renders all books saved to the Mongo database. User has an option to "View" the book, 
    bringing them to the book on Google Books, or "Delete" a book, removing it from the Mongo database.


This is a React App application and was created using create-react-app.

---

## Technologies Used
- HTML (https://html.spec.whatwg.org/multipage/)
- Bootstrap/Custom CSS (https://getbootstrap.com/)
- Create-React-App (https://github.com/facebook/create-react-app)
- JavaScript (https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- Node.js (https://nodejs.org/en/)
- Axios
- Deployed on Heroku

---

## Process Flow
1. Landing page contains a form where the user can enter a book title to search for.
    When the user enters a title and clicks submit an axios call is made to the Google Books
    API and the results are displayed in the results pane.

2. If the user clicks on the 'Saved' link in the nav bar a call is made to a MongoDB
    to search for any saved books. If found they are displayed in the results pane.

3. Both the landing page and the Saved page offer a View button for each displayed book that
    will take the user to the Google Books link for that particualr book and display the
    information about that book.

4. On the Saved page there is a Delete button for each book that will delete the book from
    the MongoDB.

---

## If you want to clone the app down to your local machine:
1. In your terminal, 
    - ```cd``` into the project folder

2. Run:
    - ```npm install``` to download all node.js dependencies

3. Finally, you can run the application using:
    - ```npm start``` in the terminal to start the node server

4. Navigate to localhost:3000 in your browser.

---

## Author
- Kevin Brown - [kbrowngithub](https://github.com/kbrowngithub)



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
