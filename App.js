/*import React from 'react'


const App = () => {
  return (
    <div className="login-container">
      <h2 className = "form-title">Login in with</h2>
      <div className = "social-login">
        <button className = "social-button">
          {/*this will be for icon of app} <img src =" https://www.stockio.com/free-icon/phone-call" alt="Cell Phone App" className = "social-icon" />
        </button>
      </div>
      <p className = "seperator"><span>or</span></p>


      <form action = "#" className ="login-form">
        <div className="input-wrapper">
          <input type="email" placeholder="Email address" className="input-field" required />
          <i className="material-symbolic-rounded">enter email </i>
        </div>


        <div className="input-wrapper">
          <input type="password" placeholder="Password " className="input-field" required />
          <i className="material-symbolic-rounded">lock</i>
        </div>
        <a href="#" className="forget-pass-link">Forgot Pass word?</a>


        <button className="login-button">Log In</button>
      </form>


      <p className="signup-text">Don&apos;t have an account?<a href="#"> Signup now</a></p>
    </div>
  )
}


export default */

import React from 'react';
import {useRef, useState, useEffect} from "react"

const App = () => {
  return React.createElement(
    'div',
    { className: 'login-container' },
    React.createElement('h2', { className: 'form-title' }, 'Cell Phone App'),
    React.createElement(
      'div',
      { className: 'social-login' },
      React.createElement(
        'button',
        { className: 'social-button' },
        React.createElement('img', {
          src: 'https://www.stockio.com/free-icon/phone-call',
          alt: 'Cell Phone App',
          className: 'social-icon',
        })
      )
    ),
    React.createElement('p', { className: 'seperator' }, React.createElement('span', null, 'or')),
    React.createElement(
      'form',
      { action: '#', className: 'login-form' },
      React.createElement(
        'div',
        { className: 'input-wrapper' },
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email address',
          className: 'input-field',
          required: true,
        }),
        React.createElement('i', { className: 'material-symbolic-rounded' }, 'enter email')
      ),
      React.createElement(
        'div',
        { className: 'input-wrapper' },
        React.createElement('input', {
          type: 'password',
          placeholder: 'Password ',
          className: 'input-field',
          required: true,
        }),
        React.createElement('i', { className: 'material-symbolic-rounded' }, 'lock')
      ),
      React.createElement(
        'a',
        { href: '#', className: 'forget-pass-link' },
        'Forgot Password?'
      ),
      React.createElement(
        'button',
        { className: 'login-button' },
        'Log In'
      )
    ),
    React.createElement(
      'p',
      { className: 'signup-text' },
      "Don't have an account?",
      React.createElement('a', { href: '#' }, ' Signup now')
    )
  );
};

export default App;
