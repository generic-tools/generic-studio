import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';

function Landing() {
  return (
    <Box display="flex">
      <Grid
        container
        columns={12}
        spacing={2}
        sx={{ flexGrow: 1, mx: 30, my: 4 }}
      >
        <Grid component="section" size={6}>
          <Button fullWidth variant="contained">
            Merge PDF
          </Button>
        </Grid>
        <Grid container component="section" size={6}>
          <Button fullWidth variant="contained">
            Organize PDF
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Landing;
