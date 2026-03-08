 
const fetchUsers = async () => {
  try {
    const response = await fetch("https://app.ticketmaster.com/discovery/v2/events.json?apikey=FtjwLKZiplChaOnx6nha0W5tILyX8Dkp&size=100");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Виникла помилка");
  }
};
export default fetchUsers;
