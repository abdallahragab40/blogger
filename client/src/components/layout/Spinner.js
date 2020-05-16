import React from "react";

const Spinner = () => {
  return (
    <React.Fragment>
      <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Spinner;
