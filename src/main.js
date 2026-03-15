import fetchUsers from "./getApi.js";
import './style.css'


window.addEventListener('load', async () => {
  const events = await fetchEvents({});
  renderEvents(events);
});

let currentPage = 0;
let currentKeyword = '';
let currentCountry = 'UA';


const eventsContainer = document.getElementById('events-container');
const overlay = document.getElementById('overlay');
const moreBtn = document.querySelector('.modal-body__btn');

const displayEvents = async () => {
  const eventsData = await fetchUsers();
  if (eventsData) {
    console.log(eventsData);
  } else {
    console.log("Дані не вдалося отримати");
  }
};

displayEvents();

