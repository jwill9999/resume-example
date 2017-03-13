import React, { Component } from 'react';


class Contact extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }
  handleChange(event) {
    const target = event.target;
    const value = event.target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
   
  }

  handleSubmit(event) { 
    name.value = "",
    
    event.preventDefault();

    
  }

  render() {
    if (this.props.data) {
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
      //var email = this.props.data.email;
    }
    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <h1><span>Get In Touch.</span></h1>
          </div>

          <div className="ten columns">
            <p className="lead">Please feel free to contact me and I will return your email so we can keep in touch. Please fill out the form and note * items are required before submission.
                  </p>

          </div>
        </div>
        <div className="row">

          <div className="eight columns">

            <form  onSubmit={this.handleSubmit}  id="contactForm" name="contactForm">
              <fieldset>

                <div>
                  <label htmlFor="contactName">Name <span className="required">*</span></label>
                  <input type="text"  size="35" id="contactName" placeholder="Name Required" name='name'  value={this.state.name} onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                  <input type="text"  size="35" id="contactEmail" placeholder="Email Required" name="email" value={this.state.email} onChange={this.handleChange} />
                </div>

                <div>
                  <label htmlFor="contactSubject">Subject</label>
                  <input type="text"  size="35" placeholder="Subject Title" id="contactSubject" name="subject" value={this.state.subject} onChange={this.handleChange}   />
                </div>

                <div>
                  <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                  <textarea cols="50" rows="15" id="contactMessage"  placeholder="Main Message" name="message"  value={this.state.message} onChange={this.handleChange}></textarea >
                </div>

                <div>
                 
                  <button type='submit' className="submit">Submit</button>
                  <span id="image-loader">
                    <img alt="" src="images/loader.gif" />
                  </span>
                </div>

              </fieldset>
            </form>

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
