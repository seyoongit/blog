import React, { Component} from 'react';
import { connect } from 'react-redux';
import PostContent from './PostContent';
import { postFetchRequest } from '../../actions'

class PostContentWrap extends Component {
    render() {
        const {
            PostContentState,
            PostContentDispatch, 
            PrevNextState, 
            PrevNextDispatch, 
            ArticleRendererDispatch,
            history,
        } = this.props;
        PostContentState.history = history;

        return (  
            <PostContent 
            PostContentState={PostContentState}
            PostContentDispatch={PostContentDispatch}
            PrevNextDispatch={PrevNextDispatch}
            PrevNextState={PrevNextState} 
            ArticleRendererDispatch={ArticleRendererDispatch} />
        )
    }
};
const mapStateToProps = ({ post }) => ({
    PostContentState: {
        post
    },
    PrevNextState: {
        postId: post.postId,
    },
});
const mapDispatchToProps = dispatch => ({
    PostContentDispatch: {
        postFetchRequest: postId => {
            dispatch(postFetchRequest(postId))
        },
    },
    PrevNextDispatch: {
        postFetchRequest: postId => {
            dispatch(postFetchRequest(postId))
        },
    },
    ArticleRendererDispatch: {
        postFetchRequest: postId => {
            dispatch(postFetchRequest(postId))
        },
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContentWrap)