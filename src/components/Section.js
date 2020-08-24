import React from "react";

import { ThemeProvider, Container, Spinner } from "theme-ui";
import theme from "@hackclub/theme";

import Cards from "./Card";

function Section(props) {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Container px={[3, null, 4]} mb={5}>
          {props.apiData ? (
            <Cards
              currentPage={props.currentPage}
              postsPerPage={props.postsPerPage}
              search={props.search}
              data={props.apiData}
              paginate={props.paginate}
            ></Cards>
          ) : (
            <Spinner />
          )}
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Section;
