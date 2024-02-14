"use client";
import React, { useState } from 'react';
import './profile.css'; // Import your CSS file for styling
import HeaderTem from '@/app/components/Header/Header';
import CustomFooter from '@/app/components/footer/footer';
function EditableProfile(){
    const [userInfo, setUserInfo] = useState({
        username: 'JohnDoe',
        email: 'john.doe@example.com',
        yearOfGraduation: '2020',
        designation: 'Software Engineer',
        contactNumber: '1234567890',
        profilePicture: '/blank-profile.png', // Replace with the path to your default image
    });

    const [isEditMode, setIsEditMode] = useState(false);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];

        if (file) {
            setUserInfo((prevInfo) => ({
                ...prevInfo,
                profilePicture: URL.createObjectURL(file),
            }));
        }
    };

    const handleToggleEditMode = () => {
        setIsEditMode((prevMode) => !prevMode);
    };

    const handleSaveChanges = () => {
        // You can implement logic to update the user's profile on the server

        console.log('Profile updated:', userInfo);
        setIsEditMode(false); // Exit edit mode after saving changes
    };

    return (
        <>
            <HeaderTem></HeaderTem>
            <div className="profile-container">
                <h2>Alumni of Sathyabama</h2>
                <div className={`profile-picture-container ${isEditMode ? 'edit-mode' : ''}`}>
                    {userInfo.profilePicture && (
                        <img
                            src={userInfo.profilePicture}
                            alt="Profile"
                            className="profile-picture"
                        />
                    )}
                    {isEditMode && (
                        <input
                            type="file"
                            id="profilePicture"
                            name="profilePicture"
                            accept="image/*"
                            onChange={handleFileChange}
                        />
                    )}
                </div>
                <form className="form-container">
                    <div className="form-pair">
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={userInfo.username}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userInfo.email}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="yearOfGraduation">Year of Graduation</label>
                        <input
                            type="text"
                            id="yearOfGraduation"
                            name="yearOfGraduation"
                            value={userInfo.yearOfGraduation}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="designation">Designation</label>
                        <input
                            type="text"
                            id="designation"
                            name="designation"
                            value={userInfo.designation}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    <div className="form-pair">
                        <label htmlFor="contactNumber">Contact Number</label>
                        <input
                            type="text"
                            id="contactNumber"
                            name="contactNumber"
                            value={userInfo.contactNumber}
                            onChange={handleChange}
                            disabled={!isEditMode}
                        />
                    </div>
                    {/* Add more pairs of fields as needed */}
                    {isEditMode && (
                        <button type="button" onClick={handleSaveChanges}>
                            Save Changes
                        </button>
                    )}
                </form>
                <button type="button" onClick={handleToggleEditMode}>
                    {isEditMode ? 'Cancel' : 'Edit Profile'}
                </button>
            </div>
            <CustomFooter></CustomFooter>
        </>
    );
};

export default EditableProfile;
