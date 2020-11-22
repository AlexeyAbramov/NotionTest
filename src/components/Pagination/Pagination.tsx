import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPage } from "../../redux/contacts/action";
import { getPageCount } from "../../redux/contacts/selectors";
import { RootState } from "../../types/redux";
import { PaginationButton, PaginationContainer } from "./PaginationStyle";

const Pagination: React.FC = () => {
  const dispatch = useDispatch();
  const pageCount = useSelector(getPageCount);
  const currentPage = useSelector((state: RootState) => state.contacts.currentPage);

  return (
    <PaginationContainer>
      <PaginationButton>&lt;</PaginationButton>
      {new Array(pageCount).fill(0).map((_, index) => (
        <PaginationButton
          onClick={() => dispatch(setPage(index + 1))}
          active={currentPage === index + 1}
          key={`${Math.random()}`}
        >
          {index + 1}
        </PaginationButton>
      ))}
      <PaginationButton>&gt;</PaginationButton>
    </PaginationContainer>
  );
};

export { Pagination };
