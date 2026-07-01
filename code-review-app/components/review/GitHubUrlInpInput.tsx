import { useState } from "react";

const GitHubUrlInpInput = () => {
  const [githubUrl, setGithubUrl] = useState<string>("");
  return (
    <div className="bg-[#111318] border-[0.5px] rounded-xl border-[#ffffff14] p-14 w-full">
      <div>
        <div className="text-white-60 py-4">Paste a GItHub file URL</div>
        <div className="flex mb-8 border border-white-10 rounded-xl">
          <input
            type="url"
            className="flex-1 text-white-30 py-2 px-4 text-sm"
            placeholder="github.com/owner/repo/blob/main/src/auth.js"
          />
          <button className="w-fit px-6 py-2 bg-[#7B61FF] text-white rounded-xl">
            Fetch
          </button>
        </div>
      </div>
    </div>
  );
};

export default GitHubUrlInpInput;
