import React, { useContext } from 'react';
import { StyledBox, StyledTypography, StyledButton } from './index.style';
import { AuthContext } from '../../checkAdminContext';

const Welcome = ({ onAddLesson }) => {
  const isAdmin = useContext(AuthContext);

  return (
    <StyledBox>
      <StyledTypography className="titleTypo">
        Welcome to the lessons!
      </StyledTypography>
      <StyledTypography className="customTypo">
        Please select a lesson to study.
      </StyledTypography>
      {isAdmin && (
        <StyledButton onClick={onAddLesson}>Create Lesson</StyledButton>
      )}
      <StyledTypography className="lessonTypo">LESSON LIST</StyledTypography>
    </StyledBox>
  );
};

export default Welcome;
