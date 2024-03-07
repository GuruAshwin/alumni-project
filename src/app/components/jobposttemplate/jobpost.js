// import React from 'react';

// function JobPost({ jobDetails, onApply }) {
//   //const isActive = new Date() - new Date(jobDetails.datePosted) < 30 * 24 * 60 * 60 * 1000; // Active for 30 days
//   const isActive = true;

//   return (
//     <div className="jobPost">
//       {jobDetails.photoUrl && <img src={jobDetails.photoUrl} alt="Job" className="jobPostImage"/>}
//       <h3>{jobDetails.title}</h3>
//       <p className="jobPostDescription">{jobDetails.description}</p>
//       <button disabled={!isActive} onClick={() => onApply(jobDetails.title)}>
//         {isActive ? 'Apply Now' : 'Application Closed'}
//       </button>
//     </div>
//   );
// }

// export default JobPost;

import React from 'react';
import "./jobpoststyles.css";
function JobPost({jobDetails}) {
  const isActive = new Date() - new Date(jobDetails.datePosted) < 30 * 24 * 60 * 60 * 1000;
  const onApply = (jobTitle) => {
    // Handle the apply functionality here, e.g., open a modal, send a request to the server, etc.
    console.log(`Applying to job with title: ${jobTitle}`);
  };
  return (
    <div className="post">
      <h3>{jobDetails.title}</h3>
      <p className="postDescription">{jobDetails.description}</p>
      <p className="postMail">{jobDetails.email}</p>
      <p>{jobDetails.datePosted}</p>
      <button disabled={!isActive} onClick={() => onApply(jobDetails.title)}>
         {isActive ? 'Apply Now' : 'Application Closed'}
      </button>
      {/* Remove the button for applying to the job */}
    </div>
  );
}

export default JobPost;

