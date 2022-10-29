import React from "react";
import User from "./User";

const Team = ({ profile, users, handleClick }) => {
  return (
    <div className="my-2">
      {/* Toggle Button */}
      <div
        className={`bg-indigo-500 flex justify-center items-center text-white py-2 px-4 rounded-t-md ${
          users.length < 1 && "rounded-b-md"
        }`}
      >
        <p>{profile}</p>
      </div>

      {/* Content */}
      {users.length > 0 && (
        <div className={`bg-gray-100 p-2 rounded-b-md shadow-xl border-2`}>
          {users?.map((user, i) => (
            <User key={i} user={user} handleClick={handleClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
