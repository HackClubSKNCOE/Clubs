import React from "react";

import {
  ThemeProvider,
  Box,
  Container,
  Grid,
  Heading,
  Link,
  Text,
  Image,
} from "theme-ui";
import theme from "@hackclub/theme";
import sknlogo from "../skn.png";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          bg: "darkless",
          color: "white",
          textAlign: "center",
          py: 5,
        }}
      >
        <Container px={[3, null, 4]}>
          <Grid
            as="article"
            gap={[2, 4]}
            columns={[2, null, 3]}
            sx={{
              px: 0,
              a: {
                textDecoration: "none",
                color: "white",
                transition: "0.125s color ease-in-out",
                ":hover,:focus": { color: "primary" },
              },
              "> div > a": {
                display: "block",
                mb: 2,
              },
              "h2,p": { color: "white" },
              h2: { fontSize: 3 },
              "a,p": { fontSize: 2 },
            }}
          >
            <Box>
              <Heading as="h2" variant="subheadline" mb={3}>
                Hack Club HQ
              </Heading>
              <Link href="https://hackclub.com/slack/" children="Slack" />
              <Link href="https://hackclub.com/donate/" children="Donate" />
              <Link href="https://hackclub.com/team/" children="Team" />
              <Link
                href="https://hackclub.com/philosophy/"
                children="Philosophy"
              />
              <Link href="https://hackclub.com/brand/" children="Branding" />
              <Link
                href="https://hackclub.com/press/"
                children="Press Inquiries"
              />
            </Box>
            <Box>
              <Heading as="h2" variant="subheadline" mb={3}>
                Resources
              </Heading>
              <Link
                href="https://hackclub.com/conduct/"
                children="Code of Conduct"
              />
              <Link href="https://events.hackclub.com/" children="Events" />
              <Link
                href="https://workshops.hackclub.com/"
                children="Workshops"
              />
              <Link
                href="https://hackathons.hackclub.com/"
                children="Hackathons"
              />
              <Link href="https://hackclub.com/bank/" children="Bank" />
              <Link href="https://hackclub.com/map/" children="Clubs Map" />
            </Box>

            <Box mt={4} sx={{ gridColumn: ["span 2", "span 1"] }}>
              <Link
                href="http://skn.hackclub.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={sknlogo}
                  alt="Hack Club Logo"
                  sx={{ width: [96, 128] }}
                />
              </Link>

              <p className="subtitle is-4 mt-1">
                <a href="https://twitter.com/hackclubskn" className="mx-2">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://www.instagram.com/hackclubskncoe"
                  className="mx-2"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/hack-club-skn"
                  className="mx-2"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="mx-2" href="https://github.com/HackClubSKNCOE">
                  <i className="fab fa-github"></i>
                </a>
              </p>
              <Text
                as="span"
                color="white"
                children="Project in mind? We are all ears!"
              />
            </Box>
          </Grid>
          <Text as="p" color="white" variant="caption" sx={{ mt: 4 }}>
            © {new Date().getFullYear()} Hack Club, SKNCOE
          </Text>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Footer;
