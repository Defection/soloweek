import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Header from './components/Header.jsx';
import About from './components/About.jsx';
import Resume from './components/Resume.jsx';
import Portfolio from './components/Portfolio.jsx';
import Testimonials from './components/Testimonials.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Auth0Lock from 'auth0-lock'
import ReactModal from 'react-modal'
import Chat from "./components/Chat.jsx";
import axios from 'axios';
import data from "../js/resumeData.json"


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      foo: 'bar',
      resumeData:{}
    }
    this.getResumeData = this.getResumeData.bind(this)
    this.showLock = this.showLock.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }

  componentDidMount(){
    this.getResumeData();
    this.showLock()
  }

  componentWillMount(){
    this.lock = new Auth0Lock('7tyKiZ60tr89LriUyIv163BdAnsPbg1k','hr-solo-week.auth0.com');

    this.lock.on('authenticated', (authResult)=>{
      console.log(authResult)
    })
     console.log(this.state.resumeData)
  }

  showLock(){
    this.lock.show()
  }

  getResumeData(){
    // const port = process.env.PORT || 8080
    // $.ajax({
    //   url:`http://localhost:${port}/resumeData.json`,
    //   dataType:'json',
    //   cache: false,
    //   success: function(data){
    //     this.setState({resumeData: data});
    //   }.bind(this),
    //   error: function(xhr, status, err){
    //     console.log(err);
    //     alert(err);
    //   }
    // });

    this.setState({resumeData: data})

  }

  sendEmail(emailData){

    axios.post('/email', emailData)

  }
  render() {
    console.log(this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} sendEmail={this.sendEmail}/>
        <Footer />
        <Chat/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));