import { useRouteError, isRouteErrorResponse } from "react-router-dom";
import Container from "@mui/system/Container";
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

export default function Error() {
  const error = useRouteError();
  let errorMessage: string;

  if (isRouteErrorResponse(error)) {
    // error is type `ErrorResponse`
    errorMessage = error.error?.message || error.statusText;
  } else if (error instanceof Error) {
    errorMessage = (error as Error)?.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    console.error(error);
    errorMessage = "Unknown error";
  }

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container spacing={2}>
          <Grid xs={6}>
            <Typography variant="h6">Oops!</Typography>
            <Typography variant="h4" gutterBottom>
              Sorry, an unexpected error has occurred.
            </Typography>
            <Typography variant="h6" color="red" paragraph>
              {errorMessage}
            </Typography>
            <Button variant="contained" href="/">
              Back Home
            </Button>
          </Grid>
          <Grid xs={6}>
            <Box
              component="img"
              sx={{
                maxWidth: 500,
                maxHeight: 250,
                border: 1,
                borderRadius: "8px",
                boxShadow: 2,
              }}
              alt="error image"
              src="internal-server-error.png"
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
