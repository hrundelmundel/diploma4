import fetchUsers from "./getApi.js";
import './style.css'


const displayEvents = async () => {
  const eventsData = await fetchUsers();
  if (eventsData) {
    console.log(eventsData);
  } else {
    console.log("Дані не вдалося отримати");
  }
};

displayEvents();


