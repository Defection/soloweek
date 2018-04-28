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



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      resumeData:{}
    }
    this.getResumeData = this.getResumeData.bind(this)
    this.showLock = this.showLock.bind(this)
    this.sendEmail = this.sendEmail.bind(this)
  }

  componentDidMount(){
    this.getResumeData();
    // this.showLock()
  }

  componentWillMount(){
    // this.lock = new Auth0Lock('7tyKiZ60tr89LriUyIv163BdAnsPbg1k','hr-solo-week.auth0.com');

    // this.lock.on('authenticated', (authResult)=>{
    //   console.log(authResult)
    // })
    //  console.log(this.state.resumeData)
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

    this.setState({resumeData: {
    "main": {
    "name":"Eric Shum",
    "occupation":"FullStack Web developer, with a focus on React and JavaScript.",
    "description":"Projects I have built contain serveral techonologies not limited to NodeJS, Express, MySQL, MongoDB, Angular, and Git.",
    "image":"profilepic.jpg",
    "bio":"I’m an ambitious, and autonomous person who has a profound love for solving problems and developing web applications as a full stack software engineer using JavaScript, ReactJS, NodeJS with Express, MySQL, and MongoDB. Before I got into coding, I worked years in the accounting field until I decided to take a leap of faith in changing industries. Within half a year, I've learned a great amount autonomously and much more from my days at Hack Reactor. If you would like to see some of my projects, please Download my resume or view my Github for more information. ",
    "email": "eshum89@gmail.com",
    "phone": "347-421-2740",
    "address":{
      "street":"33-19 145th Pl",
      "city":"New York",
      "state":"NY",
      "zip": "11354"
    },
    "website": "http://www.techguywebsolutions.com",
    "resumedownload":"http://something.com",
    "social":[
      {
        "name":"github",
        "url":"https://github.com/Defection",
        "className":"fa fa-github"
      },{
        "name":"linkedin",
        "url":"http://www.linkedin.com/in/eric-shum-82108833",
        "className":"fa fa-linkedin"
      },
      {
        "name":"facebook",
        "url":"http://www.facebook.com/eshum89",
        "className":"fa fa-facebook"
      },
      {
        "name":"instagram",
        "url":"http://instagram.com",
        "className":"fa fa-instagram"
      },
      {
        "name":"skype",
        "url":"http://skype.com",
        "className":"fa fa-skype"
      },
      {
        "name":"google-plus",
        "url":"https://plus.google.com/104395170395451918022",
        "className":"fa fa-google-plus"
      }
    ]
  },
  "resume":{
    "education":[
      {
        "school":"Hack Reactor",
        "degree":"Advanced Software Engineering Immersive Program  ",
        "graduated":"2018",
        // "description":"This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat"
      },
      {
        "school":"Queens College, City University of New York",
        "degree":"Bachelors in Accounting",
        "graduated":"2013",
        // "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
      },
      
    ],
    "projects":[
      {
        "company":"Carrier",
        "description": "A customizable email newsletter client with campaign managing and stats",
        "title":"Fullstack Software Engineer",
        "years":"2018",
        "description1":"● Implemented an email template client with Unlayer that allows users to design and se newsletters up to 100 recipients a day for free via Sendgrid’s API",
        "description2":"● Used React and Grommet.io to style the entire application for a faster and better user experience",
        "description3":"● Implemented email statistics tracking and unsubscribe with Node.JS",
        "description4":"● Used C3 to visualize email statistics data to the end user.",
      },
      {
        "company":"Kindly",
        "description": "A platform for users to donate unwanted goods and verified organizations to claim donations",
        "title":"Fullstack Software Engineer",
        "years":"2018",
        "description1":"● I​mplemented a two factor verification system to filter by tier of user",
        "description2":"● Constructed multi scope user interface with React, giving Users and Organizations different application functionality",
        "description3":"● Used NodeJS/MySQL to handle routing, storing of user information, and Elastic Emai for real time notification via email at no cost",
        "description4":"● Set up Google Maps Location and Marker functionality via React modules to pin all donation claim locations",
      },
      {
        "company":"My Portfolio Website(this)",
        "description": "A personal website that has my portfolio and resume info",
        "title":"Fullstack Software Engineer",
        "years":"2018",
        "description1":"● Showcased my portfolio, resume data, and a way to contact me with React",
        "description2":"● Implemented an email contact form using Axios/NodeJS/Express/ instead of the traditional mailto method or PHP",
        "description3":"● Implemented backup email storage by inserting submitted form data into MongoDB database",
        "description4":"● Supplemented the site with real-time Socket.io chat",
      },
    ],
    "skills":[
      {
        "name":"JavaScript",
        "level":"90%"
      },
      {
        "name":"React",
        "level":"85%"
      },
      {
        "name":"MySQL",
        "level":"80%"
      },
      {
        "name":"MongoDB",
        "level":"80%"
      },
      {
        "name":"NodeJs",
        "level":"85%"
      },
      {
        "name":"Git",
        "level":"80%"
      }
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"Kindly",
        "description":"A platform for users to donate unwanted goods and verified organizations to claim donations.",
        "category":"A platform for users to donate unwanted goods and verified organizations to claim donations.",
        "tags":"YouTube",
        "image":"kindly2.png",
        "url":"https://kindly-jonson.herokuapp.com/"
      },
      {
        "title":"KarWorTong",
        "description":"An Info Page for a Small Business I used to work for.",
        "category":"An Info Page for a Small Business I used to work for.",
        "tags":"Branding, Web Development",
        "image":"karwortong.jpg",
        "url":"http://www.karwortong.com",
      },
      {
        "title":"Carrier",
        "description":"A MVP Project done as a student at Hack Reactor.",
        "category":"A customizable email newsletter client with campaign managing and stats",
        "tags":"Web Programming",
        "image":"carrier2.png",
        "url":"http://ec2-54-227-125-175.compute-1.amazonaws.com:8080/",
      },
      {
        "title":"My Portfolio Website",
        "description":"A personal website I made during my time at Hack Reactor.",
        "category":"Personal Web Development",
        "tags":"Web Development",
        "image":"portfolio.jpg",
        "url":""
      }
    ]
  },
  "testimonials":{
    "testimonials":[
      {
        "text":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "user":"Adam Mateo"
      },
      {
        "text":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "user":"Jerry Chen"
      }
    ]
  }
}

})

  }

  sendEmail(emailData){

    axios.post('/email', emailData)



  }
  render() {
    return (
      <div className="App">
        <Header data={this.state.resumeData.main} />
        <About data={this.state.resumeData.main} />
        <Resume data={this.state.resumeData.resume} />
        <Portfolio data={this.state.resumeData.portfolio} />
        <Testimonials data={this.state.resumeData.testimonials} />
        <Contact data={this.state.resumeData.main} sendEmail={this.sendEmail}/>
       <Footer/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));