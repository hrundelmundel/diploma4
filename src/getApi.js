
const fetchUsers = async (page, keyword) => {
  alert('fhdfhdfhdfh')
  if (keyword === "" || keyword === undefined || keyword === null) {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=${page}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Виникла пмилка");
      return error;
    }
  } else {
    try {
      const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=RKwTp5P44ztFFCbPCDFoxyCASf3hPfPS&size=20&page=${page}&keyword=${keyword}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Виникла помилка");
      return error;
    }
  }
};

export default fetchUsers;