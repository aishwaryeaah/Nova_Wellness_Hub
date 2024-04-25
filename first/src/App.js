import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom'; // Import useParams
import PageHeader from './NavComponents/PageHeader';
import Dashboard from './NavComponents/Dashboard';
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
import MainPage from './LearnComponents/pages/MainPage.js';
import ArticleList from './LearnComponents/components/ArticleList';
import Article from './LearnComponents/components/Article.js';
import GAD7 from './QuizComponents/GAD7.js';
import InsomniaSeverityIndex from './QuizComponents/Insomnia.js';
import MDQ from './QuizComponents/MDQ.js';
import articles from './LearnComponents/data/articles'; // Import articles data
import HelpPage from './CommunityComponents/src/scenes/navbar/HelpPage/HelpPage.js';

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
        <div style={{ backgroundColor: '#FAF1DA' }}>
          <PageHeader />
          <div>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/learn" element={<MainPage />} />
              <Route
                path="/:domain"
                element={<DomainPage />}
              />
              <Route
                path="/:domain/:articleId"
                element={<ArticlePage />}
              />
              <Route path="/about" element={<AboutApp />} />
              <Route path="/quiz" element={<QuizDash />} />
              <Route path="/phq9" element={<PHQ9 />} />
              <Route path="/gad7" element={<GAD7 />} />
              <Route path="/isi" element={<InsomniaSeverityIndex />} />
              <Route path="/mdq" element={<MDQ />} />
              <Route path="/login" element={<LoginPage />} />
              <Route
                path="/home"
                element={isAuth ? <HomePage /> : <Navigate to="/login" />}
              />
              <Route
                path="/profile/:userId"
                element={isAuth ? <ProfilePage /> : <Navigate to="/login" />}
              />
              <Route path="/help-page" element={<HelpPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

const DomainPage = () => {
  const { domain } = useParams();
  const domainArticles = articles[domain];

  return <ArticleList domain={domain} articles={domainArticles} />;
};

const ArticlePage = () => {
  const { domain, articleId } = useParams();

  return <Article domain={domain} articleId={articleId} />;
};

export default App;
