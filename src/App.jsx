import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  CardMedia,
} from "@mui/material/";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { styled } from "@mui/system";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Styled components
const StyledContainer = styled("div")({
  marginTop: 50,
});

const StyledIcon = styled("div")({
  marginRight: 20,
  display: "flex",
});

const StyledButtons = styled("div")({
  marginTop: 30,
});

const CardGrid = styled(Grid)({
  paddingTop: 40,
  paddingBottom: 20,
});

const CardComponent = styled(Card)({
  padding: 20,
});

const StyledCardMedia = styled(CardMedia)({
  height: 150,
});

const App = () => {
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <StyledIcon>
            <CameraAltIcon />
          </StyledIcon>
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <StyledContainer>
          <Container maxWidth="sm">
            <Typography
              variant="h3"
              textAlign="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="textSecondary"
              paragraph
            >
              Design a captivating photo album that beautifully presents your
              favorite memories. Enhance user experience with interactive
              features for a delightful journey.
            </Typography>
            <StyledButtons>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main Call to Action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary Action
                  </Button>
                </Grid>
              </Grid>
            </StyledButtons>
          </Container>
        </StyledContainer>

        <CardGrid container spacing={4}>
          {cards.map((card) => (
            <Grid item key={card} xs={12} sm={6} md={4}>
              <CardComponent>
                <StyledCardMedia
                  image="https://cdn.pixabay.com/photo/2017/08/06/00/02/court-2586882_960_720.jpg"
                  title="Title 1"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    Heading
                  </Typography>
                  <Typography>
                    This is a media card. Use this section to describe the
                    content.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    View
                  </Button>
                  <Button size="small" color="primary">
                    Edit
                  </Button>
                </CardActions>
              </CardComponent>
            </Grid>
          ))}
        </CardGrid>
      </main>
      <footer style={{ padding: "50px", background: "whiteSmoke" }}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="grey">
          Copyrights Protected © By Malaika Zafar
        </Typography>
      </footer>
    </>
  );
};

export default App;
