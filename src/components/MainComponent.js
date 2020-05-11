import React, { Component } from 'react';
import Home from './HomeComponent';

import DetailedProject from './DetailedProjectComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';



class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      projects: [
          {name:"Confusion",
           img:"./s2out.png",
           id: 0,
           link:"https://ahmadmostafa10495.github.io/Confusion",
           images:[{
                    src: '../s21.png',
                    altText: '',
                    caption: '',
                    header: '',
                    key: '1',
                    id: 1
                  },
                  {
                    src: '../s22.png',
                    altText: '',
                    caption: '',
                    header: '',
                    key: '2',
                    id: 2
                  },
                  {
                    src: '../s23.png',
                    altText: '',
                    caption: '',
                    header: '',
                    key: '3',
                    id: 3
                  }
                ]},
          {name:"Background Color Generator",
           img:"./s3out.png",
           id: 1,
           link:"https://ahmadmostafa10495.github.io/Background.Generator.io/",
           images:[{
                  src: '../s31.png',
                  altText: '',
                  caption: '',
                  header: '',
                  key: '1'
                },
                {
                  src: '../s32.png',
                  altText: '',
                  caption: '',
                  header: '',
                  key: '2'
                }
              ]},
          {name:"Confusion",
           img:"./s1out.png",
           id: 2,
           link:"https://ahmadmostafa10495.github.io/Confusion-bootstrap/",
           images:[{
                src: '../s11.png',
                altText: '',
                caption: '',
                header: '',
                key: '1'
              },
              {
                src: '../s12.png',
                altText: '',
                caption: '',
                header: '',
                key: '2'
              },
              {
                src: '../s13.png',
                altText: '',
                caption: '',
                header: '',
                key: '3'
              }
            ]},
          {name:"p3",
           img:"./AhmedMoustafa.jpg",
           id: 3,
           link:"",
           images:[{
              src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa1d%20text%20%7B%20fill%3A%23555%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa1d%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22285.921875%22%20y%3D%22218.3%22%3EFirst%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
              altText: 'Slide 1',
              caption: 'Slide 1',
              header: 'Slide 1 Header',
              key: '1'
            },
            {
              src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa20%20text%20%7B%20fill%3A%23444%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa20%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23666%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22247.3203125%22%20y%3D%22218.3%22%3ESecond%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
              altText: 'Slide 2',
              caption: 'Slide 2',
              header: 'Slide 2 Header',
              key: '2'
            },
            {
              src: 'data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22800%22%20height%3D%22400%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20400%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_15ba800aa21%20text%20%7B%20fill%3A%23333%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A40pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_15ba800aa21%22%3E%3Crect%20width%3D%22800%22%20height%3D%22400%22%20fill%3D%22%23555%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%22277%22%20y%3D%22218.3%22%3EThird%20slide%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E',
              altText: 'Slide 3',
              caption: 'Slide 3',
              header: 'Slide 3 Header',
              key: '3'
            }
          ]
}]
    };
  }


  render() {

    const ProjectwithId = ({match}) => {
      return(
        <DetailedProject project={this.state.projects.filter((project) => project.id === parseInt(match.params.projectId, 10))[0]} />
      );
    };
    return (
      <div>
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component = {() => <Home projects={this.state.projects}/>} />
              <Route path='/projects/:projectId' component={ProjectwithId}/>
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
        <Footer />
      </div>

      );
  }
}

export default withRouter((Main));
