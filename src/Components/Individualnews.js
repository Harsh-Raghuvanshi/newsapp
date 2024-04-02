import React from "react";
import defaultImage from "../Images/defaultImage.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faShare,  faLink } from "@fortawesome/free-solid-svg-icons";
export default function Individualnews(props) {
  let { allinfo } = props;
  if(allinfo.urlToImage==="")allinfo.urlToImage=null;
  return (
    <div>
      <div className="card mx-auto mt-3 newscard">
        <div className="">
          {allinfo.urlToImage !== null ? (
            <img src={allinfo.urlToImage} className="card-img-top " alt="..." />
          ) : (
            <img src={defaultImage} className="card-img-top" alt="..." />
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title fw-bolder">{allinfo.title}</h5>
          <p className="card-text fw-medium">{allinfo.description}</p>
          <p className="text-secondary fw-medium my-0">
            Pulished at : {allinfo.publishedAt}
          </p>
          <p className="text-secondary fw-medium my-0">
            Author: {allinfo.author}
          </p>
        </div>
        <div className="d-flex justify-content-evenly m-2">
          <span
            href={allinfo.url}
            className="btn btn-outline-warning rounded-pill p-2 m-0 d-inline-block"
          >
            <FontAwesomeIcon icon={faLink} className="d-block fs-4 mx-auto" />
          </span>
          <span
            className="btn btn-outline-warning rounded-pill p-2 m-0 d-inline-block"
            style={{ width: "3rem" }}
          >
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="d-block fs-4 mx-auto"
            />
          </span>
          <span
            className="btn btn-outline-warning rounded-pill p-2 m-0 d-inline-block"
            style={{ width: "3rem" }}
          >
            <FontAwesomeIcon icon={faShare} className="d-block fs-4 mx-auto" />
          </span>
        </div>
      </div>
    </div>
  );
}
