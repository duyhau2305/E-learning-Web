import React, { useState, useEffect } from 'react';

// Define the key for local storage
const localStorageKey = 'userProfileData';

// Initial account details
const initialAccount = {
  fullName: 'William Smith',
  avatar: '/public/assets/image/ava-big-author.jpg',
  email: 'smith@email.com',
  birthday: '23/05/1993',
  phone: '0123456789',
  gender: 'Male',
  job: 'Assistant Teacher',
  username: 'wsmith93',
  password: 'mySecurePassword',
};

export default function Profile() {
  // Initialize state from local storage or fallback to initial data
  const [account, setAccount] = useState(() => {
    const savedProfile = localStorage.getItem(localStorageKey);
    return savedProfile ? JSON.parse(savedProfile) : initialAccount;
  });

  // Track whether we are in edit mode or not
  const [editMode, setEditMode] = useState(false);

  // State to manage dialog visibility
  const [showDialog, setShowDialog] = useState(false);

  // State to manage new password and modal visibility
  const [newPassword, setNewPassword] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  // Update local storage when account state changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(account));
  }, [account]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAccount({ ...account, [name]: value });
  };

  const handleAvatarChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = function (e) {
        setAccount({ ...account, avatar: e.target.result });
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Function to show dialog and hide it after 3 seconds
  const displayDialog = (message) => {
    setShowDialog(message);
    setTimeout(() => setShowDialog(false), 1000);
  };

  // Function to save changes
  const saveChanges = () => {
    setEditMode(false);
    displayDialog('profileUpdate');
  };

  // Function to open the change password modal
  const openChangePasswordModal = () => {
    setModalVisible(true);
  };

  // Function to close the change password modal
  const closeChangePasswordModal = () => {
    setModalVisible(false);
  };

  // Function to change password
  const changePassword = () => {
    if (newPassword === confirmPassword) {
      setAccount({ ...account, password: newPassword });
      setNewPassword('');
      setOldPassword('');
      setConfirmPassword('');
      closeChangePasswordModal();
      displayDialog('passwordChange');
    } else {
      alert('New password and confirm password must match.');
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <>
      {/* Profile header */}
      <div
        className="pt-48 pb-28"
        style={{
          backgroundImage: `url('/public/assets/image/header-banner.jpg')`,
        }}
      >
        <p className="text-2xl md:text-4xl font-bold text-black text-center pb-3">
          Profile
        </p>
        <p className="text-base text-center">Home / Profile</p>
      </div>

      {/* Profile content */}
      <div className="container max-w-[1340px] mx-auto px-2 py-4 flex gap-8">
        {/* Avatar and name section */}
        <div className="w-1/3 bg-white shadow p-10 flex flex-col items-center gap-4">
          <img
            src={account.avatar}
            className="max-w-[150px] rounded-full"
            alt="Avatar"
          />
          {editMode ? (
            <>
              <input
                type="text"
                name="fullName"
                value={account.fullName}
                onChange={handleInputChange}
                className="text-2xl font-bold text-black text-center"
              />
              <input
                type="text"
                name="job"
                value={account.job}
                onChange={handleInputChange}
                className="text-lg text-center"
              />
            </>
          ) : (
            <>
              <p className="text-2xl font-bold text-black">
                {account.fullName}
              </p>
              <p className="text-lg">{account.job}</p>
            </>
          )}
        </div>

        {/* Profile details section */}
        <div className="flex-1 bg-white shadow p-10">
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Username</p>
            {editMode ? (
              <input
                type="text"
                name="username"
                value={account.username}
                onChange={handleInputChange}
                className="font-bold"
              />
            ) : (
              <p className="font-bold">{account.username}</p>
            )}
          </div>

          {/* Password */}
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Password</p>
            {editMode ? (
              <div className="flex items-center">
               <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              className="font-bold"
            />
            <button onClick={togglePasswordVisibility} className="ml-2">
              {showPassword ? 'Hide' : 'Show'}
            </button>
                <button
                  onClick={openChangePasswordModal}
                  className="px-2 py-1 bg-blue-500 text-white rounded ml-2"
                >
                  Change Password
                </button>
              </div>
            ) : (
              <p className="font-bold">[Hidden]</p>
            )}
          </div>

          {/* Full Name */}
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Full Name</p>
            {editMode ? (
              <input
                type="text"
                name="fullName"
                value={account.fullName}
                onChange={handleInputChange}
                className="font-bold"
              />
            ) : (
              <p className="font-bold">{account.fullName}</p>
            )}
          </div>

          {/* Birthday */}
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Birth Day</p>
            {editMode ? (
              <input
                type="date"
                name="birthday"
                value={account.birthday}
                onChange={handleInputChange}
                className="font-bold"
              />
            ) : (
              <p className="font-bold">{account.birthday}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Email</p>
            {editMode ? (
              <input
                type="email"
                name="email"
                value={account.email}
                onChange={handleInputChange}
                className="font-bold"
              />
            ) : (
              <p className="font-bold">{account.email}</p>
            )}
          </div>

          {/* Phone Number */}
          <div className="flex gap-48 border-b p-4 pl-0">
            <p className="text-black font-bold w-1/5">Phone number</p>
            {editMode ? (
              <input
                type="tel"
                name="phone"
                value={account.phone}
                onChange={handleInputChange}
                className="font-bold"
              />
            ) : (
              <p className="font-bold">{account.phone}</p>
            )}
          </div>

          {/* Gender */}
          <div className="flex gap-48 p-4 pl-0">
            <p className="text-black font-bold w-1/5">Gender</p>
            {editMode ? (
              <select
                name="gender"
                value={account.gender}
                onChange={handleInputChange}
                className="font-bold"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                {/* Add other gender options as needed */}
              </select>
            ) : (
              <p className="font-bold">{account.gender}</p>
            )}
          </div>

          {/* Avatar Upload */}
          {editMode && (
            <div className="flex gap-48 p-4 pl-0">
              <p className="text-black font-bold w-1/5">Avatar</p>
              <input
                type="file"
                onChange={handleAvatarChange}
                className="font-bold"
              />
            </div>
          )}
        </div>
      </div>

      {/* Buttons for editing and saving */}
      <div className="container mx-auto text-center py-5">
        {editMode ? (
          <>
            <button
              onClick={saveChanges}
              className="px-4 py-2 bg-green-500 text-white rounded"
            >
              Save Changes
            </button>
            <button
              onClick={() => setEditMode(false)}
              className="px-4 py-2 bg-red-500 text-white rounded"
            >
              Cancel
            </button>
          </>
        ) : (
          <button
            onClick={toggleEditMode}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Edit Profile
          </button>
        )}
      </div>

      {/* Success Dialog */}
      {showDialog && (
        <div className="fixed bottom-4 right-0 m-4 p-4 bg-orange-500 text-white rounded shadow-lg z-50">
          {showDialog === 'profileUpdate' && <p>Profile Updated Successfully!</p>}
          {showDialog === 'passwordChange' && <p>Password Changed Successfully!</p>}
        </div>
      )}

      {/* Change Password Modal */}
      {modalVisible && (
        <div className="fixed top-28 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white w-96 p-4 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Change Password</h2>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Old Password:</label>
              <input
                type="password"
                value={oldPassword}
                onChange={(e) => setOldPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">New Password:</label>
              <input
                type="password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-semibold mb-1">Confirm Password:</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-3 py-2 border rounded-lg"
              />
            </div>
            <div className="text-center">
              <button
                onClick={changePassword}
                className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
              >
                Save Changes
              </button>
              <button
                onClick={closeChangePasswordModal}
                className="px-4 py-2 bg-red-500 text-white rounded"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
