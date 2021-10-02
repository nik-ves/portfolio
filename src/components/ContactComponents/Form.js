import classes from "./Form.module.css";

const Form = () => {
  const formSubmissionHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={classes.wrapper}>
      <form onSubmit={formSubmissionHandler} className={classes.form}>
        <div className={classes["form-control"]}>
          <div className={classes["form-control"]}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" />
          </div>

          <div className={classes["form-control"]}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>

          <div className={classes["form-control"]}>
            <label htmlFor="message">Your message</label>
            <textarea id="message"></textarea>
          </div>

          <div className={classes["form-actions"]}>
            <button>Submit</button>
          </div>
        </div>
      </form>

      <div className={classes["form-text-box"]}>
        <h2>Contact</h2>
        <p>Get in touch with me if you have any questions and i'll get back to you as soon as i can!</p>
      </div>
    </div>
  );
};

export default Form;
