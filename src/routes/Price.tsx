import styled, { keyframes } from "styled-components";

interface PriceProps {
  one_hour?: number;
  six_hour?: number;
  twelve_hour?: number;
  twenty_four_hour?: number;
}

const listShow = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const List = styled.ul`
  li {
    &:first-child {
      opacity: 0;
      animation-name: ${listShow};
      animation-duration: 0.5s;
      animation-delay: 0.5s;
      animation-fill-mode: forwards;
    }
    &:nth-child(2) {
      opacity: 0;
      animation-name: ${listShow};
      animation-duration: 0.5s;
      animation-delay: 1s;
      animation-fill-mode: forwards;
    }
    &:nth-child(3) {
      opacity: 0;
      animation-name: ${listShow};
      animation-duration: 0.5s;
      animation-delay: 1.5s;
      animation-fill-mode: forwards;
    }
    &:last-child {
      opacity: 0;
      animation-name: ${listShow};
      animation-duration: 0.5s;
      animation-delay: 2s;
      animation-fill-mode: forwards;
    }
  }
`;

const EachList = styled.li`
  width: 100%;
  background-color: ${(props) => props.theme.bgColor};
  border: 1px solid ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const Percentage = styled.span<{ isPositive: boolean }>`
  color: ${(props) => (props.isPositive ? "red" : "blue")};
`;

function Price({
  one_hour,
  six_hour,
  twelve_hour,
  twenty_four_hour,
}: PriceProps) {
  console.log(one_hour);
  return (
    <List>
      <EachList>
        Change rate (last 1 hour):
        <Percentage isPositive={(one_hour ?? 0) >= 0}>
          &nbsp;{one_hour}%
        </Percentage>
      </EachList>
      <EachList>
        Change rate (last 6 hour):
        <Percentage isPositive={(six_hour ?? 0) >= 0}>
          &nbsp;{six_hour}%
        </Percentage>
      </EachList>
      <EachList>
        Change rate (last 12 hour):{" "}
        <Percentage isPositive={(twelve_hour ?? 0) >= 0}>
          &nbsp;{twelve_hour}%
        </Percentage>
      </EachList>
      <EachList>
        Change rate (last 24 hour):{" "}
        <Percentage isPositive={(twenty_four_hour ?? 0) >= 0}>
          &nbsp;{twenty_four_hour}%
        </Percentage>
      </EachList>
    </List>
  );
}

export default Price;
