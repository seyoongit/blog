import React, { Component } from 'react';
import { connect } from 'react-redux';
import PostHeader from './PostHeader';

class PostHeaderWrap extends Component {
    render() {
        const { PostHeaderState, location } = this.props;
        PostHeaderState.location = location

        return (
            <PostHeader PostHeaderState={PostHeaderState} />
        )
    }
};
const mapStateToProps = ({ post, search, }) => ({
    PostHeaderState: {
        post,
        query: search.query,
    }
});

export default connect(mapStateToProps)(PostHeaderWrap)