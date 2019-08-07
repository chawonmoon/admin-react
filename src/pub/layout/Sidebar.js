import React, { Component } from 'react';
import SidebarStyled from './Sidebar.styled';

class Sidebar extends Component {
  render() {
    return (
      <SidebarStyled className="sidebar">
        <ul>
          <li className="active">
            <a href="javascript:void(0);">
              <i className="ico-home" />
              <span>메뉴1</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li className="active">
                <a href="javascript:void(0);">
                  <i className="ico-home" />
                  <span>메뉴1-1</span>
                  <i className="ico-circle-down downbullet" />
                </a>
                <ul className="sub">
                  <li>
                    <a href="javascript:void(0);">
                      <i className="ico-home" />
                      <span>메뉴1-1-1</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <i className="ico-home" />
                      <span>메뉴1-1-2</span>
                    </a>
                  </li>
                  <li>
                    <a href="javascript:void(0);">
                      <i className="ico-home" />
                      <span>메뉴1-1-3</span>
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="ico-home" />
                  <span>메뉴1-2</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="ico-home" />
                  <span>메뉴1-3</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-home" />
              <span>메뉴2</span>
            </a>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-home" />
              <span>메뉴3</span>
            </a>
          </li>
          <li className="active">
            <a href="javascript:void(0);">
              <i className="ico-home" />
              <span>메뉴4</span>
              <i className="ico-circle-down downbullet" />
            </a>
            <ul className="sub">
              <li>
                <a href="javascript:void(0);">
                  <i className="ico-home" />
                  <span>메뉴4-1</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="ico-home" />
                  <span>메뉴4-2</span>
                </a>
              </li>
              <li>
                <a href="javascript:void(0);">
                  <i className="ico-home" />
                  <span>메뉴4-3</span>
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a href="javascript:void(0);">
              <i className="ico-home" />
              <span>메뉴5</span>
            </a>
          </li>
        </ul>
      </SidebarStyled>
    );
  }
}
export default Sidebar;
