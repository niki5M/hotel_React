import React, { Component } from "react";
import '../css/sign.css';

export default class Registration extends Component {
  render() {
    return (
      <body class='body_sign'>
    <img src="logo_img.png" alt="" width="370" height="230"/>
    <h1>Sign in to your account</h1>
    <form class='form_sign2'>
    <div class="input-box">
        <input type="text" class="name-input" required />
        <label class="name-label">Email</label>
    </div>
    <div class="input-box">
        <input type="password" class="name-input" required />
        <label class="name-label">Введите пароль</label>
    </div>
    <div class="input-box">
        <input type="password" class="name-input" required />
        <label class="name-label">Повторите пароль</label>
    </div>
    <button class='button_sign'> Sign up</button>
    </form>
    </body>
    );
  }
}
