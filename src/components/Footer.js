import React from 'react'

import { ThemeProvider,Box, Container, Image, Grid, Heading, Link, Text } from 'theme-ui'
import theme from '@hackclub/theme'

const Footer = () =>{

return(
    <ThemeProvider theme={theme}>
    <Box
      sx={{
        bg: "darkless",
        color: "white",
        textAlign: "center",
        py: 5,
        mb: 4,
      }}
    >


    <Container px={[3, null, 4]}>
    <Grid
      as="article"
      gap={[2, 4]}
      columns={[2, 3, 4]}
      sx={{
        px: 0,
        a: {
          textDecoration: 'none',
          color: 'white',
          transition: '0.125s color ease-in-out',
          ':hover,:focus': { color: 'primary' }
        },
        '> div > a': {
          display: 'block',
          mb: 2
        },
        'h2,p': { color: 'white' },
        h2: { fontSize: 3 },
        'a,p': { fontSize: 2 }
      }}
    >
      <Box>
        <Heading as="h2" variant="subheadline" mb={3}>
          Hack Club HQ
        </Heading>
        <Link href="https://hackclub.com/slack/" children="Slack" />
        <Link href="https://hackclub.com/donate/" children="Donate" />
        <Link href="https://hackclub.com/team/" children="Team" />
        <Link href="https://hackclub.com/philosophy/" children="Philosophy" />
        <Link href="https://hackclub.com/brand/" children="Branding" />
        <Link href="https://hackclub.com/press/" children="Press Inquiries" />
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
        <Link href="https://workshops.hackclub.com/" children="Workshops" />
        <Link href="https://hackathons.hackclub.com/" children="Hackathons" />
        <Link href="https://hackclub.com/bank/" children="Bank" />
        <Link href="https://hackclub.com/map/" children="Clubs Map" />
      </Box>
      
      <Box sx={{ gridColumn: ['span 2', 'span 1'] }}>
      
        <Grid
          columns={[8, 4]}
          gap={2}
          sx={{
            alignItems: 'center',
            ml: -1,
            my: 3,
            maxWidth: [null, 192],
            svg: { fill: 'currentColor', width: 32, height: 32 },
            a: {
              lineHeight: 0,
              mb: 0,
              transition:
                'transform .125s ease-in-out, color .125s ease-in-out',
              ':hover,:focus': { transform: 'scale(1.125)' }
            }
          }}
        >
          <div href="/slack" icon="slack-fill" target="_self" />
          <div href="https://twitter.com/hackclub" icon="twitter" />
          <div href="https://github.com/hackclub" icon="github" />
          <div
            href="https://www.facebook.com/Hack-Club-741805665870458"
            icon="facebook"
          />
        
         
          <div href="mailto:team@hackclub.com" icon="email" />
        </Grid>
            <Heading as="h2" variant="subheadline" mb={3}>
            Hack Club,SKNCOE
        </Heading>
        <Text as="span" color="white" children="Project in mind? We are all ears!" />
      
      </Box>
    </Grid>
    <Text as="p" color="white" variant="caption" sx={{ mt: 3 }}>
      © {new Date().getFullYear()} Hack Club, SKNCOE
    </Text>
  </Container>

    </Box>
  </ThemeProvider>
)


}




export default Footer