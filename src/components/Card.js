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
  console.log(props.data[15]);
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid gap={2} columns={[null, 2, 4]}>
          <Card sx={{ m: 2 }} variant="interactive">
            <Text variant="subheadline">{props.data[15].clubName}</Text>
            <Text variant="caption">
              {props.data[1].city} {props.data[1].state}
              {props.data[1].country}
            </Text>
            <Text variant="caption">Shaunak Gadkari, Abinash Ram Sunthar</Text>
          </Card>
          <Card sx={{ m: 2 }} variant="interactive">
            <Text variant="subheadline">Glen Waverley SC</Text>
            <Text variant="caption">
              Glen Waverly, Victoria, Australia (AU)
            </Text>
            <Text variant="caption">Shaunak Gadkari, Abinash Ram Sunthar</Text>
          </Card>
          <Card sx={{ m: 2 }} variant="interactive">
            <Text variant="subheadline">Glen Waverley SC</Text>
            <Text variant="caption">
              Glen Waverly, Victoria, Australia (AU)
            </Text>
            <Text variant="caption">Shaunak Gadkari, Abinash Ram Sunthar</Text>
          </Card>
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default Cards;
