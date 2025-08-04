import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('');
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Remove all non-digits
    const cleanPhone = phone.replace(/\D/g, '');
    // Check if it's a valid length (10-15 digits)
    return cleanPhone.length >= 10 && cleanPhone.length <= 15;
  };

  const validateForm = () => {
    const newErrors = {};

    // Full Name validation
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number (10-15 digits)';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitStatus('');

    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbx4_qrQ9rH0qyu1hQiSfkjqE2ZmFwlb4bxta0MuW9-Do9SpeMET6_XaSzNT6pSWtw-bGg/exec';
      
      // Create URL-encoded form data (better for Google Apps Script)
      const formDataToSend = new URLSearchParams();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('message', formData.message);

      console.log('Submitting form data:', {
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        message: formData.message
      });

      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formDataToSend.toString()
      });

      // With no-cors mode, we can't read the response
      // So we assume success if no error is thrown
      console.log('Form submitted successfully');
      setSubmitStatus('success');
      setFormData({ fullName: '', email: '', phone: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    "Are all treatments doctor-supervised?",
    "Is there any downtime after cosmetic procedures?",
    "Do you offer personalized treatment plans?",
    "Who can join the cosmetology courses?",
    "Will I get hands-on training during the course?",
    "Do you provide post-course support or guidance?"
  ];

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans px-4 sm:px-6 pb-10 pt-24 relative overflow-hidden">
      {/* Header Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-7 mb-16"
      >
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Contact Us For More Information
        </h1>
      </motion.div>

      {/* Get In Touch Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto mb-16"
      >
        <div className="bg-green-800 rounded-3xl p-6 sm:p-8 md:p-10 text-white">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Side - Contact Info */}
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-lime-200">
                Get In Touch
              </h2>
              
              <div className="space-y-4 mb-8">
                <div>
                  <p className="font-semibold text-lime-200">+918830062071</p>
                  <p className="text-sm">cosmetologydoc28@gmail.com</p>
                </div>
                
                <div className="text-sm leading-relaxed">
                  <p className="font-semibold text-lime-200 mb-2">
                    AURA AESTHETICS COSMETOLOGY CLINIC &<br />
                    TRAINING CENTER
                  </p>
                  <p>
                    Agastya Tower, 102, Opp Shanti<br />
                    Nursing Home, Paithan Road, Kanchan Wadi,<br />
                    Ch.Sambhajinagar, Maharashtra 431002
                  </p>
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-200 rounded-full"></span>
                  <span>cosmetologydoc28@gmail.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-200 rounded-full"></span>
                  <span>+918830062071</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-lime-200 rounded-full"></span>
                  <span>Ch.Sambhajinagar, Maharashtra</span>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 text-lime-200">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      className={`w-full px-3 py-2 bg-white/10 border rounded-lg text-white placeholder-white/60 focus:outline-none ${
                        errors.fullName ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-lime-200'
                      }`}
                    />
                    {errors.fullName && (
                      <p className="text-red-300 text-xs mt-1">{errors.fullName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 text-lime-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="johndoe@gmail.com"
                      className={`w-full px-3 py-2 bg-white/10 border rounded-lg text-white placeholder-white/60 focus:outline-none ${
                        errors.email ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-lime-200'
                      }`}
                    />
                    {errors.email && (
                      <p className="text-red-300 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-lime-200">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+123 456 789"
                    className={`w-full px-3 py-2 bg-white/10 border rounded-lg text-white placeholder-white/60 focus:outline-none ${
                      errors.phone ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-lime-200'
                    }`}
                  />
                  {errors.phone && (
                    <p className="text-red-300 text-xs mt-1">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1 text-lime-200">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Type your message here !!!"
                    rows="4"
                    className={`w-full px-3 py-2 bg-white/10 border rounded-lg text-white placeholder-white/60 focus:outline-none resize-none ${
                      errors.message ? 'border-red-400 focus:border-red-400' : 'border-white/20 focus:border-lime-200'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-300 text-xs mt-1">{errors.message}</p>
                  )}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 rounded-lg font-semibold transition-colors duration-200 ${
                    isSubmitting 
                      ? 'bg-gray-400 text-gray-600 cursor-not-allowed' 
                      : 'bg-lime-200 text-green-800 hover:bg-lime-300'
                  }`}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit your form'}
                </button>
                
                {/* Status Messages */}
                {submitStatus === 'success' && (
                  <p className="text-xs text-lime-200 text-center font-semibold">
                    ✅ Message sent successfully! We'll be back within 48 hours.
                  </p>
                )}
                {submitStatus === 'error' && (
                  <p className="text-xs text-red-300 text-center font-semibold">
                    ❌ Error sending message. Please try again.
                  </p>
                )}
                {!submitStatus && (
                  <p className="text-xs text-white/70 text-center">
                    We'll be back within 48 hours or sooner
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
