let currentPage = 1
const fetchUsers = async (keyword) => {
  if (keyword === "" || keyword === undefined || keyword === null) {
    try {
      const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ysiWd5ANkbC1Fzhe8MQMKaIFaNSYPtiG&size=16&page=1`).then((data) => {
        return data.json();
      });
      return result;
    } catch (error) {
      return error;
    }
  } else {
    try {
      const result = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=ysiWd5ANkbC1Fzhe8MQMKaIFaNSYPtiG&size=20&page=${currentPage}&keyword=${keyword}`).then((data) => {
        return data.json();
      });
      return result;
    } catch (error) {
      return error;
    }
  }
};

export default fetchUsers;