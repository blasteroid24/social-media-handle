import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
  const [name, setName] = useState('');
  const [socialMediaHandle, setSocialMediaHandle] = useState('');
  const [images, setImages] = useState([]);

  const handleFileChange = (e) => {
    setImages(e.target.files);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('socialMediaHandle', socialMediaHandle);
    Array.from(images).forEach(image => {
      formData.append('images', image);
    });

    try {
      await axios.post('http://localhost:3000/api/users/submit', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      alert('User submitted successfully');
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Submission failed');
    }
  };

  return (
    <div className='flex justify-center items-center h-screen bg-zinc-900'>
      <div className='bg-zinc-800 p-8 rounded-lg shadow-lg w-full max-w-md'>
        <h2 className='text-4xl text-center text-white mb-6'>User Submission Form</h2>
        <form className='space-y-5' onSubmit={handleSubmit}>
          <div>
            <label className='block text-white'>Name:</label>
            <input
              type='text'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className='w-full p-2 border border-zinc-600 rounded focus:outline-none focus:border-blue-500 transition duration-150 ease-in-out'
              placeholder='Enter your name'
            />
          </div>
          <div>
            <label className='block text-white'>Social Media Handle:</label>
            <input
              type='text'
              value={socialMediaHandle}
              onChange={(e) => setSocialMediaHandle(e.target.value)}
              required
              className='w-full p-2 border border-zinc-600 rounded focus:outline-none focus:border-blue-500 transition duration-150 ease-in-out'
              placeholder='Enter your social media handle'
            />
          </div>
          <div>
            <label className='block text-white'>Upload Images:</label>
            <input
              type='file'
              multiple
              onChange={handleFileChange}
              className='block w-full text-white border border-zinc-600 rounded'
            />
          </div>
          <button
            type='submit'
            className='w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-500 transition duration-150 ease-in-out'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
