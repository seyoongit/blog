import React from 'react';
import './Footer.css';

const FooterWrap = () => {
    const url = 'kimrangdori@naver.com'
    return (
        <footer className='Footer'>
            <h3>
            ⓒ CopyRight <a href={url}>{url}</a> All Rights Reserved.
            </h3>
        </footer>
    )
};

export default FooterWrap