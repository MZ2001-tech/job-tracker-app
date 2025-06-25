import React, { useState } from "react";

function JobList() {
  const [jobs, setJobs] = useState([
    { company: "Petronas", jobTitle: "Data Analyst", status: "status" },
    { company: "Shell", jobTitle: "Software Engineer", status: "status" },
    { company: "SLB", jobTitle: "Data Engineer", status: "status" },
  ]);

  const [newCompany, setNewCompany] = useState("");
  const [newJobTitle, setNewJobTitle] = useState("");
  const [newStatus, setNewStatus] = useState("status");

  function handleCompanyChange(event) {
    setNewCompany(event.target.value);
  }

  function handleJobTitleChange(event) {
    setNewJobTitle(event.target.value);
  }

  function handleStatusChange(event) {
    setNewStatus(event.target.value);
  }

  function addJob() {
    if (newCompany.trim() === "" || newJobTitle.trim() === "") {
      return; // Do not add if company or job title is empty
    }
    setJobs([
      ...jobs,
      { company: newCompany.trim(), jobTitle: newJobTitle.trim(), status: newStatus },
    ]);
    setNewCompany("");
    setNewJobTitle("");
    setNewStatus("status");
  }

  function deleteJob(index) {
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);
  }

  function updateJobStatus(index, event) {
    const updatedJobs = [...jobs];
    updatedJobs[index].status = event.target.value;
    setJobs(updatedJobs);
  }

  return (
    <div className="JobCompanyList">
      <h1>Job List Tracker</h1>

      <div className="InputSection">
        <input
          type="text"
          className="Company_input"
          placeholder="Enter company Name"
          value={newCompany}
          onChange={handleCompanyChange}
        />

        <input
          type="text"
          className="Job_input"
          placeholder="Enter Job title"
          value={newJobTitle}
          onChange={handleJobTitleChange}
        />

        <span className="dropdown-span">
          <select
            value={newStatus}
            onChange={handleStatusChange}
            className="StatusDisplay"
          >
            <option value="status">Status</option>
            <option value="applied">applied</option>
            <option value="Rejected">Rejected</option>
            <option value="Ghosted">Ghosted</option>
            <option value="Online_Assesment">Online Assesment</option>
            <option value="Interview">Interview</option>
            <option value="Offer">Recive offer Letter</option>
            <option value="Accept">Accept Job</option>
            <option value="Reject">Reject Offer</option>
          </select>
        </span>

        <button className="add-button" onClick={addJob}>
          Add Job
        </button>

        <ol>
          {jobs.map((job, index) => (
            <li key={index}>
              <span className="text">
                {job.company} {job.jobTitle}
              </span>
              <span className="dropdown-span">
                <select
                  value={job.status}
                  onChange={(e) => updateJobStatus(index, e)}
                  className="StatusDrop"
                >
                  <option value="status">Status</option>
                  <option value="applied">applied</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Ghosted">Ghosted</option>
                  <option value="Online_Assesment">Online Assesment</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Recive offer Letter</option>
                  <option value="Accept">Accept Job</option>
                  <option value="Reject">Reject Offer</option>
                </select>
              </span>
              <button className="delete-button" onClick={() => deleteJob(index)}>
                Delete Job
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default JobList;
