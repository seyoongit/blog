import React, { Component } from 'react';
import { Search, Container } from 'semantic-ui-react';
import ResultRenderer from './ResultRenderer';
import Submit from './Submit';

class Searcher extends Component {
    state = {
        value: '',
        keydownsWatingForTimeout : 0,
    }
    reset = () => {
        const { changeQuery } = this.props.SearcherDispatch;
        this.setState({
            value: '',
            keydownsWatingForTimeout : 0 
        });
        changeQuery('');
    }
    componentDidMount() {
        this.reset();
    }
    onResultSelect = (e, {result}) => {
        const { postFetchRequest } = this.props.SearcherDispatch;
        postFetchRequest(result.postId);
        this.props.SearcherDispatch.closeDimmer();
    }
    triggerRequest = () => {
        const { changeQuery, search } = this.props.SearcherDispatch;
        const { keydownsWatingForTimeout, value } = this.state;
        this.setState({ keydownsWatingForTimeout: keydownsWatingForTimeout-1 });

        if ((keydownsWatingForTimeout-1) === 0 && value.trim().length !== 0) {
            changeQuery(value);
            search("search", value);
        }
    }
    onSearchChange = (e, {value}) => { // 매개변수: (이벤트객체, 해당컴포넌트의 참조)
        this.setState({ value, keydownsWatingForTimeout: this.state.keydownsWatingForTimeout + 1 });
        setTimeout(this.triggerRequest, 700);
    }
    render() {
        const { results, isLoading } = this.props.SearcherState
        const { value } = this.state;
        const { SubmitState, SubmitDispatch } = this.props;
        const shouldSubmitDisabled = isLoading || value.trim() === '';

        return (
            <Container>
                <Submit
                disabled={shouldSubmitDisabled} 
                SubmitState={SubmitState} 
                SubmitDispatch={SubmitDispatch} />

                <Search
                loading={isLoading}
                onResultSelect={this.onResultSelect}
                onSearchChange={this.onSearchChange}
                results={results}
                value={value} 
                size='big' 
                resultRenderer={ResultRenderer}
                fluid
                open={value !== ''}
                showNoResults={false} />
            </Container>
        )
    }
};

export default Searcher