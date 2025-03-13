import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ApplyAadhar = () => {
  const { register, handleSubmit, reset } = useForm();
  const [submitted, setSubmitted] = useState(false); // State to track form submission

  const onSubmit = (data) => {
    console.log("Apply Form Data:", data);
    setSubmitted(true); // Show success message
    reset();
  };

  if (submitted) {
    return (
      <div className="p-6 max-w-lg mx-auto text-center text-green-600 font-bold text-xl">
        Application submitted successfully!
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl space-y-4">
      <h2 className="text-xl font-bold text-center">Apply for New Aadhar</h2>
      <input {...register("name")} placeholder="Full Name" className="w-full p-2 border rounded" required />
      <input {...register("dob")} type="date" className="w-full p-2 border rounded" required />
      <input {...register("address")} placeholder="Address" className="w-full p-2 border rounded" required />
      <input {...register("phone")} type="tel" placeholder="Phone Number" className="w-full p-2 border rounded" required />
      <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
    </form>
  );
};

export default ApplyAadhar;
