import React from "react";

import { ThemeProvider, Card, Text, Grid } from "theme-ui";
import theme from "@hackclub/theme";
import Icon from "@hackclub/icons";

function Cards(props) {
  let apiData = props.data;
  let search = props.search;
  if (search && search != " ") {
    apiData = props.data.filter((info) =>
      info.clubName
        .trim()
        .toLowerCase()
        .split(" ")
        .join("")
        .includes(props.search.trim().toLowerCase().split(" ").join(""))
    );

    search = "";
  } else {
    apiData = props.data;
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid gap={2} columns={[null, 2, 4]}>
          {apiData &&
            apiData.map((info) => {
              return (
                <Card
                  key={info.id}
                  variant="interactive"
                  sx={{ minheight: "18rem" }}
                >
                  <Text variant="subheadline">
                    {info.clubName ? info.clubName : "Hack Club"}
                  </Text>
                  <Text variant="caption">
                    {info.city ? `${info.city}, ` : "Unknown, "}
                    {info.state ? `${info.state}, ` : "Unknown, "}
                    <br />
                    {info.country ? `${info.country} ` : "Unknown "}
                  </Text>
                  <br />
                  <Text variant="caption" sx={{ color: "red" }}>
                    <Icon glyph="leaders-fill" size={24} />
                    <br />
                    {info.leaders ? `${info.leaders} ` : "Hack Clubber "}{" "}
                  </Text>

                  <Text variant="caption">{info.slackID}</Text>
                </Card>
              );
            })}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Cards;
