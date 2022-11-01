import styled from "styled-components";

interface Props {
  dropDown: boolean;

  setDropDown(value: boolean): void;
}

export default function DropDown({ dropDown, setDropDown }: Props) {
  return (
    <Dropdown dropDown={dropDown}>
      <button onClick={() => setDropDown(!dropDown)}>
        <span>전체</span>
        <span>열기</span>
      </button>
      <ul>
        <li>
          <button>전체</button>
        </li>
        <li>
          <button>1,000원 할인쿠폰</button>
        </li>
        <li>
          <button>2,000원 할인쿠폰</button>
        </li>
        <li>
          <button>3,000원 할인쿠폰</button>
        </li>
      </ul>
    </Dropdown>
  );
}

const Dropdown = styled.div<{ dropDown: boolean }>`
  position: relative;

  button {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: auto;
    padding: 16px 30px 16px 15px;
    box-sizing: border-box;
    border: 1px solid rgb(206, 212, 218);
    border-radius: 0;
    background: #ffffff;
    font-size: 16px;
    color: #111111;
    cursor: pointer;
  }

  ul {
    display: ${(props) => (props.dropDown ? "block" : "none")};
    position: absolute;
    width: 100%;
    max-height: 300px;
    margin: 0;
    padding: 0;
    border: 1px solid rgb(206, 212, 218);
    border-top: none;
    border-radius: 3px;
    list-style: none;
    z-index: 10;
    box-sizing: border-box;

    li {
      background: #ffffff;

      :hover {
        background: rgb(231, 248, 240);
        transition: all 0.2s ease 0s;
      }

      button {
        display: block;
        padding: 14px 16px;
        border: none;
        background: none;
        font-size: 14px;
        color: #111111;
        text-align: left;
      }
    }
  }
`;
