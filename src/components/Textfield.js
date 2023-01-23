import React from 'react';

const Textfield = ({
  label,
  type,
  setForm,
  form,
  isValid,
  handleValidation,
  name,
}) => {
  const handleChange = (e) => {
    console.log(e.target.value);

    setForm((prevValue) => {
      return { ...prevValue, [name]: e.target.value };
    });
    handleValidation(e.target.value);
  };

  return (
    <div>
      <div className='input-label'>{label}</div>
      <input
        type={type}
        className={`input-field ${isValid ? '' : 'error'} `}
        value={form[name]}
        onChange={handleChange}
      />
    </div>
  );
};

export default Textfield;
