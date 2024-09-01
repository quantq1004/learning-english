import React, { useContext } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../checkAdminContext';
import {
  StyledCard,
  StyledButton,
  StyledCardActions,
  StyledTypography,
  StyledCardMedia,
  StyledCardContent,
} from './index.style';

const LessonItem = ({ lesson, onEditLesson, onDeleteLesson }) => {
  const isAdmin = useContext(AuthContext);
  const navigate = useNavigate();
  const handleViewLesson = () => navigate(`/${lesson.id}`);

  return (
    <Grid item xs={12} sm={6} md={4}>
      <StyledCard>
        <StyledCardMedia image={lesson.imageUrl} onClick={handleViewLesson} />
        <StyledCardContent>
          <StyledTypography className="itemTitle" onClick={handleViewLesson}>
            {lesson.title}
          </StyledTypography>
          <StyledTypography className="itemDesc">
            This is a beginner&apos;s English lesson about {lesson.title}.
          </StyledTypography>
          <hr />
        </StyledCardContent>
        <StyledCardActions>
          {!isAdmin && (
            <StyledButton className="ViewBtn" onClick={handleViewLesson}>
              View
            </StyledButton>
          )}
          {isAdmin && (
            <>
              <StyledButton onClick={handleViewLesson}>View</StyledButton>
              <StyledButton onClick={() => onEditLesson(lesson)}>
                Edit
              </StyledButton>
              <StyledButton onClick={() => onDeleteLesson(lesson)}>
                Delete
              </StyledButton>
            </>
          )}
        </StyledCardActions>
      </StyledCard>
    </Grid>
  );
};

export default LessonItem;
