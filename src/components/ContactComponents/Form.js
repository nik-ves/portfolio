import { useState, useRef } from "react";

import useInput from "../../hooks/use-input";
import emailjs from "emailjs-com";

import {
  Button,
  ContactForm,
  ErrorText,
  FormActions,
  FormControl,
  HeadingSecondary,
  IntroBox,
  Paragraph,
  SuccessText,
  Wrapper,
} from "./FormStyles";

const Form = () => {
  const form = useRef();

  const [successMessage, setSuccessMessage] = useState(false);

  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    valueBlurHandler: nameBlurHandler,
    resetValue: resetNameInput,
  } = useInput((value) => value.trim().length > 0);

  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChangeHandler,
    valueBlurHandler: emailBlurHandler,
    resetValue: resetEmailInput,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMessage,
    isValid: messageIsValid,
    hasError: messageHasError,
    valueChangeHandler: messageChangeHandler,
    valueBlurHandler: messageBlurHandler,
    resetValue: resetMessageInput,
  } = useInput((value) => value.trim().length > 0);

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_jfc5w5c",
        "template_vzw121b",
        form.current,
        "user_AtEUJjI412jCSTvVqTdgQ"
      )
      .then(
        (result) => {},
        (error) => {}
      );

    resetNameInput();
    resetEmailInput();
    resetMessageInput();

    setSuccessMessage(true);
  };

  if (successMessage) {
    setTimeout(() => {
      setSuccessMessage(false);
    }, 5000);
  }

  return (
    <Wrapper>
      <ContactForm ref={form} onSubmit={formSubmissionHandler}>
        <FormControl>
          <FormControl>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="visitor_name"
              id="name"
              onChange={nameChangeHandler}
              onBlur={nameBlurHandler}
              value={enteredName}
            />
            {nameHasError && (
              <ErrorText>Name field must not be empty!</ErrorText>
            )}
          </FormControl>

          <FormControl>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="visitor_email"
              id="email"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={enteredEmail}
            />
            {emailHasError && (
              <ErrorText>Please enter a valid e-mail address!</ErrorText>
            )}
          </FormControl>

          <FormControl>
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="visitor_message"
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              value={enteredMessage}
            ></textarea>
            {messageHasError && (
              <ErrorText>Message field must not be empty!</ErrorText>
            )}
          </FormControl>
        </FormControl>

        <FormActions>
          <Button type="submit" disabled={!formIsValid}>
            Submit
          </Button>
          {successMessage && (
            <SuccessText>Your message has been sent!</SuccessText>
          )}
        </FormActions>
      </ContactForm>

      <IntroBox>
        <HeadingSecondary>Contact</HeadingSecondary>
        <Paragraph>
          Get in touch with me if you have any questions and i'll get back to
          you as soon as i can!
        </Paragraph>
      </IntroBox>
    </Wrapper>
  );
};

export default Form;
