import React, { Component } from 'react';
import {
  Breadcrumb,
  Pagination,
  TableV,
  TableH,
  Chatbot,
  Select
} from '../units';
import {
  Selectbox,
  SelectboxMulti,
  Dragndrop,
  Modal,
  Modalalert,
  Modalconfirm
} from '../component';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <h2>브레드크럼</h2>
        <Breadcrumb />

        <h2>셀렉트 박스(Select:system)</h2>
        <div className="box-component">
          <Select />
        </div>

        <h2>셀렉트 박스(Select:react-select)</h2>
        <div className="box-component">
          <Selectbox
            selectopt={[
              { value: 10, label: '목록 10개' },
              { value: 20, label: '목록 20개' },
              { value: 50, label: '목록 50개' }
            ]}
          />
        </div>

        <h2>셀렉트 박스(Select:react-select | Multi)</h2>
        <div className="box-component">
          <SelectboxMulti
            selectopt={[
              { value: 'guestBlock', label: 'guestBlock', badge: 'v1' },
              { value: 'memberBlock', label: 'memberBlock', badge: 'v2' },
              { value: 'contractBlock', label: 'contractBlock', badge: 'v3' }
            ]}
          />
        </div>

        <h2>인풋(input)</h2>
        <div className="box-component">
          <div className="box-form">
            <input
              type="text"
              className="form-input"
              title="샘플 인풋 텍스트"
              placeholder="텍스트를 입력해주세요."
            />
            <p className="form-Feedback">
              <i className="ico-cancel-circle" />
              <span>아이디를 확인 후 다시 시도해 주세요</span>
            </p>
          </div>
          <div className="box-form">
            <input
              type="password"
              className="form-input"
              title="샘플 인풋 패스워드"
              placeholder="패스워드를 입력해주세요."
            />
            <p className="form-Feedback">
              <i className="ico-cancel-circle" />
              <span>비밀번호를 확인 후 다시 시도해 주세요</span>
            </p>
          </div>
          <div className="box-form">
            <input
              type="search"
              className="form-input"
              title="샘플 인풋 서치"
              placeholder="검색어를 입력해주세요."
            />
            <p className="form-Feedback">
              <i className="ico-cancel-circle" />
              <span>검색어를 확인 후 다시 시도해 주세요</span>
            </p>
          </div>
        </div>

        <h2>게시판 검색 그룹</h2>
        <div className="box-component">
          <div className="board-group">
            <div className="select numbering">
              <select>
                <option value="10">목록 10개</option>
                <option value="30">목록 20개</option>
                <option value="50">목록 50개</option>
              </select>
              <span className="bullet">
                <svg
                  height="20"
                  width="20"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                  focusable="false"
                >
                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                </svg>
              </span>
            </div>
            <div className="searching">
              <div className="select">
                <select>
                  <option value="0">제목 + 내용</option>
                  <option value="1">제목</option>
                  <option value="2">내용</option>
                </select>
                <span className="bullet">
                  <svg
                    height="20"
                    width="20"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z" />
                  </svg>
                </span>
              </div>
              <div className="searchbox">
                <input
                  type="search"
                  className="form-input"
                  title="샘플 인풋 서치"
                  placeholder="검색어를 입력해주세요."
                />
                <button className="btn">
                  <i className="ico-search" />
                </button>
              </div>
            </div>
          </div>

          <div className="board-group">
            <div className="numbering">
              <SelectboxMulti
                selectopt={[
                  { value: 'guestBlock', label: 'guestBlock', badge: 'v1' },
                  { value: 'memberBlock', label: 'memberBlock', badge: 'v2' },
                  {
                    value: 'contractBlock',
                    label: 'contractBlock',
                    badge: 'v3'
                  }
                ]}
              />
            </div>
          </div>
        </div>

        <h2>테이블 Ver</h2>
        <div className="box-component">
          <TableV />
        </div>

        <h2>테이블 Hor</h2>
        <div className="box-component">
          <TableH />
        </div>

        <h2>버튼</h2>
        <h3>기본 버튼</h3>
        <div className="box-component">
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
        <div className="box-component">
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
        <div className="box-component">
          <Pagination />
        </div>

        <h2>버튼 그룹</h2>
        <h3>리스트 페이지</h3>
        <div className="btn-group">
          <Pagination />
          <button className="btn btn-info">
            <i className="ico-plus" />
            <span>등록</span>
          </button>
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
        <div className="box-component">
          <span className="badge primary">Primary</span>
          <span className="badge secondary">Secondary</span>
          <span className="badge success">Success</span>
          <span className="badge use">Use</span>
          <span className="badge danger">Danger</span>
          <span className="badge warning">Warning</span>
          <span className="badge info">Info</span>
          <span className="badge light">Light</span>
          <span className="badge dark">Dark</span>
        </div>
        <h3>라운드 뱃지</h3>
        <div className="box-component">
          <span className="badge primary fill">Primary</span>
          <span className="badge secondary fill">Secondary</span>
          <span className="badge success fill">Success</span>
          <span className="badge use fill">Use</span>
          <span className="badge danger fill">Danger</span>
          <span className="badge warning fill">Warning</span>
          <span className="badge info fill">Info</span>
          <span className="badge light fill">Light</span>
          <span className="badge dark fill">Dark</span>
        </div>
        <h3>링크 뱃지</h3>
        <div className="box-component">
          <a href="javascript:void(0);" className="badge primary">
            Primary
          </a>
          <a href="javascript:void(0);" className="badge secondary">
            Secondary
          </a>
          <a href="javascript:void(0);" className="badge success">
            Success
          </a>
          <a href="javascript:void(0);" className="badge use">
            Use
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
        <div className="box-component">
          <div className="alert primary">경고 primary</div>
          <div className="alert secondary">경고 secondary</div>
          <div className="alert success">경고 success</div>
          <div className="alert danger">경고 danger</div>
          <div className="alert warning">경고 warning</div>
          <div className="alert info">경고 info</div>
          <div className="alert dark">경고 dark</div>
        </div>

        <h2>챗봇</h2>
        <div className="box-component">
          <Chatbot />
        </div>

        <h2>드래그 앤 드롭 리스트</h2>
        <div className="box-component">
          <Dragndrop />
        </div>

        <h2>모달팝업</h2>
        <div className="box-component">
          <Modal />
          <Modalalert />
          <Modalconfirm />
        </div>

        <h2>스피너</h2>
        <div className="box-component">
          <div className="spinner-roller">
            {(function() {
              let balls = [];
              for (let i = 0; i < 7; i++) {
                balls.push(<div key={i} />);
              }
              return balls;
            })()}
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
