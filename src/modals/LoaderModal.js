import React from "react";

function LoaderModal() {
  return (
    <div className="cus-common-modal modal " id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" tabindex="-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body text-center">
              <h1 className="text-center">Process...</h1>
              <img src='assets/images/web-portal/loader.gif' className="img-fluid"/>
            </div>
          </div>
        </div>
      </div>
  );
}

export default LoaderModal;
