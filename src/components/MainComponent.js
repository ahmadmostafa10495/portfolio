import React, { Component } from 'react';
// import Home from './HomeComponent';
// import Menu from './MenuComponent';
// import Contact from './ContactComponent';
// import About from './AboutComponent';
// import DishDetail from './DishdetailComponent';
// import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



class Main extends Component {


  render() {




    return (
      <div>

        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" />
              <Route path='/menu/:dishId'  />
              <Route exact path='/aboutus'  />
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>

      </div>

      );
  }
}

export default withRouter((Main));
