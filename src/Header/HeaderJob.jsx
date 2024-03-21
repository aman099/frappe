import React from "react";

function HeaderJob() {
  return (
    <div className="header mx-5 py-4 mt-6 mb-0">
      <div className="header-container flex justify-between items-center max-w-6xl">
        <h3 className="text-2xl  font-semibold">Job Openings</h3>
        <button className="btn bg-slate-900 text-white p-3 py-1 rounded-lg mr-4">
          Post a Job
        </button>
      </div>
    </div>
  );
}

export default HeaderJob;
