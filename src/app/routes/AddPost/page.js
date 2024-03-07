"use client"
import React, { useState } from 'react';
import "./addjobform.css";
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
import { useRouter } from "next/navigation";
import axios from 'axios';
// Assuming this component is correctly imported in your routing setup
export function AddJobPostForm({ onAddJobPost }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');
  const [datePosted, setDatePosted] = useState('');
  const router = useRouter();
  // Assuming this is your AddJobPostForm component
// Assuming this is your AddJobPostForm component
const handleSubmit = (e) => {
  e.preventDefault();
 /* router.push("/routes/Posts");*/
  // Pass the new job post back to the parent component
  // Clear form fields after submission
 /* JobPostsList({ jobPosts });*/
  // setTitle('');
  // setDescription('');
  // setPhotoUrl('');
  // setDatePosted('');
  const formData = {
    title,
    description,
    email,
    datePosted
  };


  axios.post('http://127.0.0.1:8100/addposts', {formData})
      .then(response => {
        // Handle success, maybe show a success message or redirect the user
        alert(`Response from backend: ${JSON.stringify(response.data)}`);
        // alert('Job post added successfully:', response.data);
      })
      .catch(error => {
        // Handle error, maybe show an error message to the user
        console.error('Error adding job post:', error);
      });
};



  return (
    <>
    <HeaderTem />
    <div className="addJobPostForm">
      <h2>Add New Job Post</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Job Title"
          required
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Job Description"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Mail Id"
        />
        <input
          type="date"
          value={datePosted}
          onChange={(e) => setDatePosted(e.target.value)}
          placeholder="Date Posted"
          required
        />
        <button type="submit">Add Job Post</button>
      </form>
    </div>
    <CustomFooter />
    </>
  );
}



function JobPostsList({ jobPosts }) {
  return (
    <div>
      {jobPosts.map((post, index) => (
        <div key={index}>
          <h3>{post.title}</h3>
          {/* Display other post details */}
          <p>{post.description}</p>
          {/* Check and display if the post is active or expired based on datePosted */}
          <p>Status: {new Date() - new Date(post.datePosted) < 30 * 24 * 60 * 60 * 1000 ? 'Active' : 'Expired'}</p>
        </div>
      ))}
    </div>
  );
}
