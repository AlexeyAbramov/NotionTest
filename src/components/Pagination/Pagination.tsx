import React from "react";
import { PaginationButton, PaginationContainer } from "./PaginationStyle";

const Pagination: React.FC = () => {
  return (
    <PaginationContainer>
      <PaginationButton>&lt;</PaginationButton>
      <PaginationButton>1</PaginationButton>
      <PaginationButton>2</PaginationButton>
      <PaginationButton>&gt;</PaginationButton>
    </PaginationContainer>
  );
};

export { Pagination };
