import React, { Component } from 'react';
import Home from './HomeComponent';

// import DishDetail from './DishdetailComponent';
import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
          {name:"p0",
           img:"./AhmedMoustafa.jpg",
           id: 0},
          {name:"p1",
           img:"./AhmedMoustafa.jpg",
           id: 1},
          {name:"p2",
           img:"./AhmedMoustafa.jpg",
           id: 2},
          {name:"p3",
           img:"./AhmedMoustafa.jpg",
           id: 3}]
    };
  }

  render() {
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component = {() => <Home projects={this.state.projects}/>} />
              <Route path='/projects/:projectId' />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

      </div>

      );
  }
}

export default withRouter((Main));
