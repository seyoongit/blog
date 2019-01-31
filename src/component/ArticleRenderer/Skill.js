import React from 'react';
import { Popup, Image, Feed } from 'semantic-ui-react';

const Skill = ({ src, content, gray, mobile=false }) => {
    if (mobile) {
        return (
            <Feed>
                <Feed.Event image={src} content={content + "\n " + gray} />
            </Feed>
        )
    }

    return (
        <Popup
        trigger={<Image size="small" src={src} circular bordered />}  wide="very">
            <span>{content}</span>
            <span style={{color: "gray"}}>{gray}</span>
        </Popup>
    )
};

export default Skill