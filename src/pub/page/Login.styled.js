import styled from 'styled-components';
import { commons } from '../../styled/Variables';

const { borderRadius } = commons;

const LoginStyled = styled.main`
  height: 100%;
  background: #f3848c;
  .login-inner {
    position: relative;
    max-width: 400px;
    margin: 0 auto;
    padding: 30px;
    top: calc(50% - 220px);
    h1 {
      margin-bottom: 7px;
      text-align: center;
    }
    section {
      background: #ffffff;
      padding: 20px;
      border-radius: ${borderRadius};
      .box-form {
        position: relative;
        overflow: hidden;
        margin-bottom: 15px;
        > span {
          display: block;
          i {
            position: absolute;
            left: 6px;
            top: 7px;
            width: 25px;
            text-align: center;
            font-size: 18px;
            color: #f3848c;
            &.ico-lock {
              margin-left: 4px;
            }
          }
        }
        input[type='text'],
        input[type='password'] {
          padding: 0 30px 0 36px;
        }
      }
    }
  }
`;

export default LoginStyled;
