import React from "react";
import { checkedIcon } from "../../assets/icons/icons";
import { useSelector } from "react-redux";

const steps = [
  {
    step: 1,
    name: "Create Team",
  },
  {
    step: 2,
    name: "Add Team",
  },
  {
    step: 3,
    name: "Preview & Hire",
  },
];

const Stepper = () => {
  const {currentStep} = useSelector(state=> state.stepper)

  return (
    <div className="flex justify-between mt-10 px-8 py-4">
      {steps.map((item, i) => (
        <div key={item.step}>
          <div className="flex items-center">
            <div
              className={`circle w-7 h-7 ${
                item.step <= currentStep? "bg-blue-500" : "bg-gray-300"
              } rounded-full flex justify-center items-center`}
            >
              {checkedIcon}
            </div>

            {i < steps.length - 1 && (
              <div className="step-line px-2">
                <div
                  className={`h-[2px] w-[400px] md:w-[400px] ${
                    item.step <= currentStep ? "bg-blue-600" : "bg-gray-300"
                  }`}
                ></div>
              </div>
            )}
          </div>

          <div className="my-2">
            <p className="text-gray-700">Step {item.step}</p>
            <p className="text-blue-800">{item.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Stepper;
