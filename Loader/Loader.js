/**
 * Author : SLK
 * Component Name : Loader
 * Component Type : Function Component
 * Description : Loader component is a function component, which returns loader UI as output
 */
import React from "react";
import LoaderImage from "../../images/loading.gif";

const Loader = () => (
  <div data-test="loaderTest" className="d-flex justify-content-center loading">
    <div className="" role="status">
      <img src={LoaderImage} width="64" height="64" alt="Loader" />
      <span className="sr-only">Loading...</span>
    </div>
  </div>
);

export default Loader;
