const axios = require("axios");

const getGameData = async (req, res) => {
  const searchInput = req._parsedUrl.query;

  const stringifySearch = decodeURI(searchInput);

  console.log(stringifySearch);

  if (searchInput) {
    const data = `fields name, cover.url, screenshots.url, rating, multiplayer_modes, release_dates.date, platforms.name, genres.name; search "${stringifySearch}";`;
    const config = {
      method: "post",
      url: "https://api.igdb.com/v4/games",
      headers: {
        "Client-ID": "zgvole5aqniz8rnu55rvoxmw3h8d8x",
        Authorization: "Bearer zzrepo6q4zb5jvw5jxqswmpgc6ef0s",
        "Content-Type": "application/json",
      },
      data: data,
    };
    const response = await axios(config);

    // axios(config)
    //   .then((res) => console.log(res, "1"))
    //   .catch((err) => console.log(err));

    console.log(response, "2");

    // const results = response.data;

    res.json(response.data);
  } else {
    res.send("Search for your favourite game to see some results");
  }
};

module.exports = getGameData;
