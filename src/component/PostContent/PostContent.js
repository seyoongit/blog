import React, { Component } from 'react';
import { Grid } from 'semantic-ui-react';
import PrevNext from './PrevNext';
import ArticleRenderer from '../ArticleRenderer/ArticleRenderer';
import './css/PostContent.css';

class PostContent extends Component {
    componentDidMount() {
        window.scrollTo(0,0);
    }
    render() {
        const { post } = this.props.PostContentState;
        const { PrevNextState, PrevNextDispatch, ArticleRendererDispatch } = this.props;
        
        return (
            <Grid columns='equal' className='PostContent' padded='horizontally' centered >

                {/*PC*/}
                <Grid.Row only='computer'>
                    <Grid.Column width={10}>
                        <section>
                            <ArticleRenderer post={post} ArticleRendererDispatch={ArticleRendererDispatch} />
                        </section>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row only='computer' centered>
                    <Grid.Column width={14}>
                        <PrevNext PrevNextState={PrevNextState} PrevNextDispatch={PrevNextDispatch} />
                    </Grid.Column>
                </Grid.Row>

                {/*tablet */}
                <Grid.Row only='tablet'>
                    <Grid.Column>
                        <section>
                            <ArticleRenderer post={post} ArticleRendererDispatch={ArticleRendererDispatch} />
                        </section>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row only='tablet' centered>
                    <Grid.Column width={14}>
                        <PrevNext PrevNextState={PrevNextState} PrevNextDispatch={PrevNextDispatch} tablet />
                    </Grid.Column>
                </Grid.Row>

                {/*mobile*/}
                <Grid.Row only='mobile' style={{padding: 0}}>
                    <Grid.Column id='mobile' style={{padding: 0}}>
                        <section>
                            <ArticleRenderer post={post} ArticleRendererDispatch={ArticleRendererDispatch} mobile />
                        </section>
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row only='mobile' centered>
                    <Grid.Column width={16}>
                        <PrevNext PrevNextState={PrevNextState} PrevNextDispatch={PrevNextDispatch} mobile />
                    </Grid.Column>
                </Grid.Row>
            </Grid >
        )
    }
};

export default PostContent