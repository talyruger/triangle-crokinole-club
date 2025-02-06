import React, { useState } from 'react';
import styled from 'styled-components';
import emailjs from 'emailjs-com';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: #f9f9f9; /* Updated modal background color */
  padding: 2rem;
  border-radius: 10px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  position: absolute;
  top: 1rem;
  right: 1rem;
  cursor: pointer;
  color: #f0c040; /* Updated close button color */
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

const SubmitButton = styled.button`
  background-color: #ff8c00; /* Updated submit button background color */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 0.75rem 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #e07b00; /* Updated submit button hover color */
  }
`;

const JoinMailingListModal = ({ onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message
    };

    emailjs.send('service_5a1645n', 'template_yte0dqq', templateParams, 'w9OGXZgK6TWeHJ42F')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        onClose();
      }, (error) => {
        console.log('FAILED...', error);
      });
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <h2>Join Our Community</h2>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="How did you hear about us?"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default JoinMailingListModal;
