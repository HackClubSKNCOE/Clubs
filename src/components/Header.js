import React from "react";

import {
  ThemeProvider,
  Box,
  Text,
  Heading,
  Link,
  Image,
  Container,
  IconButton,
} from "theme-ui";
import theme from "@hackclub/theme";

import flagImg from "../flag-orpheus-top.svg";

function Header() {
  const Flag = () => (
    <Link
      href="https://hackclub.com/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Hack Club homepage"
      sx={{ mt: -3, lineHeight: 0 }}
    >
      <Image src={flagImg} alt="Hack Club flag" sx={{ width: [96, 128] }} />
    </Link>
  );

  const NavButton = ({ sx, ...props }) => (
    <IconButton
      {...props}
      sx={{
        color: "primary",
        outline: "none",
        ...sx,
      }}
    />
  );

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Box
          as="nav"
          sx={{
            bg: "sheet",
            color: "nav",
            py: 3,
          }}
        >
          <Container
            sx={{
              display: "flex",
              alignItems: "center",
              a: {
                fontSize: 1,
                color: "primary",
                textDecoration: "none",
                mr: [3, 4],
              },
            }}
          >
            <Flag />{" "}
            <NavButton
              href="https://github.com/HackClubSKNCOE"
              aria-label="View source code on GitHub"
              sx={{ ml: "auto" }}
            >
              <a className="mx-2 auto" href="https://github.com/HackClubSKNCOE">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </NavButton>
          </Container>
        </Box>
        <Box
          as="header"
          sx={{
            bg: "sheet",
            textAlign: "center",
            px: 3,
            pb: [3, 4],
            mb: [3, 4],
          }}
        >
          <Heading as="h1" variant="title" color="primary" mb={2}>
            Hack Club List
          </Heading>

          <Text as="p" variant="subtitle">
            List of all the Hack Clubs in the world
          </Text>
        </Box>
      </ThemeProvider>
    </div>
  );
}

export default Header;
