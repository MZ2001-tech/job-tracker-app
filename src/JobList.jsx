import React, { useState } from "react";

function JobList() {
  const [jobs, setJobs] =useState([
    {company: "Petronas", jobTitle: "Data Analyst", Status: "status"},
    {company: "Shell", jobTitle: "Software Engineer", Status: "status"},
    {company: "SLB", jobTitle: "Data Engineer", Status: "status"},
  ]); // array of object for easier input sychronization updates and readebility

  //Input States
  const [newCompany, SetNewCompany] = useState("");
  const [newJobTitle, setNewJobTitle] = useState("")
  const [newStatus, setNewStatus] = useState("status")

  const[editingIndex, setEditingIndex] = useState(null);
  const[editedCompany, setEditedCompany] = useState("");
  const[editedJobTitle, setEditedJobTitle] = useState("");

  function handleCompanyChange(e){
    SetNewCompany(e.target.value);
  }

  function handleJobTitleChange(e){
    setNewJobTitle(e.target.value);
  }

  function handleStatusChange(e){
    setNewStatus(e.target.value);
  }

  function addJob(){
    if(newCompany.trim() ==="" || newJobTitle ==="" || newStatus ==="status"){
      alert("Please enter the empty values/Status value cannot be (status)");
      return;
    }
    setJobs([
      ...jobs,
      {company: newCompany.trim(), jobTitle: newJobTitle.trim(), Status:newStatus },

    ]);
    SetNewCompany("");
    setNewJobTitle("");
    setNewStatus('status');
  }

  function deleteJob(index){
    const updatedJobs = jobs.filter((_, i) => i !== index);
    setJobs(updatedJobs);

  }

  function updateJobStatus(index, e){
    if (newStatus === "status"){
      alert("Status value cannot be (status)");
      return
    }
    const updatedJobs = [...jobs];
    updatedJobs[index].Status = e.target.value;
    setJobs(updatedJobs);
  }

  function handleEdit(index){
    setEditingIndex(index);
    setEditedCompany(jobs[index].company);
    setEditedJobTitle(jobs[index].jobTitle);
  }

  function handleSave(index){
    const updatedJobs = [...jobs];
    updatedJobs[index].company = editedCompany
    updatedJobs[index].jobTitle = editedJobTitle
    setJobs(updatedJobs);
    setEditingIndex(null);
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

        <select
          value={newStatus}
          onChange={handleStatusChange}
          className="StatusDrop"
        >
          <option value="status">Status</option>
          <option value="applied">Applied</option>
          <option value="Rejected">Rejected</option>
          <option value="Ghosted">Ghosted</option>
          <option value="Online_Assesment">Online Assesment</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Recieve offer Letter</option>
          <option value="Accept">Accept Job</option>
          <option value="Reject">Reject Offer</option>
        </select>

        <button className="add-button" onClick={addJob}>
          +
        </button>

        <ol>
          {jobs.map((job, index) => (
            <li key={index}>
              {editingIndex === index?(
                <>
                  <input 
                  type="text" 
                  value ={editedCompany} 
                  onChange={(e) => setEditedCompany(e.target.value)} 
                  className="text"
                />
                <input 
                type="text"
                value={editedJobTitle}
                onChange={(e) => setEditedJobTitle(e.target.value)}
                className="text" 
                />
                <button
                className="edit-button"
                onClick={()=>handleSave(index)}>
                   💾
                </button>
                </>):(
                  <>
                    <span className="Display-Box">{job.company}</span>
                    <span className="Display-Box">{job.jobTitle}</span>
                    <button
                    className="edit-button"
                    onClick={() => handleEdit(index)}>
                      ✏️
                    </button>
                  </>
                )}
              <span>
                <select
                value={job.Status}
                onChange={(e) => updateJobStatus(index, e)}
                className="StatusDisplay">
                  <option value="status">Status</option>
                  <option value="applied">Applied</option>
                  <option value="Rejected">Rejected</option>
                  <option value="Ghosted">Ghosted</option>
                  <option value="Online_Assesment">Online Assesment</option>
                  <option value="Interview">Interview</option>
                  <option value="Offer">Recieve offer Letter</option>
                  <option value="Accept">Accept Job</option>
                    <option value="Reject">Reject Offer</option>

                </select>
              </span>
              <button
                className="delete-button"
                onClick={() => deleteJob(index)}
              >
                🗑️
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default JobList;
