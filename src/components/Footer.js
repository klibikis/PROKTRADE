import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import '../App.css';
import {useTranslation} from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email using EmailJS
    emailjs.sendForm('service_y2axhqz', 'proktrade-contact-us', e.target, '45FPQQ1EdAAZP_vyV')
      .then((result) => {
        setStatus(t('messageStatusSuccess'));
        setName('');
        setEmail('');
        setMessage('');
        setPhoneNumber('')
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setStatus(t('messageStatusFailure'));
      });
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>{t('aboutUs')}</h2>
          <p>
            {t('aboutUsInfo')}
          </p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/company/prok-trade-sia/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="skype:live:oleg.kurilovic?chat" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-skype"></i>
            </a>
            <a href="mailto:proktrade@gmail.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="far fa-envelope"></i>
            </a>
            <a
              href="tel:+37129546499"
              className="social-icon"
            >
              <i className="fas fa-phone" style={{fontSize:'20px'}}></i>
              <span className="phone-number">+371 29546499</span>
            </a>
          </div>
        </div>

        <div className="footer-contact">
          <h2>{t('contactUs')}</h2>
          <form id= 'contact-form' className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="user_name"
              placeholder={t('yourName')}
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder={t('yourEmail')}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="number"
              name="user_number"
              placeholder={t('yourPhone')}
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
              name="message"
              placeholder={t('yourMessage')}
              rows="4"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="btn-send">{t('sendMessage')}</button>
          </form>
          {status && <p className="status-message">{status}</p>}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
