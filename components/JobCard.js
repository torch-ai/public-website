import React from "react";
import Grid from "../styles/modules/grid.module.scss";
import Careers from "../styles/modules/careers.module.scss";

const JobCard = ({ job }) => {
  const { title, location, publishDate, remote, jobDescription, url } =
    job.fields;

  const displayCurrentTime = () => {
    const date = new Date(publishDate);
    const month = date.toLocaleString("default", { month: "long" });
    let time;
    time = month + " " + date.getDay() + ", " + date.getFullYear();
    return time;
  };

  return (
    <>
      <div className={`${Careers["job-card"]}`}>
        <div className={`${Grid["row"]}`}>
          <div className={`${Grid["col-xs-8"]}`}>
            <h4>{title}</h4>
          </div>
        </div>
        <div className={`${Grid["row"]}`}>
          <div className={`${Grid["col-xs-8"]} ${Grid["col-lg-4"]}`}>
            <p>{displayCurrentTime()}</p>
            <p>{location}</p>
          </div>
        </div>
        <div className={`${Grid["row"]}`}>
          <div className={`${Grid["col-xs-8"]} ${Grid["col-lg-4"]}`}>
            <p>{jobDescription}</p>
          </div>
        </div>
        <div className={`${Grid["row"]}`}>
          <div className={`${Grid["col-xs-8"]} ${Grid["col-lg-4"]}`}>
            <a href={url} role="button" target="_blank" rel="noreferrer">
              Apply for Position
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobCard;
