import React from "react";

import { ThemeProvider, Card, Text, Grid } from "theme-ui";
import theme from "@hackclub/theme";

function Cards(props) {
  console.log(props.data);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid gap={2} columns={[null, 2, 4]}>
          {props.data.map((info) => {
            return (
              <Card key={info.id} variant="interactive">
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
