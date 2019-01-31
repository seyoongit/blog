import React from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

const Submit = ({ SubmitState, SubmitDispatch, disabled }) => {
    const { query } = SubmitState;
    const { onClick } = SubmitDispatch;

    return (
        <Link to={`/search/${query}`}>
            <Button
            disabled={disabled}
            size='huge'
            icon='search'
            circular
            inverted
            color='orange'
            onClick={onClick}
            content={`"${query}" 로 검색한 결과보기!`}/>
        </Link>
    )
};

export default Submit