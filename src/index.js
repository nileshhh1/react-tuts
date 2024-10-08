import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import './index.css';
import './AuthForm.css';
import Props from './Props';
import InputBox from './InputBox';
// import App from './App';
// import Counter from './Counter';
// import User from './User';
// import SimpleForm from './SimpleForm';
// import AuthForm from './AuthForm';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <User /> */}
    {/* <AuthForm/> */}
    {/* <App /> 
    <Counter/> */}
    {/* <Props/> */}
    <InputBox/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
