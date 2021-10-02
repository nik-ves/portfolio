import { useState } from "react";
import classes from "./Form.module.css";

const Form = () => {
  const [enteredName, setEnteredName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);

  const [enteredEmail, setEnteredEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const [enteredMessage, setEnteredMessage] = useState("");
  const [messageIsTouched, setMessageIsTouched] = useState(false);

  const nameIsValid = enteredName.trim().length > 0;
  const nameHasError = !nameIsValid && nameIsTouched;

  const emailIsValid = enteredEmail.includes("@");
  const emailHasError = !emailIsValid && emailIsTouched;

  const messageIsValid = enteredMessage.trim().length > 0;
  const messageHasError = !messageIsValid && messageIsTouched;

  let formIsValid = false;

  if (nameIsValid && emailIsValid && messageIsValid) {
    formIsValid = true;
  }

  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  };

  const messageChangeHandler = (event) => {
    setEnteredMessage(event.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };

  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const messageBlurHandler = () => {
    setMessageIsTouched(true);
  };

  const formSubmissionHandler = (event) => {
    event.preventDefault();

    if (!nameIsValid && !emailIsValid && !messageIsValid) {
      return;
    }

    console.log(enteredName);
    console.log(enteredEmail);
    console.log(enteredMessage);

    setEnteredName("");
    setNameIsTouched(false);
    setEnteredEmail("");
    setEmailIsTouched(false);
    setEnteredMessage("");
    setMessageIsTouched(false);
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={formSubmissionHandler} className={classes.form}>
        <div className={classes["form-control"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
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

          <div className={classes["form-actions"]}>
            <button disabled={!formIsValid}>Submit</button>
          </div>
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
