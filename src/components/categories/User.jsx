import React from "react";
import { useDispatch } from "react-redux";
import { forwardCurrentStep } from "../../features/stepper/stepperSlice";

const User = ({ user, handleClick }) => {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(handleClick(user));
    dispatch(forwardCurrentStep());
  };
  return (
    <div className="flex items-center justify-between my-2 border-b-2 p-1 last:border-b-0">
      <div className="user flex items-center">
        <img
          className="rounded-full w-12 h-12 border-2 border-gray-300"
          src={user.picture.thumbnail}
          alt={user.name.first}
        />
        <div className="mx-2">
          <span className="font-semibold text-gray-700 text-sm">
            {user.name.first} {user.name.last}
          </span>
          <p className="text-gray-400 text-xs">{user.exp} yrs Exp</p>
        </div>
      </div>

      <div>
        <button
          className="bg-indigo-800 px-4 text-white rounded-md py-1 shadow-gray-500 shadow-md hover:shadow-lg"
          onClick={onClick}
        >
          Add
        </button>
      </div>
    </div>
  );
};

export default User;
