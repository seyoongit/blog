import React from 'react';
import { Link } from 'react-router-dom';

const ResultRenderer = ({title="", date, postId}) => {
    return (
        <Link to={`/${postId}`} onClick={() => window.scrollTo(0,0)}>
            <div className='ResultRenderer'>
                <pre id='title'>
                    {title}  <span id='date'>{date}</span> <span id='hidden'>Click!</span>
                </pre> 
            </div>
        </Link>
    );
};

export default ResultRenderer;