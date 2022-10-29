import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch } from "react-redux";

const User = ({ user, handleClick }) => {
  const [showRemove, setShowRemove] = useState(false);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(handleClick({ remove: true, user }));
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

      <div className="relative flex justify-center items-center">
        <button
          className="py-1 text-gray-800 w-6 h-6 bg-gray-100 flex justify-center rounded-full hover:bg-gray-300"
          onClick={() => setShowRemove(!showRemove)}
        >
          <BsThreeDotsVertical />
        </button>
        {showRemove && (
          <div className="absolute right-6 border border-gray-400 shadow-md px-2 py-1 rounded-md hover:bg-gray-200 text-sm text-gray-400 font-light">
            <button onClick={onClick}>Remove</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default User;
