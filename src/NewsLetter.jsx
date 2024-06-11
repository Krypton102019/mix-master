import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Form, redirect, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const NewsLetter = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    console.log(data);
    const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

    try {
      const response = await axios.post(newsletterUrl, data);
  
      toast.success(response.data.msg);
      return navigate('/');
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.msg);
      return error;
    }
  ;
    // Perform your POST request or any other action here
    // Example:
    // axios.post('/api/submit', data).then(response => {
    //   // Handle response
    //   navigate('/success');
    // }).catch(error => {
    //   // Handle error
    // });
  };

  return (
    <>
      <form className='form' onSubmit={handleSubmit(onSubmit)}>
        <h4 style={{ textAlign: 'center', marginBottom: '2rem' }}>
          Our Newsletter
        </h4>
        {/* name */}
        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type='text'
            className='form-input'
            id='name'
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        {/* lastName */}
        <div className='form-row'>
          <label htmlFor='lastName' className='form-label'>
            Last Name
          </label>
          <input
            {...register('lastName', { required: 'Last name is required' })}
            type='text'
            className='form-input'
            id='lastName'
          />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        {/* email */}
        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            {...register('email', { 
              required: 'Email is required', 
              pattern: {
                value: /^\S+@\S+$/i,
                message: 'Invalid email address'
              } 
            })}
            type='text'
            className='form-input'
            id='email'
          />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <button
          type='submit'
          className='btn btn-block'
          style={{ marginTop: '0.5rem' }}
        >
          Submit
        </button>
      </form>
    </>
  );
};

export default NewsLetter;
