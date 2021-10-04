import useInput from "../../hooks/use-input";
import emailjs from "emailjs-com";
import { useState, useRef } from "react";

import classes from "./Form.module.css";

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
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    resetNameInput();
    resetEmailInput();
    resetMessageInput();

    setSuccessMessage(true);
  };

  setTimeout(() => {
    setSuccessMessage(false);
  }, 5000)

  return (
    <div className={classes.wrapper}>
      <form ref={form} onSubmit={formSubmissionHandler} className={classes.form}>
        <div className={classes["form-control"]}>
          <div className={classes["form-control"]}>
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
              <p className={classes["error-text"]}>
                Name field must not be empty!
              </p>
            )}
          </div>

          <div className={classes["form-control"]}>
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
              <p className={classes["error-text"]}>
                Please enter a valid e-mail address!
              </p>
            )}
          </div>

          <div className={classes["form-control"]}>
            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              name="visitor_message"
              onChange={messageChangeHandler}
              onBlur={messageBlurHandler}
              value={enteredMessage}
            ></textarea>
            {messageHasError && (
              <p className={classes["error-text"]}>
                Message field must not be empty!
              </p>
            )}
          </div>
        </div>

        <div className={classes["form-actions"]}>
          <button type="submit" disabled={!formIsValid}>
            Submit
          </button>
          {successMessage && <p className={classes['success-text']}>Your message has been sent!</p>}
        </div>
      </form>

      <div className={classes["form-text-box"]}>
        <h2>Contact</h2>
        <p>
          Get in touch with me if you have any questions and i'll get back to
          you as soon as i can!
        </p>
      </div>
    </div>
  );
};

export default Form;
