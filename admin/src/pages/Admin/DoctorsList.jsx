import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";

const DoctorsList = () => {
  const { doctors, changeAvailability, aToken, getAllDoctors } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="m-5 max-h-[90vh] overflow-y-scroll">
      <h1 className="text-lg font-medium">All Doctors</h1>
      <div className="w-full flex flex-wrap gap-4 pt-5 gap-y-6">
       {doctors.map((item, index) => (
  <div
    className="border border-[#C9D8FF] rounded-xl w-72 cursor-pointer overflow-hidden group hover:-translate-y-1 transition-transform duration-300"
    key={index}
  >
    {/* غلاف الصورة بحجم أكبر */}
    <div className="w-full h-60 bg-[#EAEFFF] overflow-hidden group-hover:bg-primary transition-colors duration-500">
      <img
        className="w-full h-full object-cover object-top"
        src={item.image}
        alt={item.name}
      />
    </div>

    <div className="p-4">
      <p className="text-[#262626] text-xl font-semibold">{item.name}</p>
      <p className="text-[#5C5C5C] text-base">{item.speciality}</p>
      <div className="mt-3 flex items-center gap-2 text-base">
        <input
          onChange={() => changeAvailability(item._id)}
          type="checkbox"
          checked={item.available}
          className="cursor-pointer"
        />
        <p>Available</p>
      </div>
    </div>
  </div>
))}

      </div>
    </div>
  );
};

export default DoctorsList;
