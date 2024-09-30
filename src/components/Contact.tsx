import styled from 'styled-components';
import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { sendEmail } from '@/utils/send-email';

// Shared styles for inputs and text areas
const sharedStyles = `
  margin-top: 0.5rem; 
  padding: 0.5rem 1rem;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.2);
  border: 1px solid transparent;
  border-radius: 0.375rem;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: white;
  transition: background-color 0.2s ease, border-color 0.2s ease;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.8);
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: #3b82f6;
  }

  &:focus {
    background-color: rgba(255, 255, 255, 0.2);
    border-color: #3b82f6;
    box-shadow: 0 0 5px rgba(59, 130, 246, 0.5);
  }
`;

const StyledInput = styled.input`
  ${sharedStyles}
`;

const StyledTextArea = styled.textarea`
  ${sharedStyles}
  resize: vertical;

  /* Custom scrollbar styles for WebKit-based browsers */
  &::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
  }

  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1); /* Track background */
    border-radius: 10px; /* Optional: rounded scrollbar track */
  }

  &::-webkit-scrollbar-thumb {
    background-color: rgba(253, 254, 255, 0.7); /* Thumb color */
    border-radius: 10px; /* Rounded scrollbar thumb */
    border: 2px solid transparent; /* Border for a more polished look */
    background-clip: content-box; /* Ensures the border stays inside the thumb */
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(59, 130, 246, 1); /* Darker on hover */
  }

  &::-webkit-scrollbar-thumb:active {
    background-color: rgba(37, 99, 235, 1); /* Even darker on active */
  }
`;

// Updated button style with a more modern look
const StyledButton = styled.button`
  width: 100%;
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem;
  border-radius: 0.375rem;
  font-weight: 600;
  text-align: center;
  transition: background-color 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    background-color: #10b981;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 8px rgba(59, 130, 246, 0.5);
  }
`;

// Wrapper to handle responsiveness and full screen background
const FormWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #f3f4f6;
  padding: 2rem;
  margin: 0;
  /* border-radius: 30px; */
  max-width: 100%;
  min-height: 100vh; /* Make the wrapper fill the full height of the screen */
  min-width: 100vw;
  opacity: 90;

  /* Mobile styles */
  @media (max-width: 640px) {
    width: 100%;
    padding: 1rem;
  }

  /* Tablet styles */
  @media (min-width: 641px) and (max-width: 1024px) {
    width: 80%;
  }

  /* Desktop styles */
  @media (min-width: 1025px) {
    width: 60%;
    padding: 3rem;
  }

  background: linear-gradient(to bottom right, #1e3a8a, #000000, #047857);
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
`;

const ContactFormContainer = styled.div`
  width: 100%;
  max-width: 600px;
  padding: 2rem;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 30px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1);
`;

// Form data types
export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactForm: FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  function onSubmit(data: any) {
    sendEmail(data);
  }

  return (
    <FormWrapper>
      <ContactFormContainer>
        <h2 className="text-2xl font-semibold text-white mb-6 text-center">Drop me a message</h2>
        
        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="name">Full Name</label>
            <StyledInput
              type="text"
              id="name"
              placeholder="Enter your full name"
              {...register('name', { required: 'Full Name is required' })}
            />
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message?.toString()}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="email">Email Address</label>
            <StyledInput
              type="email"
              id="email"
              placeholder="Enter your email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                  message: 'Invalid email address'
                }
              })}
            />
            {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message?.toString()}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-white" htmlFor="message">Message</label>
            <StyledTextArea
              id="message"
              rows={4}
              placeholder="Write your message"
              {...register('message', { required: 'Message is required' })}
            />
            {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message?.toString()}</p>}
          </div>

          {/* Submit Button */}
          <StyledButton type="submit">Send Message</StyledButton>
        </form>
      </ContactFormContainer>
    </FormWrapper>
  );
};

export default ContactForm;
