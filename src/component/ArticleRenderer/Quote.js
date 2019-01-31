import React from 'react';
import { Container, Grid, Segment, Icon } from 'semantic-ui-react';

const Quote = ({color='orange', content='', mobile=false }) => {
    const width = mobile ? 12 : 14;
    const size = mobile ? 'small' : 'big';

    return (
        <Container
        as={Grid} 
        className='Quote' 
        columns='equal'
        verticalAlign='middle'>

            <Grid.Column>
                <Icon name='quote left' size={size} color={color} />
            </Grid.Column>

            <Grid.Column width={width}>
                <Segment
                id='content' 
                textAlign='center' 
                basic>
                    {content}
                </Segment>  
            </Grid.Column>

            <Grid.Column textAlign='right'>
                <Icon name='quote right' size={size} color={color} />
            </Grid.Column>  

        </Container>
    )
};

export default Quote