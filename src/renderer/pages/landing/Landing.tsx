import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  const handleSelect = (path: string) => {
    navigate(path);
  };

  return (
    <Box display="flex">
      <Grid
        container
        columns={12}
        spacing={2}
        sx={{ flexGrow: 1, mx: 30, my: 4 }}
      >
        <Grid component="section" size={6}>
          <Button
            fullWidth
            variant="contained"
            onClick={() => handleSelect('pdf/merge')}
          >
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
