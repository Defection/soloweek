import React, { Component } from 'react';

class Contact extends Component {
  constructor(props){
    super(props);

    this.state = {
        name: '',
        email: '',
        subject: [],
        message: ''
    }
    this.getEmailInfo = this.getEmailInfo.bind(this)
  }

  getEmailInfo(){
    console.log(this.state)
    this.props.sendEmail(this.state)
    this.setState({
        name: '',
        email: '',
        subject: [],
        message: ''
    })

  }

  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      var email = this.props.data.email;
    }
    return (
      <section id="contact">
         <div className="row section-head">
            <div className="two columns header-col">
               <h1><span>Get In Touch.</span></h1>
            </div>

            <div className="ten columns">
                  <p className="lead"> If you like what you see and would like to contact me with any questions or job opportunities, 
              please shoot me an email via the form below or send me a text.
                  </p>

            </div>
         </div>
         <div className="row">

            <div className="eight columns">

     
					<fieldset>

                  <div>
      						   <label htmlFor="contactName">Name <span className="required">*</span></label>
      						   <input value = {this.state.name} onChange= {(e)=>{this.setState({name:e.target.value})}}type="text"  size="35" id="contactName" name="contactName"/>
                  </div>

                  <div>
      						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
      						   <input value = {this.state.email} onChange= {(e)=>{this.setState({email:e.target.value})}} type="text"  size="35" id="contactEmail" name="contactEmail"/>
                  </div>

                  <div>
      						   <label htmlFor="contactSubject">Subject</label>
      						   <input value = {this.state.subject} onChange= {(e)=>{this.setState({subject:e.target.value})}} type="text"  size="35" id="contactSubject" name="contactSubject"/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea value = {this.state.message} onChange= {(e)=>{this.setState({message:e.target.value})}} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button onClick = {()=>{this.getEmailInfo()}}  className="submit">Submit</button>
                     <span id="image-loader">
                        <img alt="" src="images/loader.gif" />
                     </span>
                  </div>

					</fieldset>
		

               <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>

            </div>
            <aside className="four columns footer-widgets">
               <div className="widget widget_contact">
    					   <h4>Contact Me</h4>
    					   <p className="address">
    						   {name}<br />
    						   eshum89@gmail.com <br />
    						   <span>{phone}</span>
    					   </p>
				      </div>
            </aside>
      </div>
   </section>
    );
  }
}

export default Contact;
