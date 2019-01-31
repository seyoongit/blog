import React from 'react';
import { Container, Menu, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const PrevNext = ({ PrevNextState, PrevNextDispatch, mobile, tablet }) => {
    const { postId } = PrevNextState;
    const { postFetchRequest } = PrevNextDispatch;
    const size = (tablet && 'small') || (mobile && 'mini') || 'massive';
    return (
        <Container as={Menu} secondary>
            <Menu.Item>
                <Button
                as={Link}
                to={postId===1 ? "/" : `/${postId-1}`}
                onClick={() => { postFetchRequest(postId-1); window.scrollTo(0,0); }}
                disabled={postId <= 0}
                size={size}
                color='blue'
                content='Prev'
                icon='chevron left'
                label={{basic: true, color: 'blue', pointing: 'left', content: mobile ? "" : "이전 포스트" }} />
            </Menu.Item>
            <Menu.Item position='right'>
                <Button
                as={Link}
                to={`/${postId+1}`}
                onClick={() => { postFetchRequest(postId+1); window.scrollTo(0,0); }}
                size={size}
                color='orange'
                content='　Next'
                icon='chevron right'
                labelPosition='left'
                label={{basic: true, color: 'orange', pointing: 'right', content: mobile ? "" : "다음 포스트" }} />
            </Menu.Item>
        </Container>
    )
};

export default PrevNext