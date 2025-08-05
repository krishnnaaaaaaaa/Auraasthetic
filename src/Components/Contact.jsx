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

  const TALLY_FORM_URL = 'https://tally.so/r/3NZADB';

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

            {/* Right Side - Tally Form */}
            <div className="bg-white rounded-2xl p-0 overflow-hidden">
              <iframe 
                src={TALLY_FORM_URL} 
                width="100%" 
                height="600" 
                frameBorder="0" 
                marginHeight="0" 
                marginWidth="0"
                title="Contact Form"
                className="w-full rounded-2xl"
                style={{ minHeight: '600px', maxHeight: '600px' }}
              >
                Loading...
              </iframe>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
