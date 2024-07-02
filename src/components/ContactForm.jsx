import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    window.emailjs.send(
      'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
      'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
      formData
    )
    .then((result) => {
      console.log(result.text);
      alert('Message sent successfully!');
    }, (error) => {
      console.log(error.text);
      alert('Failed to send the message, please try again.');
    });

    setFormData({
      email: '',
      message: ''
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          value={formData.email} 
          onChange={handleChange} 
          required 
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea 
          name="message" 
          value={formData.message} 
          onChange={handleChange} 
          required 
        />
      </div>
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;