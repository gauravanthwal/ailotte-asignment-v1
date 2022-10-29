import React from "react";
import Team from "./Team";
import { useDispatch, useSelector } from "react-redux";
import {
  setBackendDev,
  setDevOps,
  setFrontendDev,
  setMobileDev,
  setProductManager,
  setQaDev,
  setUxDev,
} from "../../features/users/userSlice";
import { finalStep } from "../../features/stepper/stepperSlice";

const TeamMembers = () => {
  const dispatch = useDispatch();
  const {
    productManager,
    frontendDev,
    backendDev,
    uxDev,
    qaTester,
    mobileDev,
    devOps,
  } = useSelector((state) => state.users.selectedTeam);

  const onFinalStep = () => {
    dispatch(finalStep());
  };
  return (
    <>
      <div>
        <h1 className="text-xl text-blue-800">Team Members</h1>
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
      </div>
      <div>
        <div className="text-right">
          <button
            onClick={onFinalStep}
            className="bg-indigo-600 px-4 py-[2px] text-white rounded-md hover:bg-indigo-500"
          >
            Next
          </button>
        </div>
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
    </>
  );
};

export default TeamMembers;
