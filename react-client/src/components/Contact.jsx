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
                  <p className="lead">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                  eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                  voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                  </p>

            </div>
         </div>
         <div className="row">

            <div className="eight columns">

     
					<fieldset>

                  <div>
      						   <label htmlFor="contactName">Name <span className="required">*</span></label>
      						   <input onChange= {(e)=>{this.setState({name:e.target.value})}}type="text"  size="35" id="contactName" name="contactName"/>
                  </div>

                  <div>
      						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
      						   <input onChange= {(e)=>{this.setState({email:e.target.value})}} type="text"  size="35" id="contactEmail" name="contactEmail"/>
                  </div>

                  <div>
      						   <label htmlFor="contactSubject">Subject</label>
      						   <input onChange= {(e)=>{this.setState({subject:e.target.value})}} type="text"  size="35" id="contactSubject" name="contactSubject"/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea onChange= {(e)=>{this.setState({message:e.target.value})}} cols="50" rows="15" id="contactMessage" name="contactMessage"></textarea>
                  </div>

                  <div>
                     <button onClick = {()=>{this.getEmailInfo()}} className="submit">Submit</button>
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
    					   <h4>Address and Phone</h4>
    					   <p className="address">
    						   {name}<br />
    						   {street} <br />
    						   {city}, {state} {zip}<br />
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
