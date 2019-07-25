import React, { Component, Fragment } from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';

class Guide extends Component {
  render() {
    return (
      <Fragment>
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
        <div className="box-component">
          <Dragndrop />
        </div>

        <div className="btn-group">
          <button className="btn btn-info">
            <i className="ico-plus" />
            <span>등록</span>
          </button>
        </div>
      </Fragment>
    );
  }
}

class Dragndrop extends Component {
  static defaultProps = {
    items: [
      {
        id: 'item-0',
        content: '자가검침',
        badge: [{ label: '사용중지', state: 'danger' }]
      },
      {
        id: 'item-1',
        content: '요금 산정 방법',
        badge: [{ label: '사용중지', state: 'primary' }]
      },
      {
        id: 'item-2',
        content: '요금 할인',
        badge: [{ label: '사용중지', state: 'secondary' }]
      },
      {
        id: 'item-3',
        content: '(세금) 계산서 발행',
        badge: [{ label: '사용중지', state: 'success' }]
      },
      {
        id: 'item-4',
        content: '납부 방법',
        badge: []
      },
      {
        id: 'item-5',
        content: '체납 중지',
        badge: [{ label: '사용중지', state: 'danger' }]
      },
      {
        id: 'item-6',
        content: '채무 불이행 등록',
        badge: [{ label: '사용중지', state: 'primary' }]
      },
      {
        id: 'item-7',
        content: '보증 보험',
        badge: [{ label: '사용중지', state: 'secondary' }]
      }
    ]
  };

  constructor(props) {
    super(props);
    this.state = { ...props };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  getDragState = isDragging => {
    return isDragging ? 'dragging' : '';
  };

  // 배열 재정렬 함수
  reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  // 드래그를 끝냈을때의 핸들러
  onDragEnd = result => {
    // 리스트 밖으로 드랍한 경우
    if (!result.destination) {
      return;
    }

    const items = this.reorder(
      this.state.items,
      result.source.index,
      result.destination.index
    );

    this.setState({
      items
    });

    console.log(this.state);
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="droppable">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="drag-lists"
            >
              {this.state.items.map((item, index) => (
                <Draggable key={item.id} draggableId={item.id} index={index}>
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      className={
                        'drag-items ' + this.getDragState(snapshot.isDragging)
                      }
                    >
                      <p>
                        <i className="ico-menu" />
                        <em className="title">{item.content}</em>

                        <span className="badges">
                          {item.badge.map((state, index) => {
                            console.log(state.state);
                            return (
                              <span className={'badge ' + state.state}>
                                {state.label}
                              </span>
                            );
                          })}
                          {/* <span className="badge danger">사용중지</span>
                          <span className="badge primary">Primary</span>
                          <span className="badge secondary">Secondary</span>
                          <span className="badge success">Success</span> */}
                        </span>
                      </p>
                      <div className="box-inline">
                        <button className="btn btn-warning sm">
                          <i className="ico-pencil2" />
                          <span>수정</span>
                        </button>
                        <button className="btn btn-danger sm">
                          <i className="ico-bin" />
                          <span>삭제</span>
                        </button>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default Guide;
