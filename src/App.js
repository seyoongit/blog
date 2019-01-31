import React, { Component } from 'react';
import { TopNav, SearchAndToggler, PostHeader, PostContent, SideNav, PageDimmer, Masonry, NotFound, Footer } from './component/';
import { Route, Switch } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

class App extends Component {
  render() {
    return (
      <div>
        <TopNav />
        <SearchAndToggler />
        <PageDimmer />

        <SideNav>
          <Route path='/' component={PostHeader} />
          <Switch>
            <Route path='/search/:query' component={Masonry} />
            <Route path='/category/:query' component={Masonry} />
            <Route path='/PageNotFound' exact component={NotFound} />
            <Route path='/:postId' component={PostContent} />
            <Route path='/' exact component={PostContent} />
          </Switch>
          <Footer />
        </SideNav>
      </div>
    )
  }
};

export default App
