import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AadharApp = () => {
  const [selectedForm, setSelectedForm] = useState(null);
  const { register, handleSubmit, reset } = useForm();
  const [message, setMessage] = useState("");

  const handleSelection = (form) => {
    setSelectedForm(form);
    setMessage("");
    reset();
  };

  const onSubmitApply = (data) => {
    console.log("Apply Form Data:", data);
    setMessage("✅ Aadhar Application Submitted Successfully!");
    reset();
  };

  const onSubmitUpdate = (data) => {
    console.log("Update Form Data:", data);
    setMessage("✅ Aadhar Updated Successfully!");
    reset();
  };

  const onSubmitSearch = async (data) => {
    if (data.searchAadhar.length !== 12) {
      setMessage("❌ Aadhar number must be exactly 12 digits.");
      return;
    }

    try {
      // Replace with actual API endpoint
      const response = await fetch(`http://localhost:5000/check-aadhar/${data.searchAadhar}`);
      const result = await response.json();
      setMessage(result.exists ? "✅ Aadhar exists!" : "❌ Aadhar not found!");
    } catch (error) {
      setMessage("❌ Error checking Aadhar. Try again!");
      console.error("Search Error:", error);
    }

    reset();
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl space-y-4">
      <h2 className="text-2xl font-bold text-center">What do you want to do?</h2>
      
      {/* Buttons to select an action */}
      <div className="flex justify-center space-x-4">
        <button onClick={() => handleSelection("apply")} className="bg-blue-500 text-white px-4 py-2 rounded">
          Apply Aadhar
        </button>
        <button onClick={() => handleSelection("update")} className="bg-yellow-500 text-white px-4 py-2 rounded">
          Update Aadhar
        </button>
        <button onClick={() => handleSelection("search")} className="bg-gray-500 text-white px-4 py-2 rounded">
          Search Aadhar
        </button>
      </div>

      
     {/* Show selected form */}
     {selectedForm === "apply" && (
  <form onSubmit={handleSubmit(onSubmitApply)} className="space-y-6">
    <h2 className="text-2xl font-bold mb-4">Apply for New Aadhar</h2>

    {/* First Name */}
    <div className="mb-6">
      <label className="block font-medium mb-2" htmlFor="firstName">First Name:  </label>
      <input 
        {...register("firstName")} 
        id="firstName"
        className="w-full p-2 border rounded" 
        required 
      />
    </div>

    {/* Last Name */}
    <div className="mb-6">
      <label className="block font-medium mb-2" htmlFor="lastName">Last Name:  </label>
      <input 
        {...register("lastName")} 
        id="lastName"
        className="w-full p-2 border rounded" 
        required 
      />
    </div>

    {/* Date of Birth */}
    <div className="mb-6">
      <label className="block font-medium mb-2" htmlFor="dob">Date of Birth:  </label>
      <input 
        {...register("dob")} 
        id="dob"
        type="date" 
        className="w-full p-2 border rounded" 
        required 
      />
    </div>

    {/* Address */}
    <div className="mb-6">
      <label className="block font-medium mb-2" htmlFor="address">Address:  </label>
      <input 
        {...register("address")} 
        id="address"
        className="w-full p-2 border rounded" 
        required 
      />
    </div>

    {/* Phone Number */}
    <div className="mb-6">
      <label className="block font-medium mb-2" htmlFor="phone">Phone Number:  </label>
      <input 
        {...register("phone")} 
        id="phone"
        type="tel" 
        className="w-full p-2 border rounded" 
        required 
      />
    </div>

    {/* Gender Selection */}
    <div className="mb-6">
      <label className="block font-medium mb-2" htmlFor="gender">Gender:  </label>
      <select {...register("gender")} id="gender" className="w-full p-2 border rounded" required>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </select>
    </div>

    {/* Submit Button */}
    <div className="mt-6">
      <button type="submit" className="w-full bg-blue-500 text-white p-3 rounded">
        Submit
      </button>
    </div>
  </form>
)}

      {selectedForm === "update" && (
        <form onSubmit={handleSubmit(onSubmitUpdate)} className="space-y-4">
          <h2 className="text-xl font-bold">Update Aadhar Details</h2>
          <input {...register("aadharNumber")} type="text" maxLength="12" placeholder="Aadhar Number" className="w-full p-2 border rounded" required />
          <input {...register("newAddress")} placeholder="New Address" className="w-full p-2 border rounded" required />
          <input {...register("newPhone")} type="tel" placeholder="New Phone Number" className="w-full p-2 border rounded" required />
          <button type="submit" className="w-full bg-yellow-500 text-white p-2 rounded">Submit</button>
        </form>
      )}

      {selectedForm === "search" && (
        <form onSubmit={handleSubmit(onSubmitSearch)} className="space-y-4">
          <h2 className="text-xl font-bold">Search Aadhar Number</h2>
          <input
            {...register("searchAadhar")}
            type="text"
            maxLength="12"
            placeholder="Enter Aadhar Number"
            className="w-full p-2 border rounded text-center"
            onInput={(e) => e.target.value = e.target.value.replace(/\D/, '')} // Prevent non-numeric input
          />
          <button type="submit" className="w-full bg-gray-500 text-white p-2 rounded">Search</button>
        </form>
      )}

      {/* Display success or error message */}
      {message && <p className="text-center text-lg font-bold mt-4">{message}</p>}
    </div>
  );
};

export default AadharApp;
