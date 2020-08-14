import React from "react";

import { ThemeProvider, Card, Text, Grid } from "theme-ui";
import theme from "@hackclub/theme";
import Icon from "@hackclub/icons";

function Cards(props) {
  console.log(props.data);
  let apiData = props.data;
  let search = props.search;
  if (search && search != " ") {
    console.log(search.trim().toLowerCase().split(" ").join(""));
    apiData = props.data.filter(
      (info) =>
        info.clubName.trim().toLowerCase().split(" ").join("") ===
        props.search.trim().toLowerCase().split(" ").join("")
    );
    console.log(apiData);
    search = "";
  } else {
    apiData = props.data;
  }
  console.log("search", props.search);

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid gap={2} columns={[null, 2, 4]}>
          {apiData.map((info) => {
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
