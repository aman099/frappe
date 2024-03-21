import { Fragment } from "react";

function ContentCardJob({ cardItemsJob }) {
  return (
    <>
      {cardItemsJob.map((card, idx) => (
        <div
          key={idx}
          className="card-content flex gap-6 border rounded-lg cursor-pointer py-3 px-5"
        >
          <div className="img-container-job">
            <img
              style={{ width: "50px", height: "50px", borderRadius: "8px" }}
              src={card.companyLogo}
              alt=""
            />
          </div>
          <div className="job-details flex flex-col gap-2">
            <div className="job-info text-sm font-semibold">{card.job}</div>
            <div className="job-location flex gap-5 items-center">
              <span className="text-sm">{card.companyName}</span>
              <span className="flex items-center">
                <i
                  style={{ color: "#8899" }}
                  className="fa-solid fa-location-dot"
                ></i>
                &nbsp;
                <span className="text text-sm">{card.jobLocation}</span>
              </span>
            </div>
            <div className="job-date flex gap-5">
              <div className="label">{card.jobType}</div>
              <div className="date">{card.datePosted}</div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default ContentCardJob;
