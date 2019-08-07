import { Fragment } from 'react';
import styled, { css } from 'styled-components';
import { commons } from '../../styled/Variables';
import { mediaQuery } from '../../styled/function';

const { borderRadius } = commons;

const PushStyled = styled.div`
  .board-group {
    .searching {
      & > .select {
        width: 200px;
      }
      &.user {
        float: none;
        margin-bottom: 0;
        .searchbox {
          display: inline-block;
          width: calc(20% - 10px);
          min-width: 150px;
          margin-right: 5px;
          margin-bottom: 5px;
          vertical-align: bottom;
          .form-input[type='search'] {
            width: 100%;
            border-radius: ${borderRadius};
          }
          .select {
            width: 100%;
            margin-bottom: 0;
          }
          label {
            font-weight: 700;
            margin-bottom: 5px;
          }
          .btn {
            border-radius: ${borderRadius};
            width: 100%;
          }
          &:last-child {
            margin-right: 0;
          }
        }
      }
    }

    ${mediaQuery.tabletL(css`
      & .select {
        width: 100%;
        min-width: 100%;
        margin-bottom: 5px;
      }
      .searching {
        width: 100%;
        margin-bottom: 5px;
        .searchbox {
          width: 100%;
          margin-left: 0;
        }
        &.user {
          .searchbox {
            width: calc(50% - 3px);
            min-width: 0;
            &:nth-child(2n) {
              margin-right: 0;
            }
            &:last-child {
              width: 100%;
            }
          }
        }
      }
    `)}
  }

  .alert.warning.user {
    padding-left: 35px;
    ul {
      list-style: disc;
      li {
        list-style: disc;
        margin-bottom: 3px;
        &:last-child {
          margin-bottom: 0;
        }
      }
    }
  }
`;

export default PushStyled;
