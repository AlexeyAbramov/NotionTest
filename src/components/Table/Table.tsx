import React from "react";
import { useSelector } from "react-redux";
import { getFormatedData } from "../../assets/js/data-convertor";
import {
  TableBodyRow,
  TableCell,
  TableContainer,
  TableHead,
  TableHeadRow,
  TableWrapper,
  UserAvatar,
  UserNation,
} from "./TableStyle";
import { IUserInfo } from "../../types/users";
import { ClipCopy } from "../ClipCopy/ClipCopy";
import { getContactParts } from "../../redux/contacts/selectors";
import { SortNameButton } from "../../componentsHelpers/SortNameButton/SortNameButton";

const Table: React.FC = () => {
  const contacts = useSelector(getContactParts);

  return (
    <TableWrapper>
      <TableContainer>
        <TableHead>
          <TableHeadRow>
            <TableCell width="7rem" align="center">
              Avatar
            </TableCell>
            <TableCell>
              <SortNameButton>Full name</SortNameButton>
            </TableCell>
            <TableCell>Birthday</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
            <TableCell>Location</TableCell>
            <TableCell align="right">Nationality</TableCell>
          </TableHeadRow>
        </TableHead>
        <tbody>
          {contacts.map((user: IUserInfo) => {
            const {
              birthday,
              email,
              fullName,
              location,
              phone,
              national,
              nationalColor,
            } = getFormatedData(user);

            return (
              <TableBodyRow key={phone}>
                <TableCell width="5%">
                  <UserAvatar className="cell-image" src={user.picture.thumbnail} alt="avatar" />
                </TableCell>
                <TableCell>
                  <a href="/">{fullName}</a>
                </TableCell>
                <TableCell>{birthday}</TableCell>
                <TableCell>
                  <ClipCopy href={`mailto:${email}`}>{email}</ClipCopy>
                </TableCell>
                <TableCell>
                  <ClipCopy href={`tel:${phone}`}>{phone}</ClipCopy>
                </TableCell>
                <TableCell>
                  <ClipCopy>{location}</ClipCopy>
                </TableCell>
                <TableCell align="right">
                  <UserNation color={nationalColor.color} inverted={nationalColor.inverted}>
                    {national}
                  </UserNation>
                </TableCell>
              </TableBodyRow>
            );
          })}
        </tbody>
      </TableContainer>
    </TableWrapper>
  );
};

export { Table };
