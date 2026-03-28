import fetchUsers from "./getApi";

import './style.css';

let impotantPage = 1
const pagination = document.querySelectorAll('.footer-pagination-page')
pagination.forEach(function (element, index, array) {
  element.addEventListener('click', function () {
    pagination.forEach(function (element) {
      if (element.classList.contains('active-page')) {
        element.classList.remove('active-page')
      }
    })
    impotantPage = Number(element.textContent)
    fetchUsers().then((data) => {
      createMarkup(data._embedded)
    });
    element.classList.add('active-page')
  })
})
console.log(impotantPage)


fetchUsers().then((data) => {
  createMarkup(data._embedded)
});

const list = document.querySelector(".main");
let cards
async function createMarkup(arr) {
  console.log(arr)
  const html = await arr.events.map((item) => {
    console.log(item)
    return `<div class="main-cards-card">
                     <img class="main-cards-card-pic" src="${item.images[0].url}" alt="poster"/>
                     <h2 class="main-cards-card-title">${item.name}</h2>
<span class="main-cards-card-location-content">${item.locale}</span>
                   </div>`;
  }).join("");


  list.innerHTML = html;
  cards = document.querySelectorAll('.main-cards-card')

  const modalAppear = document.querySelector('.overlay')
  const modalPic = document.querySelector('.modal-body__img')
  const cardPic = document.querySelector('.main-cards-card-pic')
  const modalLogo = document.querySelector('.modal-logo')
  modalAppear.style.display = "none"
  cards.forEach(element => {
    element.addEventListener('click', () => {
      let poster = element.firstElementChild.src
      console.log(poster)
      modalPic.src = poster
      cardPic.src = poster
      modalLogo.src = poster
      modalAppear.style.display = "flex"

    })

    document.addEventListener('keydown', (event) => {
      console.log(event.key)
      if (event.key == 'Escape') {
        modalAppear.style.display = "none"
      }
    })
    console.log(cards)
  })
  function searcPost() {
    const keyWord = searcInput.value;

    fetchUsers(keyWord).then((data) => {
      createMarkup(data._embedded)
    });
  }
  const searcInput = document.querySelector(".header-search-ticket");

}