import React, { useState } from "react";
import { useForm } from "react-hook-form";

const SearchAadhar = () => {
  const { register, handleSubmit, reset, watch } = useForm();
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const aadharNumber = watch("searchAadhar", ""); // Watch input value

  const onSubmit = async (data) => {
    if (data.searchAadhar.length !== 12) {
      setError("Aadhar number must be exactly 12 digits.");
      return;
    }

    try {
      // Replace 'your-backend-api-url' with your actual API endpoint
      const response = await fetch(`http://localhost:5000/check-aadhar/${data.searchAadhar}`);
      const result = await response.json();

      if (result.exists) {
        setMessage("✅ Aadhar exists!");
      } else {
        setMessage("❌ Aadhar not found!");
      }

      setError(""); // Clear any previous errors
    } catch (error) {
      setError("Error checking Aadhar. Try again!");
      console.error("Search Error:", error);
    }
    
    reset();
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl space-y-4">
      <h2 className="text-xl font-bold text-center">Search Aadhar Number</h2>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <input
          {...register("searchAadhar", {
            required: "Aadhar number is required",
            pattern: {
              value: /^[0-9]{12}$/,
              message: "Aadhar number must be exactly 12 digits",
            },
          })}
          type="text"
          maxLength="12"
          placeholder="Enter Aadhar Number"
          className="w-full p-2 border rounded text-center appearance-none"
          onInput={(e) => e.target.value = e.target.value.replace(/\D/, '')} // Prevent non-numeric input
        />
        
        {error && <p className="text-red-500 text-sm">{error}</p>} {/* Error message */}

        <button
          type="submit"
          className={`w-full text-white p-2 rounded ${
            aadharNumber.length === 12 ? "bg-gray-600" : "bg-gray-400 cursor-not-allowed"
          }`}
          disabled={aadharNumber.length !== 12} // Disable button if not 12 digits
        >
          Search
        </button>
      </form>

      {message && (
        <p className="text-center text-lg font-bold mt-4">
          {message}
        </p>
      )}
    </div>
  );
};

export default SearchAadhar;
