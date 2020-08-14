const getClubs = async () => {
  return fetch("https://api2.hackclub.com/v0.1/Operations/Clubs")
    .then((resp) => resp.json())
    .then(function (data) {
      // console.log(data);

      return data
        .filter(({ fields }) => {
          return !fields.Dummy && fields["Address City"];
        })
        .map(({ id, fields }) => {
          // if (fields.Dummy == 0) {
          //   console.log(fields.Dummy);
          // }

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

export default getClubs;
