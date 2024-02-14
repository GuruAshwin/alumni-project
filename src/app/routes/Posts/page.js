"use client"
import React, { useState } from 'react';
import "./posts.css"; // Ensure this CSS file exists and is correctly linked
// Assuming these components exist and are imported correctly
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
import ReactDOM from 'react-dom'; // Your main app component
import AddJobPostForm from "../AddPost/page"
function JobPost({ jobDetails, onApply }) {
  // Assuming jobDetails contains { title, description, photoUrl, datePosted }
  const isActive = new Date() - new Date(jobDetails.datePosted) < 30 * 24 * 60 * 60 * 1000; // Active for 30 days

  return (
    <div className="post">
      {jobDetails.photoUrl && <img src={jobDetails.photoUrl} alt="Job" className="postImage"/>}
      <h3>{jobDetails.title}</h3>
      <p className="postDescription">{jobDetails.description}</p>
      <button disabled={!isActive} onClick={() => onApply(jobDetails.title)}>
        {isActive ? 'Apply Now' : 'Application Closed'}
      </button>
    </div>
  );
}



function PostPage() {
  const [posts, setPosts] = useState([]);
  const [jobPosts, setJobPosts] = useState([]); // Assuming jobPosts have similar structure to posts

  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  const addJobPost = (newJobPost) => {
    setJobPosts([...jobPosts, newJobPost]);
  };

  const applyToJob = (jobTitle) => {
    console.log(`Applied to ${jobTitle}`);
    // Here you would handle the application logic, perhaps updating the state to reflect that the user has applied
  };
  

  return (
    <>
      <HeaderTem />
      <div className="contentContainer">
        {/* Display job posts */}
        <div className="jobFeed">
          {jobPosts.map((job, index) => (
            <JobPost key={index} jobDetails={job} onApply={applyToJob} />
          ))}
        </div>
        {/* Display regular posts */}
        <div className="postContainer">
          {posts.map((post, index) => (
            <AddJobPostForm key={index} photoUrl={post.photoUrl} description={post.description} />
          ))}
        </div>
      </div>
      {/* Link/Button to navigate to Add Post Page */}
      <div className="addPostButton">
      <a href="/routes/AddPost">
  <button>Add NEW POST</button>
</a>

        {/* Implementation depends on your routing setup */}
      </div>
      <CustomFooter />
    </>
  );
}

export default PostPage;
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





//  // The context provider you created
// "use client";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import HeaderTem from '@/app/components/Header/Header'; // Import your HeaderTem component

// const AddJobPostForm = () => {
//   const [jobPosts, setJobPosts] = useState([]);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     // Fetch job posts when component mounts or currentPage changes
//     fetchJobPosts();
//   }, [currentPage]);

//   const fetchJobPosts = async () => {
//     try {
//       const response = await axios.get(`http://127.0.0.1:8100/postlists`, {
//         params: {
//           page: currentPage, // Current page
//           limit: 10 // Maximum of 10 posts per page
//         }
//       });
//       const { data, totalPages } = response.data;
//       setJobPosts(data);
//       setTotalPages(totalPages);
//     } catch (error) {
//       console.error('Error fetching job posts:', error);
//     }
//   };

//   const handlePageChange = (page) => {
//     setCurrentPage(page);
//   };

//   return (
//     <>
//       <HeaderTem />
//       <div className="jobPostList">
//         <h2>Job Posts</h2>
//         <ul>
//           {jobPosts.map(jobPost => (
//             <li key={jobPost.id}>
//               <h3>{jobPost.title}</h3>
//               <p>{jobPost.description}</p>
//               <p>{jobPost.datePosted}</p>
//               {/* Add more details as needed */}
//             </li>
//           ))}
//         </ul>
//         <div className="pagination">
//           {Array.from({ length: totalPages }, (_, index) => index + 1).map(page => (
//             <button key={page} onClick={() => handlePageChange(page)}>{page}</button>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default AddJobPostForm;

