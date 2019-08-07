import React, { Component } from 'react';

class Pagination extends Component {
  render() {
    return (
      <nav className="pagination-wrap">
        <ul className="pagination">
          <li className="page-item disabled">
            <a href="javascript:void(0);" className="page-link">
              <span>«</span>
            </a>
          </li>
          <li className="page-item disabled">
            <a href="javascript:void(0);" className="page-link">
              <span>‹</span>
            </a>
          </li>
          <li className="page-item active">
            <a href="javascript:void(0);" className="page-link">
              1
            </a>
          </li>
          <li className="page-item">
            <a href="javascript:void(0);" className="page-link">
              2
            </a>
          </li>
          <li className="page-item">
            <a href="javascript:void(0);" className="page-link">
              3
            </a>
          </li>
          <li className="page-item">
            <a href="javascript:void(0);" className="page-link">
              4
            </a>
          </li>
          <li className="page-item">
            <a href="javascript:void(0);" className="page-link">
              5
            </a>
          </li>
          <li className="page-item">
            <a href="javascript:void(0);" className="page-link">
              <span>›</span>
            </a>
          </li>
          <li className="page-item">
            <a href="javascript:void(0);" className="page-link">
              <span>»</span>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Pagination;
