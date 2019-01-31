import React from 'react';
import { Dimmer } from 'semantic-ui-react';
import Searcher from './Searcher';
import LoginForm from './LoginForm';
import './css/PageDimmer.css';

const PageDimmer = ({ PageDimmerState, PageDimmerDispatch, SearcherState, SearcherDispatch, SubmitState, SubmitDispatch, LoginFormState, LoginFormDispatch }) => {
    const { dimmer } = PageDimmerState;
    const { onClickOutside } = PageDimmerDispatch;
    const { mode, message } = dimmer;
    const dimmerActive =  mode !== "" || message !== ""

    return (
        <Dimmer
        className='PageDimmer'
        active={dimmerActive} 
        onClickOutside={onClickOutside} 
        page>
            {mode==="search" &&
                <Searcher
                SearcherState={SearcherState}
                SearcherDispatch={SearcherDispatch}
                SubmitState={SubmitState}
                SubmitDispatch={SubmitDispatch} />
            }
            {mode==="login" &&
                <LoginForm LoginFormState={LoginFormState} LoginFormDispatch={LoginFormDispatch} />
            }
            {message !== "" && message }
        </Dimmer>
    )
};

export default PageDimmer