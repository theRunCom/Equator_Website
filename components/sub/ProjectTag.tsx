import React from "react";

interface ProjectTagProps {
  name: string;
  onClick: (name: string) => void;
  isSelected: boolean;
}

const ProjectTag = ({ name, onClick, isSelected }: ProjectTagProps) => {
  const buttonStyles = isSelected
    ? "border-primary-500"
    : "border-slate-600 hover:border-white";

  return (
    <button
      className={`${buttonStyles} text-theme rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
