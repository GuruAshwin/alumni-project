// src/app/routes/AddPost/page.js

import React from 'react';
import AddJobPostForm from './addjobform'; // Assuming AddJobPostForm is in the same directory
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";

export default function AddPostPage() {
  const handleAddJobPost = (formData) => {
    // Define the logic to handle adding job posts
    console.log('Adding job post with data:', formData);
  };

  return (
    <>
      <HeaderTem />
      <div>
        <h1>Add Post Page</h1>
        <AddJobPostForm onAddJobPost={handleAddJobPost} />
      </div>
      <CustomFooter />
    </>
  );
}
