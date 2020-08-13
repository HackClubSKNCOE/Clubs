import React from "react";

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
import Header from './components/Header'
import Footer from './components/Footer'
import Section from './components/Section'

function App() {
  return (
    <div>
      <Header/>
      <Section></Section>
      <Footer/>
    </div>
  );
}

export default App;
