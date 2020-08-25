import React from "react";

import { ThemeProvider, Container, Input, Card, Grid, Flex } from "theme-ui";
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
              <div class="columns is-mobile is-vcentered">
                <div class="column is-narrow">
                  <Icon glyph="search" size={32} />
                </div>
                <div class="column">
                  <form onSubmit={this.sendSearchKeyword}>
                    <Input
                      name="search"
                      id="search"
                      placeholder="Search Clubs, Leaders or Locations"
                    ></Input>
                  </form>
                </div>
              </div>
            </Card>
          </Container>
        </ThemeProvider>
      </div>
    );
  }
}

export default SearchBar;
