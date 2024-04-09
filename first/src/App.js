import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PageHeader from './NavComponents/PageHeader';
import Dashboard from './NavComponents/Dashboard';
import Learn from './LearnComponents/Learn';
import QuizDash from './QuizComponents/QuizDash';
import AboutApp from './AboutComponents/AboutApp';
import PHQ9 from './QuizComponents/PHQ9';
import LoginPage from './CommunityComponents/src/scenes/loginPage';
import HomePage from './CommunityComponents/src/scenes/homePage';
import ProfilePage from './CommunityComponents/src/scenes/profilePage';
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";

function App() {
  const mode = useSelector((state) => state.mode);
  const token = useSelector((state) => state.token);
  const theme = useMemo(() => {
    if (!mode) {
      console.error("Mode is undefined in Redux state.");
      // Return a fallback theme
      return createTheme();
    }
    const generatedTheme = themeSettings(mode);
    if (!generatedTheme) {
      console.error("Failed to generate theme for mode:", mode);
      // Return a fallback theme
      return createTheme();
    }
    return createTheme(generatedTheme);
  }, [mode]);

  const isAuth = Boolean(token);

  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <div>
          <PageHeader />
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<AboutApp />} />
              <Route path="/learn" element={<Learn />} />
              <Route path="/quiz" element={<QuizDash />} />
              <Route path="/phq9" element={<PHQ9 />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/home"
                element={isAuth ? <HomePage /> : <Navigate to="/login" />}
              />
              <Route
                path="/profile/:userId"
                element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
              />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
