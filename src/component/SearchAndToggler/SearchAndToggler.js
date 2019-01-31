import React from 'react';
import { Grid, Menu } from 'semantic-ui-react';
import classNames from 'classnames';
import Search from './Search';
import Toggler from './Toggler';
import './css/SearchAndToggler.css';

const SearchAndToggler = ({ SearchAndTogglerState, TogglerState, TogglerDispatch, SearchState, SearchDispatch }) => {
    const { isSideNavOpen } = SearchAndTogglerState;

    return (
        <Grid className={classNames('SearchAndToggler', isSideNavOpen && 'displayNone')} as={Menu} fixed='top' >

            <Grid.Row only='computer' id='computer' centered>
                <Grid.Column width={15}>
                    <Search SearchDispatch={SearchDispatch} SearchState={SearchState} />
                    <Toggler TogglerDispatch={TogglerDispatch} TogglerState={TogglerState} />
                </Grid.Column>
            </Grid.Row>

            {/*tablet*/}
            <Grid.Row only='tablet' id='tablet' centered>
                <Grid.Column width={15}>
                    <Search SearchDispatch={SearchDispatch} SearchState={SearchState} />
                    <Toggler TogglerDispatch={TogglerDispatch} TogglerState={TogglerState} />
                </Grid.Column>
            </Grid.Row>
                   
            {/*mobile*/}
            <Grid.Row only='mobile' id='mobile' centered>
                <Grid.Column width={16}>
                    <Search SearchDispatch={SearchDispatch} SearchState={SearchState} mobile/>
                    <Toggler TogglerDispatch={TogglerDispatch} TogglerState={TogglerState} mobile/>
                </Grid.Column>
            </Grid.Row>
            
        </Grid>
    )
};

export default SearchAndToggler