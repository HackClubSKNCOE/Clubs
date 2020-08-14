import React from "react";
import lscache from "lscache";
import getClubs from "../utlis/app";

import { ThemeProvider, Container } from "theme-ui";
import theme from "@hackclub/theme";
import Cards from "./Card";

function Section() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container px={[3, null, 4]} mb={5}>
          <Cards data={clubs()}></Cards>
        </Container>
      </ThemeProvider>
    </div>
  );
}

const clubs = (async) => {
  // const club = getClubs();
  // club.then((data) => {
  //   // console.log(data);

  //   lscache.set("club", data, 0);
  // });

  return lscache.get("club");
};

export default Section;
