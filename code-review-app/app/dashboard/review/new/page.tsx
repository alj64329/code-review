"use client";
import { FileDropbox } from "@/components/review/FileDropbox";
import GitHubUrlInpInput from "@/components/review/GitHubUrlInpInput";
import React, { useState } from "react";

const NewReview = () => {
  const [toggleGitHub, setToggleGitHub] = useState<boolean>(false);
  const handleToggle = (on: boolean) => {
    setToggleGitHub(on);
  };
  return (
    <main className="h-screen w-full py-4 px-12">
      <div className="w-[55vw] md:max-w-3xl mx-auto flex flex-col gap-1 pt-10">
        <h2 className="font-extrabold text-3xl text-center">
          Start a new review
        </h2>
        <p className="text-white-30 text-center">
          Upload a file or paste GitHub link to get instant AI feedback.
        </p>
        <div className="py-10">
          <FileToggleButton
            isGitHubOn={toggleGitHub}
            handleToggleGit={handleToggle}
          />
        </div>

        {toggleGitHub ? <GitHubUrlInpInput /> : <FileDropbox />}
      </div>
    </main>
  );
};

export default NewReview;

type Props = {
  isGitHubOn: boolean;
  handleToggleGit: (on: boolean) => void;
};
const FileToggleButton = ({ handleToggleGit, isGitHubOn }: Props) => {
  return (
    <div className="flex items-center gap-4 border-[0.5px] border-[#ffffff14] w-fit mx-auto rounded-lg p-1">
      <button
        onClick={() => handleToggleGit(false)}
        className={`file-toggle-btn ${!isGitHubOn && "file-toggle-btn-on"}`}
      >
        📄 Upload File
      </button>
      <button
        onClick={() => handleToggleGit(true)}
        className={`file-toggle-btn ${isGitHubOn && "file-toggle-btn-on"}`}
      >
        🔗 GitHub URL
      </button>
    </div>
  );
};
