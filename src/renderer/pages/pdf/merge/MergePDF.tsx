import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid2';
import Button from '@mui/material/Button';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PDFDocument } from 'pdf-lib';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

interface FileObj {
  file: File;
  id: string;
  objURL: string;
}

export default function MergePDF() {
  const [selectedFiles, setSelectedFiles] = useState<FileObj[]>([]);
  const uploadFiles = (files: FileList | null) => {
    if (files == null) {
      return;
    }

    const fileObjs = Array.from(files).map((file) => ({
      file,
      id: uuidv4(),
      objURL: `${URL.createObjectURL(file)}#toolbar=0`,
    }));

    setSelectedFiles([...fileObjs]);
  };

  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        flexGrow: 1,
      }}
    >
      {selectedFiles.length === 0 && (
        <Box
          component="section"
          sx={{
            display: 'flex',
            flexGrow: 1,
            m: 2,
            borderRadius: 1,
            border: 4,
            borderColor: 'gray',
            borderStyle: 'dashed',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Button
            component="label"
            variant="contained"
            startIcon={<CloudUploadIcon />}
          >
            Upload files
            <VisuallyHiddenInput
              type="file"
              accept="application/pdf"
              onChange={(event) => uploadFiles(event.target.files)}
              multiple
            />
          </Button>
        </Box>
      )}
      {selectedFiles.length !== 0 && (
        <Grid container columns={12} spacing={2} sx={{ flexGrow: 1, m: 4 }}>
          {Array.from(selectedFiles).map((file: FileObj) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }} key={file.id}>
              <Box
                sx={{
                  flexGrow: 1,
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Typography>{file.file.name}</Typography>
                <embed
                  src={file.objURL}
                  title={file.id}
                  width="100%"
                  height="400px"
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
