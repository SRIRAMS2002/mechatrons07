import React from "react";

const MembersCard = ({ name, image,dept,role }) => {
  const imageUrl = image ? `/Team/Founders/${image}.webp` : "/placeholder.gif";
  return (
    <div>
      <div>
        <div className="mx-auto bg-white rounded-lg shadow-lg hover:shadow-xl shadow-indigo-500/50 hover:shadow-indigo-500/50 overflow-hidden">
          <img
            src={imageUrl}
            alt=""
            className="h-[23rem] w-[20rem] rounded-t-lg object-cover object-center group-hover:opacity-75"
          />
          <div className="p-5 text-center">
            <p className="text-lg font-semibold leading-6 text-gray-900">
              {name}
            </p>
            <div className="flex justify-evenly mt-2">
              <p className="mt-1 truncate font-semibold text-sm leading-5 text-gray-600">
                {dept}
              </p>
              -
              <p className="mt-1 truncate text-sm leading-5 text-gray-600">{role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MembersCard;
