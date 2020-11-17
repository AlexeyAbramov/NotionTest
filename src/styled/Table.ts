import styled from "styled-components";

export const TableWrapper = styled.div`
  width: 100%;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 0 7px 1px rgba(0, 0, 0, 0.1);
`;

export const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #fff;
  text-align: left;
  font-size: 1.2rem;
`;

export const TableHead = styled.thead`
  font-size: 1.3rem;
`;

export const TableCell = styled.th<{ width?: string }>`
  font-weight: inherit;
  border-bottom: 1px solid rgb(240, 240, 240);
  width: ${(props) => props.width || "16%"};
  padding: 0.7rem;
  white-space: pre-wrap;
  text-align: ${(props) => props.align || "left"};
`;

export const UserNation = styled.p<{ color?: string }>`
  display: inline-block;
  padding: 0.3rem 0.8rem;
  border: 1px solid ${(props) => props.color || "#cc416f"};
  border-radius: 3px;
  font-weight: 600;
  color: ${(props) => props.color || "#cc416f"};
  background-color: ${(props) => (props.color ? `${props.color}1A` : "#cc416f1A")};
`;
