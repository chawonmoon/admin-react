import React, { Component } from 'react';

class Breadcrumb extends Component {
  render() {
    return (
      <div className="breadcrumbs-wrap">
        <ol className="breadcrumbs">
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">
              <i className="ico-home" />
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="javascript:void(0);">Buttons</a>
          </li>
          <li className="breadcrumb-item active">Button</li>
        </ol>
      </div>
    );
  }
}

export default Breadcrumb;
