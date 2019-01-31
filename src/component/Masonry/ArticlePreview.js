import React from 'react';
import { Card } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const ArticlePreview = ({ post, ArticlePreviewDispatch }) => {
    const { postFetchRequest } = ArticlePreviewDispatch
    const { titleImage, title, summary, date, postId } = post
    return (
        <Link to={`/${postId}`} onClick={() => postFetchRequest(postId)}>
            <Card
            className='ArticlePrview'
            image={titleImage}
            header={title}
            description={summary}
            extra={ <p style={{color: "#2185d0"}}>{date}</p> }  />
        </Link>
    )
};

export default ArticlePreview