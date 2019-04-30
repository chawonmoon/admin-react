import React, { Component } from "react";
class TableH extends Component {
  render() {
    return (
      <div className="table horizon">
        <table className="table-defaults tables-hor table table-bordered">
          <tbody>
            <tr>
              <th scope="row" style={{ width: "7%" }}>
                <span>등록일시</span>
              </th>
              <td>
                <span>2019-02-22 17:46:49</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>제목</span>
              </th>
              <td>
                <span>
                  [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                  이벤트!
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>내용</span>
              </th>
              <td>
                <span>
                  [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                  이벤트! [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100%
                  당첨 이벤트! [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한
                  100% 당첨 이벤트! [이벤트안내] 가스락 "잠금화면" 신규 사용자를
                  위한 100% 당첨 이벤트!
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>최근공지 게시상태</span>
              </th>
              <td>
                <span>
                  <span className="badge primary pill">Primary</span>
                  <span className="badge secondary pill">Secondary</span>
                  <span className="badge success pill">Success</span>
                  <span className="badge danger pill">Danger</span>
                  <span className="badge warning pill">Warning</span>
                  <span className="badge info pill">Info</span>
                  <span className="badge light pill">Light</span>
                  <span className="badge dark pill">Dark</span>
                </span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>기본색상</span>
              </th>
              <td>컬러피커</td>
            </tr>
            <tr>
              <th scope="row">
                <span>최근공지 게시일시</span>
              </th>
              <td>
                <span>2019-02-22 17:33:42 ~ 2019-02-23 17:33:42</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default TableH;
