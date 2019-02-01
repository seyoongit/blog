import React, { Component } from 'react';
import { Grid, List, Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ArticlePreview from './ArticlePreview';
import './css/Masonry.css';

class Masonry extends Component {
    state = {
        activePage: 0
    }
    componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        const { changeQuery, searchResultsClear } = this.props.MasonryDispatch;
        changeQuery('');
        searchResultsClear();
    }
    filterByNth = nth => {
        return function (v, index) {
            return index % 3 === nth
        }
    }
    render() {
        const { activePage } = this.state;
        const { ArticlePreviewDispatch } = this.props
        let { results } = this.props.MasonryState;
        if (!results) results = [];
        const maxPage = Math.floor((results.length-1) / 20);

        let paginationItems = []
        for (let i = 0; i <= maxPage; i++) {
            paginationItems.push({
                name: String(i),
                active: activePage === i,
                onClick: () => this.setState({ activePage: i }),
                key: i 
            })
        }
        const slicedResults = results.slice(20*activePage, 20*(activePage+1));
        return (
            <Grid className='Masonry' centered>
                {/*PC*/}
                <Grid.Row only='computer' columns={4}>
                    <Grid.Column>
                        {slicedResults.filter(this.filterByNth(0)).map(post =>
                            <ArticlePreview post={post} ArticlePreviewDispatch={ArticlePreviewDispatch} key={post.postId} />
                        )}
                    </Grid.Column>
                    <Grid.Column>
                        {slicedResults.filter(this.filterByNth(1)).map(post =>
                            <ArticlePreview post={post} ArticlePreviewDispatch={ArticlePreviewDispatch} key={post.postId} />
                        )}
                    </Grid.Column>
                    <Grid.Column>
                        {slicedResults.filter(this.filterByNth(2)).map(post =>
                            <ArticlePreview post={post} ArticlePreviewDispatch={ArticlePreviewDispatch} key={post.postId} />
                        )}
                    </Grid.Column>
                </Grid.Row>
                {/*tablet*/}
                <Grid.Row only='tablet' columns={15}>
                    <Grid.Column width={5}>
                        {slicedResults.filter(this.filterByNth(0)).map(post =>
                            <ArticlePreview post={post} ArticlePreviewDispatch={ArticlePreviewDispatch} key={post.postId} />
                        )}
                    </Grid.Column>
                    <Grid.Column width={5}>
                        {slicedResults.filter(this.filterByNth(1)).map(post =>
                            <ArticlePreview post={post} ArticlePreviewDispatch={ArticlePreviewDispatch} key={post.postId} />
                        )}
                    </Grid.Column>
                    <Grid.Column width={5}>
                        {slicedResults.filter(this.filterByNth(2)).map(post =>
                            <ArticlePreview post={post} ArticlePreviewDispatch={ArticlePreviewDispatch} key={post.postId} />
                        )}
                    </Grid.Column>
                </Grid.Row>
                {/*mobile*/}
                <Grid.Row only='mobile' columns={1}>
                    <Grid.Column>
                        <List divided relaxed>
                            {slicedResults.map((item, index) =>
                                <List.Item key={index}>
                                    <List.Icon
                                    color={`${index % 2 === 0 ? "blue" : 'orange'}`}
                                    name='caret right'
                                    size='large'
                                    verticalAlign='middle' />

                                    <List.Content>
                                        <Link to={`/${item.postId}`} >
                                            <List.Header content={item.title} />
                                            <List.Description content={item.date} />
                                        </Link>
                                    </List.Content>
                                </List.Item>
                            )}
                        </List>
                    </Grid.Column>
                </Grid.Row>
                <Menu pagination items={paginationItems} />

            </Grid>
        )
    }
};

export default Masonry