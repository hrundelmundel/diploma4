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
   <div> <img class="main-cards-card-svg" src="./public/Vector.png" alt="poster"/>  <span class="main-cards-card-location-content">${item._embedded.venues[0].name}</span> </div>
   <p class="main-cards-card-location-content">${item.dates.start.localDate}</p>
                   </div>`;
  }).join("");



  list.innerHTML = html;
  cards = document.querySelectorAll('.main-cards-card')

  const modalAppear = document.querySelector('.overlay')
  const modalPic = document.querySelector('.modal-body__img')
  const cardPic = document.querySelector('.main-cards-card-pic')
  const modalLogo = document.querySelector('.modal__logo')
  cards.forEach(element => {
    element.addEventListener('click', () => {
      let poster = element.firstElementChild.src
      console.log(poster)
      modalPic.src = poster
      cardPic.src = poster
      console.log(cardPic)
      console.log(modalLogo)
      modalLogo.src = poster
      console.log(modalAppear)
      modalAppear.style.display = "flex"

    })

    document.addEventListener('keydown', (event) => {
      console.log(event.key)
      if (event.key == 'Escape') {
        modalAppear.style.display = "none"
      }
    })

    // console.log(cards)
  })


}


const modalList = document.querySelector(".modal-body-info");
let modalCards
async function createModal(arr) {
  console.log(arr)
  const html = await arr.events.map((item) => {
    // console.log(item)
    return `<h2 class="modal-body-info__title">INFO</h2>
          <p class="modal-body-info__text">${item.name}</p>
          <h2 class="modal-body-info__title">WHEN</h2>
          <span class="modal-body-info__text">${item.dates.start.localDate}</span>
          <p class="modal-body-info__text">${item.dates.start.localTime}</p>
          <h2 class="modal-body-info__title">WHERE</h2>
          <span class="modal-body-info__text">${item._embedded.venues[0].city.name}</span>
          <p class="modal-body-info__text">${item._embedded.venues[0].address.line1}</p>
          <h2 class="modal-body-info__title">WHO</h2>
          <p class="modal-body-info__text">${item._embedded.attractions[0].name}</p>
          <h2 class="modal-body-info__title">PRICE</h2>
          <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.22222 0L0 0L0 19.3333H3.22222L3.22222 0Z" fill="#0E0E0E" />
            <path d="M11.3266 0L8.10439 0L8.10439 19.3333H11.3266L11.3266 0Z" fill="#0E0E0E" />
            <path d="M16.2088 0L12.9866 0L12.9866 19.3333H16.2088L16.2088 0Z" fill="#0E0E0E" />
            <path d="M28.9999 0L24.2154 0L24.2154 19.3333H28.9999L28.9999 0Z" fill="#0E0E0E" />
            <path d="M6.44449 0L4.88219 0L4.88219 19.3333H6.44449L6.44449 0Z" fill="#0E0E0E" />
            <path d="M19.3333 0L17.771 0L17.771 19.3333H19.3333L19.3333 0Z" fill="#0E0E0E" />
            <path d="M22.5555 0L20.9932 0L20.9932 19.3333H22.5555L22.5555 0Z" fill="#0E0E0E" />
          </svg>
          <span class="modal-body-info__text">${item.priceRanges[0].min}</span> <br>
          <button class="modal-body-info__btn">buy tickets</button> <br>
          <svg width="29" height="20" viewBox="0 0 29 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3.22222 0L0 0L0 19.3333H3.22222L3.22222 0Z" fill="#0E0E0E" />
            <path d="M11.3266 0L8.10439 0L8.10439 19.3333H11.3266L11.3266 0Z" fill="#0E0E0E" />
            <path d="M16.2088 0L12.9866 0L12.9866 19.3333H16.2088L16.2088 0Z" fill="#0E0E0E" />
            <path d="M28.9999 0L24.2154 0L24.2154 19.3333H28.9999L28.9999 0Z" fill="#0E0E0E" />
            <path d="M6.44449 0L4.88219 0L4.88219 19.3333H6.44449L6.44449 0Z" fill="#0E0E0E" />
            <path d="M19.3333 0L17.771 0L17.771 19.3333H19.3333L19.3333 0Z" fill="#0E0E0E" />
            <path d="M22.5555 0L20.9932 0L20.9932 19.3333H22.5555L22.5555 0Z" fill="#0E0E0E" />
          </svg> 
          <span class="modal-body-info__text">VIP ${item.priceRanges[0].max}</span> <br>
          <button class="modal-body-info__btn">buy tickets</button>`;
  }).join("");

  modalList.innerHTML = html;

}
const modalTitle = document.querySelector('.main-cards-card-title')
function modalPost() {

  fetchUsers().then((data) => {
    createModal(data._embedded)

  });
}

modalTitle.addEventListener('click', () => {
  modalPost()
})



const searcInput = document.querySelector(".header-bottom-l__input")
const searchBtn = document.querySelector('.header-bottom-l__svg')
function searcPost() {
  const keyWord = searcInput.value;

  fetchUsers(keyWord).then((data) => {
    createMarkup(data._embedded)

  });

}
searchBtn.addEventListener('click', () => {
  searcPost()
})



