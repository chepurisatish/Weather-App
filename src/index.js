import React from "react";
import { createRoot } from "react-dom/client";
// import './index.css';
import App from "./App";
// import * as serviceWorker from './serviceWorker';

const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<App />);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister()
// satya_roy ;
