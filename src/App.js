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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bg: "sheet",
          color: "primary",
          textAlign: "center",
          py: 5,
          mb: 4,
        }}
      >
        <Heading variant="title">Hack Club List</Heading>
        <Text sx={{ color: "text" }} variant="subtitle">
          all the hack clubs from the world
        </Text>
      </Box>
    </ThemeProvider>
  );
}

export default App;
