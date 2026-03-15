import fetchUsers from "./getApi.js"; 
import './style.css';

const eventsContainer = document.querySelector('.main-block');
const searchInput = document.querySelector('.header-bottom-l__input');
const moreBtn = document.querySelector('.modal-body__btn');

let page = 0;
let keyword = '';
let country = 'UA';

async function loadEvents(reset = false) {
  alert('ffsdfs')
  if (reset) {
    page = 0;
    eventsContainer.innerHTML = '';
  }

  try {
    alert('тест трац')
    const data = await fetchUsers({ keyword, page, country });


    if (!data?._embedded?.events) {
      console.log("Подій не знайдено");
      return;
    }

    const events = data._embedded.events;

    events.forEach(event => {
      const img = event.images;
      const name = event.name;
      const date = event.dates;
      const venue = event._embedded?.venues?.[0];

      eventsContainer.innerHTML += `
        <div class="card">
          <img src="${img}" alt="${name}" loading="lazy">
          <h3>${name}</h3>
          <p>${date}</p>
          <span>${venue}</span>
        </div>
      `;
    });



  } catch (err) {
    console.error("Помилка завантаження");
  }
}

 loadEvents(true);

searchInput.addEventListener('input', (e) => {
  keyword = e.target.value.trim();
  loadEvents(true);
});


moreBtn?.addEventListener('click', () => {
  page++;
  loadEvents();
});