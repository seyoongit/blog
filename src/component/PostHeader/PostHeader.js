import React, { Component } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import DateAndTag from './DateAndTag';
import './css/PostHeader.css';

class PostHeader extends Component {
    render() {
        const { post, query, location } = this.props.PostHeaderState;
        let { title, date, category } = post;
        const { pathname } = location;
        const paths = pathname.split('/') // pathname.split("/"): http://{path0 = domain}/{path1}/{path2}/{path3} <-
        
        if (["search", "category"].includes(paths[1])) {
            title = paths[2];
        }
        else if (paths[1] === 'PageNotFound') {
            title = '↓↓↓↓ Scroll down plz ↓↓↓';
        }
        //In case that PostHeader render empty space
        title = title === "" ? "이글이 보인다면 스크롤을 움직여보세요" : title;
        
        return ( 
            <header style={{height: window.outerHeight}}>
                <Grid className='PostHeader' verticalAlign='bottom' centered >
                    <Grid.Row only='computer'>
                        <Grid.Column width={12}> 
                            <Header id='computerTablet' as='h1' content={title} subheader={query && "에 해당하는 글들"} />
                            {!query && <DateAndTag category={category} date={date} />}
                        </Grid.Column>
                    </Grid.Row>

                    {/*tablet*/}
                    <Grid.Row only='tablet'>
                        <Grid.Column width={12}>
                            <Header id='computerTablet' as='h1' content={title} subheader={query && "에 해당하는 글들"} />
                            {!query && <DateAndTag category={category} date={date} />}
                        </Grid.Column>
                    </Grid.Row>

                    {/*mobile*/}
                    <Grid.Row only='mobile'>
                        <Grid.Column width={16}>
                            <Header id='mobile' as='h1' content={title} subheader={query && "에 해당하는 글들"} />
                            {!query && <DateAndTag category={category} date={date} />}
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </header>
        )
    }
};

export default PostHeader