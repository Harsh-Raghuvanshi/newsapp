import React from "react";
import Individualnews from "./Individualnews"; // Import your Individualnews component

export default function PreviewModal({ newsDetails }) {
  return (
    <div>
      <div
        className="modal fade"
        id="previewModal"
        tabIndex="-1"
        aria-labelledby="previewModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="previewModalLabel">Preview</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {/* Render Individualnews component with newsDetails */}
              <Individualnews allinfo={newsDetails} />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              {/* You can add additional buttons here if needed */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
