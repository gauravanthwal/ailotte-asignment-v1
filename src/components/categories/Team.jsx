import React from "react";
import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";
import User from "./User";

const Team = ({ profile, users, handleClick }) => {
  const [show, setShow] = useState(false);
  return (
    <div className="my-2">
      {/* Toggle Button */}
      <div
        className={`bg-blue-600 flex justify-between items-center text-white py-2 px-4 rounded-t-md ${
          !show && "rounded-b-md"
        }`}
      >
        <p>{profile}</p>
        <button className="" onClick={() => setShow(!show)}>
          {show ? (
            <AiOutlineMinusCircle className="w-6 h-6 text-white" />
          ) : (
            <AiOutlinePlusCircle className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      {/* Content */}
      {show && (
        <div className="bg-gray-100 p-2 rounded-b-md shadow-xl border-2">
          {users.map((user, i) => (
            <User key={i} user={user} handleClick={handleClick} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;
