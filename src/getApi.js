
const fetchUsers = async (page, keyword) => {
  if (keyword === "" || keyword === undefined || keyword === null) {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=FtjwLKZiplChaOnx6nha0W5tILyX8Dkp&size=20&page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Виникла пмилка");
      return error;
    }
  } else {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=FtjwLKZiplChaOnx6nha0W5tILyX8Dkp&size=20&page=${page}&keyword=${keyword}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Виникла помилка");
      return error;
    }
  }
};

export default fetchUsers;