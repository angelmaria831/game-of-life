# Getting Started with Game of Life React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

# Game Of Life

The Game of Life is a cellular automaton.

It is discussed in detail on [Wikipedia] (https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life).

## Rules
The game of life is played on a two dimensional grid.

At each turn, the state of a cell may either be "alive" or "dead"; determined by the following rules:

1. A live cell with fewer than two live neighbours dies of under-population
2. A live cell with 2 or 3 live neighbours lives on to the next generation
3. A live cell with more than 3 live neighbours dies of overcrowding
4. A dead cell with exactly 3 live neighbours "comes to life"
Tasks
