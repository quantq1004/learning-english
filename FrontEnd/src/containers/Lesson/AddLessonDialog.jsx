import React, { useState } from 'react';
import { DialogContent, Grid } from '@mui/material';
import Dialog from '@src/components/Dialog';
import {
  StyledDialogActions,
  StyledButton,
  StyledTextField,
} from './index.style';

const DialogAddLesson = ({
  open,
  onClose,
  title,
  imageURL,
  onTitleChange,
  onImageURLChange,
  onSubmitAdd,
}) => {
  const [titleError, setTitleError] = useState('');
  const [imageURLError, setImageURLError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasError = false;

    if (!title) {
      setTitleError('Title is required');
      hasError = true;
    } else {
      setTitleError('');
    }

    if (!imageURL) {
      setImageURLError('Image URL is required');
      hasError = true;
    } else {
      setImageURLError('');
    }

    if (!hasError) onSubmitAdd(e);
  };

  const handleClose = () => {
    onClose();
    setTitleError('');
    setImageURLError('');
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      title="Create Lesson"
      maxWidth="sm"
    >
      <DialogContent>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Title"
                value={title}
                onChange={onTitleChange}
                className="customTextField"
                error={!!titleError}
                helperText={titleError}
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Image URL"
                value={imageURL}
                onChange={onImageURLChange}
                className="customTextField"
                error={!!imageURLError}
                helperText={imageURLError}
              />
            </Grid>
          </Grid>
          <StyledDialogActions>
            <StyledButton onClick={handleClose} className="secondButton">
              Cancel
            </StyledButton>
            <StyledButton type="submit" className="mainButton">
              Add
            </StyledButton>
          </StyledDialogActions>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default DialogAddLesson;
