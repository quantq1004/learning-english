import React, { useState } from 'react';
import { useSnackbar } from 'notistack';
import { DialogContent, Grid } from '@mui/material';
import {
  StyledAddDialog,
  StyledTitleDialog,
  StyledDialogActions,
  StyledButton1,
  StyledTextField,
} from './index.style';
import { createCard } from '../../apis/card';

const DialogAddCard = ({ open, onClose, lessonId, fetchCards }) => {
  const [name, setName] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [desc, setDesc] = useState('');

  const { enqueueSnackbar } = useSnackbar();

  const handleNameChange = (e) => setName(e.target.value);

  const handleImageURLChange = (e) => setImageURL(e.target.value);

  const handleDescChange = (e) => setDesc(e.target.value);

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!name && !imageURL && !desc) {
      onClose();
      return;
    }
    const response = await createCard({ name, imageURL, desc, lessonId });
    if (response.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    setName('');
    setImageURL('');
    setDesc('');
    fetchCards(lessonId);
    onClose();
  };

  return (
    <StyledAddDialog open={open} onClose={onClose}>
      <StyledTitleDialog className="title">Add Card</StyledTitleDialog>
      <DialogContent>
        <form onSubmit={handleCreate}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Name"
                value={name}
                onChange={handleNameChange}
                className="customTextField"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Image URL"
                value={imageURL}
                onChange={handleImageURLChange}
                className="customTextField"
              />
            </Grid>
            <Grid item xs={12}>
              <StyledTextField
                type="text"
                placeholder="Description"
                value={desc}
                onChange={handleDescChange}
                className="customTextField"
              />
            </Grid>
          </Grid>
          <StyledDialogActions>
            <StyledButton1 onClick={onClose}>Cancel</StyledButton1>
            <StyledButton1 type="submit" className="containedButton">
              Add
            </StyledButton1>
          </StyledDialogActions>
        </form>
      </DialogContent>
    </StyledAddDialog>
  );
};
export default DialogAddCard;
