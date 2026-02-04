



import React from "react";
import { Star } from "lucide-react";

const RightCard = ({ number, title, role, price }) => {
  return (
    <div
      className="
        flex
        items-center
        gap-4
        bg-white
        rounded-xl
        p-4
        w-80
        border border-gray-200
        hover:border-indigo-500
        hover:shadow-md
        transition-all
        duration-200
      "
    >
      {/* Image */}
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHdagsMi1OMVaSupuapigsS_8pvDHEYPBwyw&s"
        alt=""
        className="w-16 h-16 rounded-lg object-cover"
      />

      {/* Info */}
      <div className="flex-1">
        <h3 className="text-sm font-semibold text-gray-800">{title}</h3>

        <p className="text-xs text-gray-500">{role}</p>

        {/* rating */}
        <div className="flex items-center gap-1 mt-1 text-yellow-500">
          <Star size={12} fill="currentColor" />
          <Star size={12} fill="currentColor" />
          <Star size={12} fill="currentColor" />
          <Star size={12} fill="currentColor" />
          <Star size={12} />
        </div>
      </div>

      {/* Right side */}
      <div className="text-right">
        <p className="text-indigo-600 font-semibold text-sm">{price}</p>

        <button
          className="
            mt-1
            text-xs
            bg-indigo-600
            text-white
            px-3
            py-1
            rounded-md
            hover:bg-indigo-700
          "
        >
          View
        </button>
      </div>
    </div>
  );
};

export default RightCard;
