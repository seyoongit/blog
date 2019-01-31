import React from 'react';
import { List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const DateAndTag = ({date, category}) => {
    return (
        <List className='DateAndTag' horizontal size='large'>
            <List.Item icon='calendar' content={date}/>
            <List.Item icon='tag' content={ <Link to={`/category/${category}`}>{category}</Link> }/>
        </List>
    );
};

export default DateAndTag;