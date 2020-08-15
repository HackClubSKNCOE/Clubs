import React, { Component } from "react";

import {
  ThemeProvider,
  Container,
  Input,
  Card,
  Grid,
  Label,
  IconButton,
  Flex,
} from "theme-ui";
import theme from "@hackclub/theme";
import Icon from "@hackclub/icons";

class SearchBar extends React.Component {
  sendSearchKeyword = (e) => {
    e.preventDefault();
    let keyword = e.target.elements.search.value || " ";

    this.props.searchKeyword(keyword);
  };

  render() {
    return (
      <div>
        <ThemeProvider theme={theme}>
          <Container px={[3, null, 4]} mb={5}>
            <Card variant="sunken">
              <Grid gap={2} columns={[null, 2, 3]}>
                <div></div>
                <form onSubmit={this.sendSearchKeyword}>
                  <Flex>
                    <Icon glyph="search" size={32} />
                    <Input
                      name="search"
                      id="search"
                      placeholder="Search Clubs, Leaders or Locations"
                      sx={{ flex: "1 1 auto" }}
                    ></Input>
                  </Flex>
                </form>
                <div>
                  <Icon glyph="filter" size={32} />
                </div>
              </Grid>
            </Card>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default SearchBar;
