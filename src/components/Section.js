import React from "react";
import lscache from "lscache";
import getClubs from "../utlis/app";

import {
  ThemeProvider,
  Button,
  Card,
  Box,
  Container,
  Text,
  Heading,
} from "theme-ui";
import theme from "@hackclub/theme";
import Cards from "./Card";

function Section() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container px={[3, null, 4]}>
          <Cards data={lol}></Cards>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const clubs = (async) => {
     const club = getClubs();

   club.then((data) => {
     console.log("selection")
     console.log(data);
     console.log(data[0].leaders);
     lscache.set("club", data, 2000);
   });

    //  console.log(club.json());
    //  lscache.set("club", club, 2000);
    //  console.log(lscache.get("club"));
  return lscache.get("club");
};
var lol = clubs();
console.log(lol);

export default Section;
