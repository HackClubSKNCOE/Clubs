const getClubs = async () => {
  return fetch("https://api2.hackclub.com/v0.1/Operations/Clubs")
    .then((resp) => resp.json())
    .then(function (data) {
      return data
        .filter(({ fields }) => {
          return (
            !fields.Dummy &&
            fields["Address City"] &&
            fields["Leader Names"] &&
            fields["Address Country"]
          );
        })
        .map(({ id, fields }) => {
          return {
            id,
            clubName: fields.Name,
            city: fields["Address City"],
            state: fields["Address State"],
            country: fields["Address Country"],
            leaders: fields["Leader Names"],
            slackID: fields["Slack Channel ID"],
          };
        });
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};

export const getSearchResults = (data, search) => {
  const apiData = data.filter((info) => {
    return (
      info.clubName.toLowerCase().includes(search.toLowerCase()) ||
      info.leaders.toString().toLowerCase().includes(search.toLowerCase()) ||
      info.city.toString().toLowerCase().includes(search.toLowerCase()) ||
      info.country.toString().toLowerCase().includes(search.toLowerCase())
    );
  });
  search = "";
  return apiData;
};

export default getClubs;
