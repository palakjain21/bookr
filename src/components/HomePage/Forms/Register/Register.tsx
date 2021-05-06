import { useState } from 'react';
import '../Forms.scss';

const Register = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  // eslint-disable-next-line
  const [_, setSubmitted] = useState(false);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleName = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      name: event.target.value,
    }));
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
      <h1 className="formheading"> NEW HERE?</h1>
      <input
        onChange={handleName}
        className="formfield"
        type="name"
        name="name"
        id="name"
        placeholder="Name"
        value={values.name}
      />
      <input
        onChange={handleEmail}
        className="formfield"
        type="email"
        name="email-address"
        id="email-address"
        placeholder="Email"
        value={values.email}
      />
      <input
        onChange={handlePassword}
        className="formfield"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={values.password}
      />
      <input onClick={handleSubmit} className="submit" type="submit" value="REGISTER" />
    </form>
  );
};

export default Register;
