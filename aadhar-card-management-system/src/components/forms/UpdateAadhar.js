import React, { useState } from "react";
import { useForm } from "react-hook-form";

const UpdateAadhar = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
      console.log("Update Form Data:", data);
      alert("Aadhar details updated successfully!");
      reset();
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-lg mx-auto bg-white shadow-lg rounded-xl space-y-4">
        <h2 className="text-xl font-bold text-center">Update Aadhar Details</h2>
        <input {...register("aadharNumber")} type="number" placeholder="Aadhar Number" className="w-full p-2 border rounded" required />
        <input {...register("updatedAddress")} placeholder="New Address" className="w-full p-2 border rounded" />
        <input {...register("updatedPhone")} type="tel" placeholder="New Phone Number" className="w-full p-2 border rounded" />
        <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Submit</button>
      </form>
    );
  };
  export default UpdateAadhar;