import React from "react";
import { useSelector } from "react-redux";
import Team from "./Team";
import {
  setBackendDev,
  setDevOps,
  setFrontendDev,
  setMobileDev,
  setProductManager,
  setQaDev,
  setUxDev,
} from "../../features/users/userSlice";

const Categories = () => {
  const {
    productManager,
    frontendDev,
    backendDev,
    uxDev,
    qaTester,
    mobileDev,
    devOps,
  } = useSelector((state) => state.users.categories);
  return (
    <div>
      <h1 className="text-xl text-blue-800">Categories</h1>
      <Team
        profile="Project Manger"
        users={productManager?.users}
        handleClick={setProductManager}
      />
      <Team
        profile="Frontend Developer"
        users={frontendDev?.users}
        handleClick={setFrontendDev}
      />
      <Team
        profile="Backend Developer"
        users={backendDev?.users}
        handleClick={setBackendDev}
      />
      <Team
        profile="UI/UX Designer"
        users={uxDev?.users}
        handleClick={setUxDev}
      />
      <Team
        profile="QA/Tester"
        users={qaTester?.users}
        handleClick={setQaDev}
      />
      <Team
        profile="Mobile Developer"
        users={mobileDev?.users}
        handleClick={setMobileDev}
      />
      <Team profile="DevOps" users={devOps?.users} handleClick={setDevOps} />
    </div>
  );
};

export default Categories;
