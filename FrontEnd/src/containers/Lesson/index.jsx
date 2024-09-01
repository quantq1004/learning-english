import React, { useState, useEffect } from 'react';
import { useSnackbar } from 'notistack';
import { Grid, CssBaseline } from '@mui/material';
import {
  getLessons,
  createLesson,
  updateLesson,
  deleteLesson,
} from '../../apis/lesson';
import { removeToken } from '../../utils/localStorage';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Welcome from '../../components/Welcome';
import LessonItem from './LessonItem';
import AddLessonDialog from './AddLessonDialog';
import EditLessonDialog from './EditLessonDialog';
import DeleteLessonDialog from './DeleteLessonDialog';
import { StyledContainer } from './index.style';

const LessonContainer = () => {
  const [lessons, setLessons] = useState([]);
  const [title, setTitle] = useState('');
  const [imageURL, setImageURL] = useState('');
  const [openCreate, setOpenCreate] = useState(false);
  const [editTitle, setEditTitle] = useState('');
  const [editImageURL, setEditImageURL] = useState('');
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState(null);

  const { enqueueSnackbar } = useSnackbar();

  const fetchLessons = async () => {
    const { result } = await getLessons();
    const lessonsArray = result.lessons;
    setLessons(lessonsArray);
  };

  const handleLogout = () => removeToken();

  const handleOpenCreate = () => setOpenCreate(true);

  const handleCloseCreate = () => setOpenCreate(false);

  const handleAddLesson = () => handleOpenCreate();

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!title && !imageURL) {
      handleCloseCreate();
      return;
    }
    const response = await createLesson(title, imageURL);
    if (response.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    setTitle('');
    setImageURL('');
    fetchLessons();
    handleCloseCreate();
  };

  const handleOpenEdit = () => setOpenEdit(true);

  const handleCloseEdit = () => setOpenEdit(false);

  const handleEditLesson = (lesson) => {
    setSelectedLesson(lesson);
    setEditTitle(lesson.title);
    setEditImageURL(lesson.imageUrl);
    handleOpenEdit();
  };

  const handleEdit = async (e) => {
    e.preventDefault();
    if (!editTitle && !editImageURL) {
      handleCloseEdit();
      return;
    }
    const response = await updateLesson(
      selectedLesson.id,
      editTitle,
      editImageURL,
    );
    if (response.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    setEditTitle('');
    setEditImageURL('');
    fetchLessons();
    handleCloseEdit();
  };

  const handleOpenDelete = (lesson) => {
    setSelectedLesson(lesson);
    setOpenDelete(true);
  };

  const handleCloseDelete = () => {
    setSelectedLesson(null);
    setOpenDelete(false);
  };

  const handleDelete = async () => {
    const response = await deleteLesson(selectedLesson.id);
    if (response.status === 0) {
      enqueueSnackbar(response.message, { variant: 'error' });
    }
    fetchLessons();
    handleCloseDelete();
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <>
      <CssBaseline />
      <Header onLogout={handleLogout} />
      <Welcome onAddLesson={handleAddLesson} />
      <StyledContainer>
        <Grid container spacing={4}>
          {lessons.map((lesson) => (
            <LessonItem
              key={lesson.id}
              lesson={lesson}
              onEditLesson={handleEditLesson}
              onDeleteLesson={handleOpenDelete}
            />
          ))}
        </Grid>
      </StyledContainer>
      <Footer />
      <>
        <AddLessonDialog
          open={openCreate}
          onClose={handleCloseCreate}
          title={title}
          imageURL={imageURL}
          onTitleChange={(e) => setTitle(e.target.value)}
          onImageURLChange={(e) => setImageURL(e.target.value)}
          onSubmitAdd={handleCreate}
        />
        <EditLessonDialog
          open={openEdit}
          onClose={handleCloseEdit}
          title={editTitle}
          imageURL={editImageURL}
          onTitleChange={(e) => setEditTitle(e.target.value)}
          onImageURLChange={(e) => setEditImageURL(e.target.value)}
          onSubmitEdit={handleEdit}
        />
        <DeleteLessonDialog
          open={openDelete}
          onClose={handleCloseDelete}
          selectedItem={selectedLesson}
          onDelete={handleDelete}
        />
      </>
    </>
  );
};

export default LessonContainer;
