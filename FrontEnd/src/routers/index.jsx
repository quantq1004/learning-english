import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import LoginPage from '../pages/Login';
import RegisterPage from '../pages/Register';
import LessonPage from '../pages/Lesson';
import LessonDetailPage from '../pages/LessonDetail';
import AccountPage from '../pages/Account';
import { getToken } from '../utils/localStorage';

const AppRouter = () => {
  const token = getToken();

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={!token ? <Navigate to="/login" /> : <LessonPage />}
        />
        <Route
          path="/login"
          element={token ? <Navigate to="/" /> : <LoginPage />}
        />
        <Route
          path="/register"
          element={token ? <Navigate to="/" /> : <RegisterPage />}
        />
        <Route
          path="/:lessonId"
          element={!token ? <Navigate to="/login" /> : <LessonDetailPage />}
        />
        <Route
          path="/account"
          element={!token ? <Navigate to="/login" /> : <AccountPage />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
