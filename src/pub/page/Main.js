import React, { Component } from "react";
import { Breadcrumb, Pagination, TableV, TableH } from "../component";

class Main extends Component {
  render() {
    return (
      <main className="main">
        <h2>브레드크럼</h2>
        <Breadcrumb />

        <h2>테이블 Ver</h2>
        <TableV />
        <TableH />

        <h2>버튼</h2>
        <h3>기본 버튼</h3>
        <div className="sample-box">
          <button className="btn btn-info">
            <i className="ico-list" />
            <span>목록</span>
          </button>
          <button className="btn btn-info">
            <i className="ico-plus" />
            <span>등록</span>
          </button>
          <button className="btn btn-warning">
            <i className="ico-pencil2" />
            <span>수정</span>
          </button>
          <button className="btn btn-danger">
            <i className="ico-bin" />
            <span>삭제</span>
          </button>
          <button className="btn btn-info">
            <i className="ico-checkmark" />
            <span>확인</span>
          </button>
          <button className="btn btn-secondary">
            <i className="ico-cross" />
            <span>취소</span>
          </button>
          <button className="btn btn-info">
            <i className="ico-image" />
            <span>이미지 선택</span>
          </button>
        </div>
        <h3>작은 버튼</h3>
        <div className="sample-box">
          <button className="btn btn-info sm">
            <i className="ico-plus" />
            <span>추가</span>
          </button>
          <button className="btn btn-danger sm">
            <i className="ico-bin" />
            <span>삭제</span>
          </button>
          <button className="btn btn-info sm">
            <i className="ico-image" />
            <span>이미지선택</span>
          </button>
        </div>
        <h3>페이지네이션</h3>
        <div className="sample-box">
          <Pagination />
        </div>

        <h2>버튼 그룹</h2>
        <h3>리스트 페이지</h3>
        <div className="btn-group">
          <button className="btn btn-info">
            <i className="ico-plus" />
            <span>등록</span>
          </button>
          <Pagination />
        </div>
        <h3>상세 페이지</h3>
        <div className="btn-group">
          <button className="btn btn-info">
            <i className="ico-list" />
            <span>목록</span>
          </button>
          <div>
            <button className="btn btn-warning">
              <i className="ico-pencil2" />
              <span>수정</span>
            </button>
            <button className="btn btn-danger">
              <i className="ico-bin" />
              <span>삭제</span>
            </button>
          </div>
        </div>
        <h3>모달팝업</h3>
        <div className="btn-group modal">
          <div>
            <button className="btn btn-warning">
              <i className="ico-pencil2" />
              <span>수정</span>
            </button>
            <button className="btn btn-danger">
              <i className="ico-bin" />
              <span>삭제</span>
            </button>
          </div>
        </div>

        <h2>뱃지</h2>
        <h3>기본 뱃지</h3>
        <div className="sample-box">
          <span className="badge primary">Primary</span>
          <span className="badge secondary">Secondary</span>
          <span className="badge success">Success</span>
          <span className="badge danger">Danger</span>
          <span className="badge warning">Warning</span>
          <span className="badge info">Info</span>
          <span className="badge light">Light</span>
          <span className="badge dark">Dark</span>
        </div>
        <h3>라운드 뱃지</h3>
        <div className="sample-box">
          <span className="badge primary fill">Primary</span>
          <span className="badge secondary fill">Secondary</span>
          <span className="badge success fill">Success</span>
          <span className="badge danger fill">Danger</span>
          <span className="badge warning fill">Warning</span>
          <span className="badge info fill">Info</span>
          <span className="badge light fill">Light</span>
          <span className="badge dark fill">Dark</span>
        </div>
        <h3>링크 뱃지</h3>
        <div className="sample-box">
          <a href="javascript:void(0);" className="badge primary">
            Primary
          </a>
          <a href="javascript:void(0);" className="badge secondary">
            Secondary
          </a>
          <a href="javascript:void(0);" className="badge success">
            Success
          </a>
          <a href="javascript:void(0);" className="badge danger">
            Danger
          </a>
          <a href="javascript:void(0);" className="badge warning">
            Warning
          </a>
          <a href="javascript:void(0);" className="badge info">
            Info
          </a>
          <a href="javascript:void(0);" className="badge light">
            Light
          </a>
          <a href="javascript:void(0);" className="badge dark">
            Dark
          </a>
        </div>

        <h2>경고창</h2>
        <div className="sample-box">
          <div className="alert primary">경고 primary</div>
          <div className="alert secondary">경고 secondary</div>
          <div className="alert success">경고 success</div>
          <div className="alert danger">경고 danger</div>
          <div className="alert warning">경고 warning</div>
          <div className="alert info">경고 info</div>
          <div className="alert dark">경고 dark</div>
        </div>

        <h2>인풋</h2>
        <div className="sample-box">
          <input type="text" className="form-input" title="샘플 인풋 텍스트" />
          <input
            type="password"
            className="form-input"
            title="샘플 인풋 패스워드"
          />
          <input type="search" className="form-input" title="샘플 인풋 서치" />
        </div>
      </main>
    );
  }
}

export default Main;
