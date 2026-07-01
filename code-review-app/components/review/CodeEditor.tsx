"use client";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import React, { useState } from "react";
import { githubDark } from "@uiw/codemirror-theme-github";

const file = {
  name: "index.ts",
  lang: "Typescript",
};

const CodeEditor = () => {
  const [isAnalyzing, setIsAnalyzing] = useState<boolean>(false);
  const [value, setValue] = React.useState("console.log('hello world!');");
  const onChange = React.useCallback((val: string) => {
    console.log("val:", val);
    setValue(val);
  }, []);
  return (
    <div className="flex flex-col items-center h-full flex-1 min-w-0">
      <div className="flex flex-col w-full">
        <div className="flex items-center justify-between p-3 border-b border-white">
          <div className="font-medium text-white-30 text-[10px]">
            {file.name}
          </div>

          <div className="font-medium lang-btn text-[11px]">{file.lang}</div>
        </div>
        <CodeMirror
          value="console.log('hello world!');"
          theme={githubDark}
          extensions={[langs.tsx()]}
          height="85vh"
          // onChange={(value) => setCode(value)}
        />
      </div>
      <div className="flex w-full justify-between items-center gap-3 border-t border-white/10 bg-[#0F1117] px-4 py-2.5">
        <button
          // onClick={onClear}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/6 text-white/30 hover:text-white/60"
          aria-label="Clear editor"
        >
          ✕
        </button>
        <div>
          <button
            // onClick={onAnalyze}
            disabled={isAnalyzing}
            className="flex-1 rounded-lg bg-[#7B61FF] py-2.5 px-4 text-[14px] font-semibold text-white transition-opacity disabled:opacity-50"
          >
            {isAnalyzing ? "Analyzing…" : "✦  Analyze Code"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CodeEditor;
