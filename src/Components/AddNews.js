import React, { useState } from "react";
import PreviewModal from "./PreviewModal";
export default function AddNews() {
  const [newsDetails, setNewsDetails] = useState({
    author: "",
    fullUrl: "",
    title: "",
    description: "",
    publishedAt:new Date().toString(),
    urlToImage: "",
  });

  // Function to handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewsDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value
    }));
  };
  function canshow(){
    let {author,fullUrl,title,description}=newsDetails;
    return (author!=="" && fullUrl!=="" && title!=="" && description!=="");
  }
  return (
    <div className="d-block mx-auto mt-3 " style={{ width: "450px", maxWidth: "92vw" }}>
      <h1 className="fw-bloder text-center mt-0">Create News Post</h1>
      <small className="text-secondary fw-bolder d-block text-center m-3">(After filling all details you can generate preview)</small>
      <input
        type="text"
        className="form-control mb-3"
        name="author"
        value={newsDetails.author}
        onChange={handleInputChange}
        placeholder="Author"
      />
      <input
        type="text"
        className="form-control mb-3"
        name="fullUrl"
        value={newsDetails.fullUrl}
        onChange={handleInputChange}
        placeholder="Full news URL"
      />
      <input
        type="text"
        className="form-control mb-3"
        name="title"
        value={newsDetails.title}
        onChange={handleInputChange}
        placeholder="Title"
      />
      <textarea
        className="form-control mb-3"
        name="description"
        value={newsDetails.description}
        onChange={handleInputChange}
        placeholder="Description"
        rows="3"
      ></textarea>
      <input
        type="text"
        className="form-control mb-3"
        name="urlToImage"
        value={newsDetails.urlToImage}
        onChange={handleInputChange}
        placeholder="Enter Image's Url"
      />
      {/* Button to trigger the modal */}
      {(canshow()?<div><button
        type="button"
        className="btn btn-outline-primary rounded-pill d-block mx-auto"
        data-bs-toggle="modal"
        data-bs-target="#previewModal"
      >
        Generate Preview
      </button>
      <PreviewModal newsDetails={newsDetails} /></div>:null)}
      
    </div>
  );
}
