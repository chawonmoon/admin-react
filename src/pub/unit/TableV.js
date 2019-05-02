import React, { Component } from "react";
class TableV extends Component {
  render() {
    return (
      <div className="table vertical">
        <table>
          <caption>세로형 테이블 샘플</caption>
          <thead>
            <tr>
              <th scope="col" style={{ width: "7%" }}>
                <span>번호</span>
              </th>
              <th scope="col" style={{ width: "auto" }}>
                <span>제목</span>
              </th>
              <th scope="col" style={{ width: "10%" }}>
                <span>상태</span>
              </th>
              <th scope="col" style={{ width: "25%" }}>
                <span>게시일시</span>
              </th>
              <th scope="col" style={{ width: "15%" }}>
                <span>등록일시</span>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">
                <span>10</span>
              </th>
              <td className="table-ellipsis">
                <span>
                  [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                  이벤트!
                </span>
              </td>
              <td>
                <span>상태입력</span>
              </td>
              <td>
                <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
              </td>
              <td>
                <span>2019-01-28 16:18:05</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>9</span>
              </th>
              <td className="table-ellipsis">
                <span>
                  [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                  이벤트!
                </span>
              </td>
              <td>
                <span>상태입력</span>
              </td>
              <td>
                <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
              </td>
              <td>
                <span>2019-01-28 16:18:05</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>8</span>
              </th>
              <td className="table-ellipsis">
                <span>
                  [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                  이벤트!
                </span>
              </td>
              <td>
                <span>상태입력</span>
              </td>
              <td>
                <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
              </td>
              <td>
                <span>2019-01-28 16:18:05</span>
              </td>
            </tr>
            <tr>
              <th scope="row">
                <span>7</span>
              </th>
              <td className="table-ellipsis">
                <span>
                  [이벤트안내] 가스락 "잠금화면" 신규 사용자를 위한 100% 당첨
                  이벤트!
                </span>
              </td>
              <td>
                <span>상태입력</span>
              </td>
              <td>
                <span>2019-02-12 10:04:00 ~ 2019-02-15 14:04:00</span>
              </td>
              <td>
                <span>2019-01-28 16:18:05</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default TableV;
