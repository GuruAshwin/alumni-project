// "use client"
// import React, { useState } from 'react';
// import "./posts.css"; // Ensure this CSS file exists and is correctly linked
// // Assuming these components exist and are imported correctly
// import HeaderTem from "@/app/components/Header/Header";
// import CustomFooter from "@/app/components/footer/footer";
// import ReactDOM from 'react-dom'; // Your main app component
// import AddJobPostForm from "../AddPost/page"
// function JobPost({ jobDetails, onApply }) {
//   // Assuming jobDetails contains { title, description, photoUrl, datePosted }
//   const isActive = new Date() - new Date(jobDetails.datePosted) < 30 * 24 * 60 * 60 * 1000; // Active for 30 days

//   return (
//     <div className="post">
//       {jobDetails.photoUrl && <img src={jobDetails.photoUrl} alt="Job" className="postImage"/>}
//       <h3>{jobDetails.title}</h3>
//       <p className="postDescription">{jobDetails.description}</p>
//       <button disabled={!isActive} onClick={() => onApply(jobDetails.title)}>
//         {isActive ? 'Apply Now' : 'Application Closed'}
//       </button>
//     </div>
//   );
// }



// function PostPage() {
//   const [posts, setPosts] = useState([]);
//   const [jobPosts, setJobPosts] = useState([]); // Assuming jobPosts have similar structure to posts

//   const addPost = (newPost) => {
//     setPosts([...posts, newPost]);
//   };

//   const addJobPost = (newJobPost) => {
//     setJobPosts([...jobPosts, newJobPost]);
//   };

//   const applyToJob = (jobTitle) => {
//     console.log(`Applied to ${jobTitle}`);
//     // Here you would handle the application logic, perhaps updating the state to reflect that the user has applied
//   };
  

//   return (
//     <>
//       <HeaderTem />
//       <div className="contentContainer">
//         {/* Display job posts */}
//         <div className="jobFeed">
//           {jobPosts.map((job, index) => (
//             <JobPost key={index} jobDetails={job} onApply={applyToJob} />
//           ))}
//         </div>
//         {/* Display regular posts */}
//         <div className="postContainer">
//           {posts.map((post, index) => (
//             <AddJobPostForm key={index} photoUrl={post.photoUrl} description={post.description} />
//           ))}
//         </div>
//       </div>
//       {/* Link/Button to navigate to Add Post Page */}
//       <div className="addPostButton">
//       <a href="/routes/AddPost">
//   <button>Add NEW POST</button>
// </a>

//         {/* Implementation depends on your routing setup */}
//       </div>
//       <CustomFooter />
//     </>
//   );
// }

// export default PostPage;
// function JobPostsList({ jobPosts }) {
//   return (
//     <div>
//       {jobPosts.map((post, index) => (
//         <div key={index}>
//           <h3>{post.title}</h3>
//           {/* Display other post details */}
//           <p>{post.description}</p>
//           {/* Check and display if the post is active or expired based on datePosted */}
//           <p>Status: {new Date() - new Date(post.datePosted) < 30 * 24 * 60 * 60 * 1000 ? 'Active' : 'Expired'}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
"use client";
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HeaderTem from "@/app/components/Header/Header";
import CustomFooter from "@/app/components/footer/footer";
import JobPost from '@/app/components/jobposttemplate/jobpost'; // Import JobPost component
import { useRouter } from 'next/navigation';
import "./posts.css"



function PostPage() {
  const [jobPosts, setJobPosts] = useState([]);
  const [loading, setLoading] = useState(true); // State to manage loading state

  const router = useRouter();

  useEffect(() => {
    // Fetch job posts when component mounts
    fetchJobPosts();
  }, []);

  const fetchJobPosts = async () => {
    try {
      const response = await axios.get(`http://127.0.0.1:8100/postlists`);
      // setJobPosts(response.data); // Set job posts state with data from API
      const resposeData = response.data;


      setJobPosts(response.data);
      setLoading(false); // Update loading state
    } catch (error) {
      console.error('Error fetching job posts:', error);
      setLoading(false); // Update loading state even if there's an error
    }
  };

  // const onClickfunction = () => {
  //   router.push("/routes/AddPost");
  // }

  

  return (
    <>
      <HeaderTem />
      <div className='MainContainer'> 
      <div className="contentContainer">
        {/* Display job posts */}
        <div className="jobFeed">
          {loading ? ( // Display loading message if data is being fetched
            <p>Loading job posts...</p>
          ) : (  
            jobPosts.map((job, index) => (
              <JobPost key={index} jobDetails={job} className="jobPost"/>
            ))
          )}
        </div>
      </div>
      {/* Button to navigate to Add Job Page */}
      <div className="addJobButton">
        <button onClick={onClickfunction}>ADD POST</button>
      </div>
      </div>
      <CustomFooter />
    </>
  );
}

export default PostPage;

// "use client";
// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [jobPosts, setJobPosts] = useState([]);
  
//   const fetchRecentJobPosts = async () => {
//     try {
//       const response = await axios.get('/postlists'); // Assuming your backend API is configured to handle this endpoint
//       setJobPosts(response.data); // Update state with the retrieved job posts
//     } catch (error) {
//       console.error('Error fetching job posts:', error);
//     }
//   };

//   return (
//     <div>
//       <button onClick={fetchRecentJobPosts}>Fetch Recent Job Posts</button>
//       {/* Render the retrieved job posts */}
//       <ul>
//         {jobPosts.map((jobPost, index) => (
//           <li key={index}>{jobPost.title}</li> 
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;




