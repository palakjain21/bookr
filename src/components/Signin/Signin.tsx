import { useState } from 'react';
import './Signin.scss';

const Signin = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });
  // eslint-disable-next-line
  const [_, setSubmitted] = useState(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleEmail = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      email: event.target.value,
    }));
  };
  const handlePassword = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      password: event.target.value,
    }));
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h1 className="formheading">ALREADY AN USER?</h1>
      <input
        onChange={handleEmail}
        className="formfield"
        type="email"
        name="email-address"
        id="email-address"
        placeholder="email"
        value={values.email}
      />
      <input
        onChange={handlePassword}
        className="formfield"
        type="password"
        name="password"
        id="password"
        placeholder="password"
        value={values.password}
      />
      <input onClick={handleSubmit} className="submit" type="submit" value="SIGN IN" />
    </form>
  );
};

export default Signin;
