import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

//to put a delete button which can delete the userdetail in admin dashboard

const AdminDashboard = () => {
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/users/submissions');
      setSubmissions(response.data);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchSubmissions();

    //i have dynamically Set up polling to fetch submissions every 5 seconds, can use useform or usecontext to do the same
    const interval = setInterval(() => {
      fetchSubmissions();
    }, 5000);

    // Clear the interval on component unmount 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full h-full text-white bg-zinc-900">
      
      <div className='flex justify-center items-center relative pb-10'>
        
        <h2 className="text-3xl p-5">Admin Dashboard:</h2>
        <Link to="/admin">
          <button className='px-3 py-1 rounded-3xl bg-zinc-800 relative translate-x-[36rem] border-2 border-zinc-300'>
            Logout
          </button>
        </Link>
      </div>

      <div className="submission-list p-10">
        {submissions.length > 0 ? (
          submissions.map((submission) => (
            <div key={submission._id} className="card relative p-5 bg-zinc-800 rounded-lg mb-5">
              <h3 className="capitalize">Name: {submission.name}</h3>
              <p className="break-all mb-4">
                Instagram: <a href={submission.socialMediaHandle} className="break-all text-blue-500">{submission.socialMediaHandle}</a>
              </p>

              <div className="image-list flex flex-wrap gap-4">
                {submission.images.map((image, index) => (
                  <img
                    key={index}
                    src={`http://localhost:3000/${image}`}
                    alt="user submission"
                    className="w-24 h-24 object-cover rounded-lg"
                  />
                ))}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No submissions yet.</p>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
