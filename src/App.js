
import './App.css';
import {useForm } from 'react-hook-form'

function App() {
const {
  register,
  handleSubmit,
  formState: {
    errors
  }
} = useForm();

const onSubmit = data => console.log(data)


  return (
    <div className="container">
       <div className="row">

        {/*Form Column*/}
        <div className="column">
        <div className="left-half">
          <h1>Contact Us</h1>
          <p>For more enquiries please fill the form for a chat</p>

          {/*Form*/}
        <form onSubmit={handleSubmit(onSubmit)}>

          {/*Name*/}  
          <p className='input-label'>Name *</p>
          <input 
            className='input'
            type='text'
            placeholder='Name'
            {...register('name', {
              required: true,
              maxLength: 80
            })}/>

            {errors.name &&
               <span className='error'>
                {errors.name.type === 'required' && 'This field is required.'}
                {errors.name.type === 'maxLength' && 'max length of name is 80.'}
               </span>
            }

            {/*Email*/} 
             <p className='input-label'>Email *</p>
          <input 
            className='input'
            type='text'
            placeholder='Email'
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
            })}/>

            {errors.email &&
               <span className='error'>
                {errors.email.type === 'required' && 'This field is required.'}
                {errors.email.type === 'pattern' && 'Invalid Email Address'}
               </span>
            }


                 {/*Phone Number*/} 
          <p className='input-label'>Phone</p>
          <input 
            className='input'
            type='text'
            placeholder='Phone #'
            {...register('phoneNumber', {
              pattern: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/
            })}/>

            {errors.phoneNumber &&
               <span className='error'> 'Invalid Phone Number'
               </span>
            }

               {/*Message*/} 
          <p className='input-label'>Message</p>
          <input 
            className='input'
            type='text'
            placeholder='Message #'
            {...register('message', { required: true, })}
            />
              {errors.message &&
               <span className='error'> This field is required.</span>
            }


            {/*Submit*/}
            <div>
              <input className='submit' type='submit' value='Send Message'/>

            </div>
        </form>
      </div>
    </div>

        {/*Image Column*/}
        <div className="column">
          <img 
            src = 'https://images.unsplash.com/photo-1688637737426-10cfce2fb1e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80'
            alt='standing man'
          />
        </div>


    </div>
    </div>
  );
}

export default App;
