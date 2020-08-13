import React from "react";

import {
  ThemeProvider,
  Button,
  Card,
  Box,
  Container,
  Text,
  Heading,
  Grid,
} from "theme-ui";
import theme from "@hackclub/theme";

function Cards(props) {
  console.log("cards ")
  console.log(props.data[15]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid gap={2} columns={[null, 2, 4]}>
          {
            props.data.map((info) => {
                        return(
                          <div>
                            <Card variant="interactive" style={{height:"18rem" }}>
                              <Text variant="subheadline">{info.clubName}</Text>
                              <Text variant="caption">
                                {info.city},{info.state},
                                {info.country}
                              </Text>
                              <Text variant="subheadline"> {info.leaders} </Text>
                              
                              <Text variant="caption">{info.slackID}</Text>
                            </Card>
                          </div>
                        )
            })
          }
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Cards;
