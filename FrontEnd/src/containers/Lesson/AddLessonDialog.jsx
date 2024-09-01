import React from 'react';
import { DialogContent, Grid } from '@mui/material';
import {
  StyledDialog,
  StyledTitleDialog,
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
}) => (
  <StyledDialog open={open} onClose={onClose}>
    <StyledTitleDialog className="title">Create Lesson</StyledTitleDialog>
    <DialogContent>
      <form onSubmit={onSubmitAdd}>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12}>
            <StyledTextField
              type="text"
              placeholder="Title"
              value={title}
              onChange={onTitleChange}
              className="customTextField"
            />
          </Grid>
          <Grid item xs={12}>
            <StyledTextField
              type="text"
              placeholder="Image URL"
              value={imageURL}
              onChange={onImageURLChange}
              className="customTextField"
            />
          </Grid>
        </Grid>
        <StyledDialogActions>
          <StyledButton onClick={onClose} className="customButton">
            Cancel
          </StyledButton>
          <StyledButton type="submit" className="containedButton">
            Add
          </StyledButton>
        </StyledDialogActions>
      </form>
    </DialogContent>
  </StyledDialog>
);

export default DialogAddLesson;
