import React, { Component} from 'react';
import { connect } from 'react-redux';
import PostContent from './PostContent';
import { postFetchRequest } from '../../actions'

class PostContentWrap extends Component {
    componentDidMount() {
        const { post, history, postFetchRequest } = this.props
        if (post.postId === -1) { // post.postId 의 초기값은 -1
            postFetchRequest(0);
            history.push("0");
        }
    }
    render() {
        const {
            PostContentState,
            PostContentDispatch, 
            PrevNextState, 
            PrevNextDispatch, 
            ArticleRendererDispatch,
        } = this.props;

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
    post: post,
    PostContentState: {
        post
    },
    PrevNextState: {
        postId: post.postId,
    },
});
const mapDispatchToProps = dispatch => ({
    postFetchRequest(postId) {
        dispatch(postFetchRequest(postId))
    },
    PrevNextDispatch: {
        postFetchRequest(postId) {
            dispatch(postFetchRequest(postId))
        },
    },
    ArticleRendererDispatch: {
        postFetchRequest(postId) {
            dispatch(postFetchRequest(postId))
        },
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PostContentWrap)