# React-Web

React is fundamentally "unopinionated", a library not a framework, React itself does not include many of the React-specific libraries that we are going to need for most of web projects. That means, in order to build complete React applications, you will need to choose these packages and tools on your own (third party).

React's flexibility is a freedom of making our own choice. However, Sometimes we just need to bootstrap a web app with all basic dependencies 🤝. I Wish React was a framework 🫣. 

Let's build it 👨‍🔧


Create react typescript project [Create React App](https://github.com/facebook/create-react-app).

    npx create-react-app React-Web --template typescript


Install react router dom v6 [React Router](https://reactrouter.com/en/main/start/overview)

    npm install --save react-router-dom@6

Install "@babel/plugin-proposal-private-property-in-object" to
your devDependencies

    npm install --save-dev @babel/plugin-proposal-private-property-in-object
        
Install Material UI [material-ui](https://mui.com/material-ui/)

    npm install @mui/material @emotion/react @emotion/styled

Install MUI Icons 

    npm install @mui/icons-material  

 ### Features   

1. UI  -->  Matrial UI
2. Routing --> React-router-6 (public , private routes , redirect after login)
3. HTTP --> Axios 
4. Managing App state --> Redux
5. Form validation 
6. Animations 



## Available Scripts

### Runs the app in the development mode

#### `npm start`

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.The page will reload if you make edits.You will also see any lint errors in the console.

### Launches the test runner in the interactive watch mode.

### `npm test`
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.


### Builds the app for production to the `build` folder.

### `npm run build`

It correctly bundles React in production mode and optimizes the build for the best performance.The build is minified and the filenames include the hashes.Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


