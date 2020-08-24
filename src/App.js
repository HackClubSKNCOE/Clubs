import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import SearchBar from "./components/SearchBar";
import lscache from "lscache";
import getClubs from "./utlis/app";

import { Spinner, Flex } from "theme-ui";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      search: null,
      data: null,
      isLoading: true,
      currentPage: 1,
      postsPerPage: 24,
    };
  }

  componentDidMount = function () {
    if (!lscache.get("club")) {
      const club = getClubs();
      club
        .then((data) => {
          lscache.set("club", data, 0);
        })
        .then(() => {
          this.setState({ data: lscache.get("club"), isLoading: false });
        });
    } else {
      this.setState({ data: lscache.get("club"), isLoading: false });
    }
  };

  searchKeyword = (keyword) => {
    if (keyword) {
      this.setState(() => ({ search: keyword }));
    }
  };

  paginate = (pageNumber) => {
    this.setState(() => ({ currentPage: pageNumber }));
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar searchKeyword={this.searchKeyword} />
        {this.state.data ? (
          <Section
            search={this.state.search}
            apiData={this.state.data}
            currentPage={this.state.currentPage}
            postsPerPage={this.state.postsPerPage}
            paginate={this.paginate}
          ></Section>
        ) : (
          <Flex
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
            mb={5}
          >
            <Spinner />
          </Flex>
        )}

        <Footer />
      </div>
    );
  }
}

export default App;
