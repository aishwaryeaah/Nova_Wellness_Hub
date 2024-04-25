// ArticlePage.js
import React from 'react';
import { useParams } from 'react-router-dom';
import ArticleList from '../components/ArticleList';
import Article from '../components/Article';
import articles from '../data/articles';

const ArticlePage = () => {
  const { domain, articleId } = useParams();
  const domainArticles = articles[domain];

  if (articleId) {
    return <Article domain={domain} articleId={articleId} />;
  }

  return <ArticleList domain={domain} articles={domainArticles} />;
}

export default ArticlePage;
