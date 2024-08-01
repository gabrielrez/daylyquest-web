import React from 'react';

const Form = () => {
  return (
    <form>
      <div>
        <label htmlFor="">E-mail</label>
        <input type="email" placeholder="youremail@email.com" />
      </div>
      <div>
        <label htmlFor="">Password</label>
        <input type="password" placeholder="********" />
      </div>
    </form>
  );
};

export default Form;
