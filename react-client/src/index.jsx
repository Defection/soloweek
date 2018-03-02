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

    this.setState({resumeData: {
  "main": {
    "name":"Eric Shum",
    "occupation":"Web developer, Programmer and Avid YouTube/Anime watcher.",
    "description":"I make web applicatications and spend most of the day coding. I am a student of StackOverflow.",
    "image":"profilepic.jpg",
    "bio":"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    "email": "eshum89@gmail.com",
    "phone": "347-421-2740",
    "address":{
      "street":"33-19 145th Pl",
      "city":"Flushing",
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
        "school":"Queens College, City University of New York",
        "degree":"Bachelors in Accounting/Economics",
        "graduated":"January 2013",
        "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
      },
      {
        "school":"Hack Reactor",
        "degree":"You're Looking At It? A Hoodie, T-shirt, and Sticker",
        "graduated":"Currently Praying That I Make It To Graduation",
        "description":"This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat"
      }
    ],
    "work":[
      {
        "company":"DMA International",
        "title":"Administrative Assitant/Free TechSupport",
        "years":"January 2015 - October 2017",
        "description":"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum felis eu pede mollis pretium."
      },
      {
        "company":"IRS, U.S Dept of Treasury",
        "title":"Tax Examiner/Data Transcriber",
        "years":"December 2015 - May 2016",
        "description":"This is Photoshops version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat"
      }
    ],
    "skills":[
      {
        "name":"JavaScript",
        "level":"80%"
      },
      {
        "name":"React",
        "level":"75%"
      },
      {
        "name":"HTML5",
        "level":"70%"
      },
      {
        "name":"CSS",
        "level":"80%"
      },
      {
        "name":"Excel",
        "level":"80%"
      },
      {
        "name":"jQuery",
        "level":"70%"
      }
    ]
  },
  "portfolio":{
    "projects": [
      {
        "title":"Re-Cast",
        "description":"YouTube made with React. Uses YouTube API for a blazing fast experience.",
        "category":"YouTube VideoPlayer, Web Development",
        "tags":"YouTube",
        "image":"recast.jpg",
        "url":"",
        "modal":"#modal-01"
      },
      {
        "title":"KarWorTong",
        "description":"An Info Page for a Small Business I used to work for.",
        "category":"Web Design",
        "tags":"Branding, Web Development",
        "image":"karwortong.jpg",
        "url":"",
        "modal":"#modal-02"
      },
      {
        "title":"WeatherApp",
        "description":"A MVP Project done as a student at Hack Reactor.",
        "category":"Web Development",
        "tags":"Web Programming",
        "image":"weatherapp.jpg",
        "url":"",
        "modal":"#modal-03"
      },
      {
        "title":"Into The Light",
        "description":"Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit.",
        "category":"Photography",
        "tags":"Photography, Design",
        "image":"portfolio.jpg",
        "url":"http://port4.com",
        "modal":"#modal-04"
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
        <Footer />
        <Chat/>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));