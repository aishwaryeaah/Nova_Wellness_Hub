import React from 'react';
import { Link } from 'react-router-dom';
import './ArticleList.css'; // Import your CSS file for component-specific styles

const ArticleList = ({ domain, articles }) => {
  return (
    <div className="article-list-container">
      {articles.map(article => (
        <Link to={`/${domain}/${article.id}`} className="article-link" key={article.id}>
          <div className="article-box" style={{ backgroundColor: "#F6C2B3" }}>
            <img src={process.env.PUBLIC_URL + article.image} alt={article.title} style={{ width: '100%', height: '50%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }} />
            <h3>{article.title}</h3>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticleList;
