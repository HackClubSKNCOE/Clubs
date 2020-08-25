import React from "react";

import {
  ThemeProvider,
  Card,
  Text,
  Grid,
  Container,
  Link,
  Button,
  Flex,
  Box,
} from "theme-ui";
import theme from "@hackclub/theme";
import Icon from "@hackclub/icons";

import { getSearchResults } from "../utlis/app";

function Cards(props) {
  const currentPage = props.currentPage;
  const postsPerPage = props.postsPerPage;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  let pageNumbers = [];

  let apiData = props.data;
  let search = props.search;
  if (search && search !== " ") {
    apiData = getSearchResults(props.data, search);
  } else {
    apiData = props.data.slice(indexOfFirstPost, indexOfLastPost);
    for (let i = 1; i <= Math.ceil(props.data.length / postsPerPage); i++) {
      pageNumbers.push(i);
    }
  }

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Grid gap={2} columns={[null, 2, 4]}>
          {apiData &&
            apiData.map((info) => {
              return (
                <Card
                  key={info.id}
                  variant="interactive"
                  sx={{ minheight: "18rem" }}
                >
                  <Text variant="subheadline">
                    {info.clubName ? info.clubName : "Hack Club"}
                  </Text>
                  <Text variant="caption">
                    {info.city ? `${info.city}, ` : "Unknown, "}
                    {info.state ? `${info.state}, ` : "Unknown, "}
                    <br />
                    {info.country ? `${info.country} ` : "Unknown "}
                  </Text>
                  <br />
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row;",
                      align: "stretch",
                    }}
                  >
                    <div>
                      <Icon
                        sx={{ flexShrink: 0, flexBasis: 24, flexGrow: 0 }}
                        glyph="leaders-fill"
                        color="red"
                        size={24}
                      />
                    </div>
                    <Text
                      variant="caption"
                      ml={2}
                      sx={{ color: "red", flexGrow: 1 }}
                    >
                      {info.leaders ? `${info.leaders} ` : "Hack Clubber "}{" "}
                    </Text>
                  </Box>
                  <br />
                  {info.slackID ? (
                    <Text variant="caption">
                      <Link
                        target="_blank"
                        rel="noopener noreferrer"
                        color="red"
                        sx={{ color: "#4A154B" }}
                        href={
                          "https://app.slack.com/client/T0266FRGM/" +
                          info.slackID
                        }
                      >
                        <Icon glyph="slack-fill" size={36}></Icon>
                      </Link>
                      <br />
                    </Text>
                  ) : (
                    " "
                  )}
                </Card>
              );
            })}
        </Grid>
        <Container mt={5}>
          <nav
            className="pagination is-centered"
            role="navigation"
            aria-label="pagination"
          >
            <ul className="pagination-list">
              {pageNumbers.map((number) => (
                <li key={number}>
                  <Button
                    variant="outline"
                    onClick={() => props.paginate(number)}
                    className="pagination-link"
                  >
                    {number}
                  </Button>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default Cards;
