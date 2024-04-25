import React from 'react';
import articles from '../data/articles';
import './article.css'; // Import the CSS file for styling

const Article = ({ domain, articleId }) => {
  const article = articles[domain].find((article) => article.id.toString() === articleId);

  if (!article) return <div className="article-container">Article not found</div>;

  return (
    <div className="article-container">
      <h2 className="article-title">{article.title}</h2>
      <img className="article-image" src={process.env.PUBLIC_URL + article.image} alt={article.title} />
      <div className="article-content" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default Article;
