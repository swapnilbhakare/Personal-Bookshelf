Book Search and Bookshelf Application
This is a React application that allows users to search for books using the OpenLibrary API and add them to a personal bookshelf stored in local storage.

Table of Contents
Features
Setup
Running the Application
Project Structure
Dependencies
Features
Search for books by name.
Add books to a personal bookshelf.
View books on the personal bookshelf.
Books added to the bookshelf are saved in local storage.
Setup
Prerequisites
Node.js (>= 14.x)
npm (>= 6.x) or yarn (>= 1.x)
Installation
Clone the repository:
sh
Copy code
git clone https://github.com/your-username/book-search-bookshelf.git
Navigate to the project directory:
sh
Copy code
cd book-search-bookshelf
Install the dependencies:
sh
Copy code
npm install
or if you are using yarn:
sh
Copy code
yarn install
Running the Application
Development Server
To start the development server, run:

sh
Copy code
npm start
or with yarn:

sh
Copy code
yarn start
This will launch the application in development mode. Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

Building for Production
To create a production build of the application, run:

sh
Copy code
npm run build
or with yarn:

sh
Copy code
yarn build
This will create an optimized build of the application in the build directory.

Running Tests
To run tests, use:

sh
Copy code
npm test
or with yarn:

sh
Copy code
yarn test
Project Structure
java
Copy code
book-search-bookshelf/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── BookCard.js
│   │   ├── BookshelfPage.js
│   │   └── SearchPage.js
│   ├── App.css
│   ├── App.js
│   ├── index.css
│   └── index.js
├── .gitignore
├── package.json
└── README.md
Dependencies
React: ^17.0.2
react-router-dom: ^6.0.2
axios: ^0.21.1
License
This project is licensed under the MIT License - see the LICENSE file for details.
