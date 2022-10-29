import React from "react";
import { useEffect } from "react";
import Categories from "../../components/categories/Categories";
import Stepper from "../../components/stepper/Stepper";
import TeamMembers from "../../components/teamMembers/TeamMembers";
import { fetchUsers } from "../../features/users/userSlice";
import { useDispatch } from "react-redux";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <div className="max-w-[1000px] mx-auto">
      <Stepper />
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <Categories />
        <TeamMembers />
      </div>
    </div>
  );
};

export default HomePage;
