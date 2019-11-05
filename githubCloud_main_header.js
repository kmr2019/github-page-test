customElements.define('main-header',
class extends HTMLElement {

  static get observedAttributes() { //감시자
  }

  constructor() { // 생성자
    super();

    this.shadowDOM = this.attachShadow({
      'mode': 'open'
    });
    render(this.template(), this.shadowDOM);
    console.log('constructed!');
  }

  connectedCallback() {
    let navi_list = this.shadowDOM.querySelectorAll('.header-navi-list-item');
    let navi_list_clone = [...navi_list]; //배열 복사
    let mobile_navi_button = this.shadowDOM.querySelector('.header-mobile-button');
    let mobile_navi_fade_container = this.shadowDOM.querySelector('.header-mobile_navi_container');
    let mobile_navi_fade_box = this.shadowDOM.querySelector('.header-mobile_navi_box');
    let count = 1;

    navi_list.forEach((list) =>
    list.onclick = () => {
      list.classList.add("header-navi-underline");

      navi_list_clone.forEach((list_clone) => {
        if (list === list_clone) { //continue 대신
        } else {
          list_clone.classList.remove("header-navi-underline");
        }
      });
    });

    mobile_navi_button.onclick = () => {
      if(count%2 != 0) {
         mobile_navi_fade_box.style.animation = "navi-down 1s forwards";
         mobile_navi_fade_container.style.display = "block";
         mobile_navi_fade_box.style.display = "block";
      } else {
         mobile_navi_fade_container.style.display = "none";
         mobile_navi_fade_box.style.display = "none";
      }
      count++;
    }
    console.log('connected!');
  }

  disconnectedCallback() {
    console.log('disconnected!');
  }

  attributeChangedCallback(name, old_value, new_value) {
    render(this.template(), this.shadowDOM);
    console.log(`Attribute: ${name} changed to ${this.text}`);
  }

  adoptedCallback() { // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
    console.log('adopted!');
  }
  ad222optedCallback() { // 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출
    console.log('adopted!');
  }

  template() {
    return html `
    <style>
    :host {
      color-scheme: light dark;
      margin: 0;
      padding: 0;
      --background: black;
      --font-color: white;

    }

    @media (prefers-color-scheme: bark) {
      :host {
        --background: red;
        --text-color: blue;
      }
    }

    .header-container {
      width: 100%;
      height: 70px;
      background-color: var(--background);
    }

    .header-contents {
      width: 100%;
      height: 70px;
      max-width: 1080px;
      margin: 0 auto;
    }

    .header-logo-box {
      float: left;
      width: 70px;
      height: 100%;
    }

    .header-logo-box>a {
      display: flex;
      width: 70px;
      height: 100%;
    }

    .header-logo-img {
      width: 70%;
      hegiht: 70%;
      margin: auto;
    }

    .header-navi-box {
      float: right;
      width: auto;
      height: 100%;
    }

    .header-navi-list {
      margin: 0px;
      padding: 0px;
      list-style: none;
    }

    .header-navi-list-item {  /* width값 120px로 고정한 이유 영문 때문에 */
      display: inline-block;
      width: 120px;
      height: 100%;
    }

    .header-navi-list-item>p {
      margin: 0;
      font-weight: bold;
      font-size: 1em;
      line-height: 70px;
      color: var(--font-color);
      text-align: center;
    }

    .header-navi-list-item>p:hover {
      animation: navi-ani 0.4s forwards;
    }

    @keyframes navi-ani {
      from {
        color: white;
      } to {
        color: gray;
      }
    }

    .header-navi-underline {
      text-decoration: underline;
      text-decoration-color: lightgreen;
    }

    .header-mobile-button-box {
      display: none;
    }

    .header-mobile_navi_container {
      display: none;
    }

    .header-mobile_navi_box {
      display: none;
    }
    /*////////////////////////////////////////////////////////////////////////////////////////*/
    @media (max-width: 1199px) { /* 가로 해상도가 1200px 보다 작은 화면에 적용 */
      .header-container {
        background-color: red;
        height: 60px;
      }

      .header-contents {
        height: 60px;
      }

      .header-logo-box {
        width: 60px;
      }

      .header-logo-box>a {
        width: 60px;
      }

      .header-navi-list-item>p {
        line-height: 60px;
      }
    }

    @media (max-width: 991px) { /* 태블릿 디바이스 (가로 해상도가 992px 보다 작은 화면에 적용) */
      .header-container {
        background-color: green;
        height: 55px;
      }

      .header-navi-list-item {
        width: 100px;
      }

      .header-navi-list-item>p {
        font-size: .9em;
        line-height: 55px;
      }

      .header-contents {
        height: 55px;
      }

      .header-logo-box {
        width: 55px;
      }

      .header-logo-box>a {
        width: 55px;
      }

      .header-mobile_navi_container {
        display: none;
      }

      .header-mobile_navi_box {
        display: none;
      }
    }

    @media (max-width: 767px) { /* 가로모드 모바일 디바이스 (가로 해상도가 768px 보다 작은 화면에 적용) */
 /*
      .header-navi-list-item {
        width: 80px;
      }

      .header-navi-list-item>p {
        font-size: .8em;
        line-height: 45px;
      }
*/
      .header-container {
        background-color: blue;
        height: 45px;
      }

      .header-contents {
        height: 45px;
      }

      .header-logo-box {
        width: 45px;
      }

      .header-logo-box>a {
        width: 45px;
      }

      .header-mobile-button-box {
        display: flex;
        float: right;
        width: 45px;
        height: 100%;
      }

      .header-mobile-button {
        width: 70%;
        height: 70%;
        margin: auto;
        border-radius: 20%;
        background: #EAEAEA;
        border: 1px solid #EAEAEA;
      }

      .header-navi-box {
        display: none;
      }

      .header-mobile_navi_container {
        overflow: hidden;
        position: absolute;
        z-index: 10;
        width: 100%;
        height: 180px;
      }

     .header-mobile_navi_box {
        position: absolute;
        width: 100%;
        height: 180px;
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .header-mobile_navi_box>a {
        text-decoration: none;
        color: gray;
      }

      .header-mobile_navi_list {
        width: 100%;
        hegiht: 45px;
        border: 1px solid gray;
        background: #EAEAEA;
        box-sizing: border-box;
      }

      .header-mobile_navi_list {
        margin: 0px;
        font-weight: bold;
        font-size: .8em;
        text-align: center;
      }

      @keyframes navi-down {
        0%{
          top: -100%;
        } 100%{
          top: 0%;
        }
      }
    }

    @media (max-width: 575px) { /* 세로모드 모바일 디바이스 (가로 해상도가 576px 보다 작은 화면에 적용) */
      /*
      .header-navi-list-item {
        width: 60px;
      }

      .header-navi-list-item>p {
        font-size: .7em;
        line-height: 35px;
      }
      */
      .header-container {
        background-color: pink;
        height: 35px;
      }

      .header-contents {
        height: 35px;
      }

      .header-logo-box {
        width: 35px;
      }

      .header-logo-box>a {
        width: 35px;
      }

      .header-mobile-button-box {
        width: 35px;
      }

      .header-mobile_navi_container {
        height: 140px;
      }

     .header-mobile_navi_box {
        height: 140px;
      }

      .header-mobile_navi_list {
        hegiht: 35px;
      }

      .header-mobile_navi_list {
        font-size: .7em;
      }

      @media (prefers-color-scheme: bark) {
        :host {
          --background: red;
          --text-color: blue;
        }

        .header-container {
          background-color: red;
          height: 35px;
        }
      }
    }
    /*no-preference light bark*/

    </style>

    <div class="header-container">
      <div class="header-contents">
        <div class="header-logo-box">
          <a href="githubCloud_main_login.html"> <img src="images/logo.png" class="header-logo-img" alt="logo-img"> </a>
        </div>

        <div class="header-navi-box">
          <ul class="header-navi-list">
            <a> <li class="header-navi-list-item"> <p>소개</p> </li> </a>
            <a> <li class="header-navi-list-item"> <p>서비스</p> </li> </a>
            <a href="githubCloud_main_directory.html"> <li class="header-navi-list-item"> <p>탐색기</p> </li> </a>
            <a href="githubCloud_main_login.html"> <li class="header-navi-list-item"> <p>로그인</p> </li> </a>
          </ul>
        </div>

        <div class="header-mobile-button-box">
          <button class="header-mobile-button">ㅗ</button>
        </div>
      </div>
    </div>

    <div class="header-mobile_navi_container">
      <ul class="header-mobile_navi_box">
        <li class="header-mobile_navi_list"> <p>소개</p> </li>
        <li class="header-mobile_navi_list"> <p>서비스</p> </li>
        <a href="githubCloud_main_directory.html"><li class="header-mobile_navi_list"> <p>탐색기</p> </li> </a>
        <a href="githubCloud_main_login.html"> <li class="header-mobile_navi_list"> <p>로그인</p> </li> </a>
      </ul>
    </div>
    `;
  }
});
