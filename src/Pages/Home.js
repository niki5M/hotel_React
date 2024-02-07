import React, { Component } from "react";
import '../css/home.css';

export default class Home extends Component {
  render() {
    return (
      <body>
  <div class="intro">
    
    <div class="container_intro">
      <div class="container-intro">
          <h1 class="intro__title"> HOTEL </h1>
          <h2 class="intro__text">  Элитный отель “Royal hotel” предлагает вам провести незабываемый для вас и вашей семьи отдых.</h2>
            <h2 class="intro__text">  Из наших номеров открывается потрясающий вид на море. В распоряжении гостей собственный оборудованный пляж , Wi-Fi по
               всей территории отеля , бесплатная парковка , ресторан , а так же круглосуточное обслуживание номера для вашего удобства.</h2>
              <h2 class="intro-text">  Проведите незабываемый отдых с нами!</h2>
              <h2 class="in-text">НАШИ НОМЕРА</h2>
      </div>
    </div>
    <div class="border">
      <div class="cont">
        <img src="na3.jpg" alt="" width="400" height="350"/>
      </div>
      <div class="cont">
        <img src="na1.jpg" alt="" width="500" height="450"/>
      </div>
      <div class="cont">
        <img src="na2.jpg" alt="" width="450" height="350"/>
      </div>
    </div>
    <div class="block__3">
      <h1 class="adress">АДРЕС</h1>
      <iframe width="1000" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
      src="https://www.openstreetmap.org/export/embed.html?bbox=-2.698,51.473,0.579,52.883&amp;layer=mapnik">
      </iframe>
      <h1 class="adress__link">г. Москва, ул. ****, д 67</h1>
    </div>
    <div class="block__4">
      <img src="podadress.jpg" alt=""/>
      <img class="logo__img" src="logo.png" alt=""/>
    </div>
    <div class="box">
      <nav class="nav2">
        <li><a class="nav2__link" href="#">Каталог</a></li>
        <li><a class="nav2__link" href="#">Вход</a></li>
        <li><a class="nav2__link" href="#">Регистрация</a></li>
      </nav>
    </div>
    <div class="contact">
      <div class="telegram">
        <img class="telega" src="telegram.png" alt='' width="5%" height="5%"/>
        <h1 class="h3">+7 888 356 75 42</h1>
      </div>
      <div class="whatsup">
        <img class="what" src="whatsapp.png" alt='' width="5%" height="5%"/>
        <h1 class="h3">+7 888 356 75 42</h1>
      </div>
    </div>
  </div>
</body>
    );
  }
}
