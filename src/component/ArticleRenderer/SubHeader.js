import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const SubHeader = ({content, icon, mobile=false}) => {
    const size = mobile ? 'medium' : 'huge'

    return (
        <Container className='SubHeader'>
            <Header as='h2' content={content} size={size} icon={icon} />
        </Container>
    )
};

export default SubHeader