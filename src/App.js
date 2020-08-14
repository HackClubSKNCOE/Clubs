import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Section from "./components/Section";
import SearchBar from "./components/SearchBar";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      search: null,
    };
  }

  searchKeyword = (keyword) => {
    if (keyword) {
      console.log(keyword);
      this.setState(() => ({ search: keyword }));
    }
    // return keyword;
  };

  render() {
    return (
      <div>
        <Header />
        <SearchBar searchKeyword={this.searchKeyword} />
        <Section search={this.state.search}></Section>
        <Footer />
      </div>
    );
  }
}

export default App;
