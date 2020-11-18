import React from "react";
import { convertBirthday, convertFullName, convertLocation } from "../../assets/js/data-convertor";
import { TableCell, TableContainer, TableHead, TableHeadRow, TableWrapper, UserAvatar, UserNation } from "./TableStyle";
import { IUserInfo } from "../../types/users";
import data from "../../mock/data-min.json";
// import data from "../mock/data.json";
import { ClipCopy } from "../ClipCopy/ClipCopy";
import { getColor } from "../../assets/js/helpers";

const Table: React.FC = () => (
  <TableWrapper>
    <TableContainer>
      <TableHead>
        <TableHeadRow className="thead__row">
          <TableCell width="7rem" align="center">
            Avatar
          </TableCell>
          <TableCell>Full name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Location</TableCell>
          <TableCell align="right">Nationality</TableCell>
        </TableHeadRow>
      </TableHead>
      <tbody className="tbody">
        {data.results.map((user: IUserInfo) => {
          const { phone, email } = user;
          const { first, last, title } = user.name;
          const { country } = user.location;
          const fullName = convertFullName(title, first, last);

          return (
            <tr key={user.phone}>
              <TableCell width="5%">
                <UserAvatar className="cell-image" src={user.picture.thumbnail} alt="avatar" />
              </TableCell>
              <TableCell>
                <a href="/">{fullName}</a>
              </TableCell>
              <TableCell>{convertBirthday(user.dob)}</TableCell>
              <TableCell>
                <ClipCopy href={`mailto:${email}`}>{email}</ClipCopy>
              </TableCell>
              <TableCell>
                <ClipCopy href={`tel:${phone}`}>{phone}</ClipCopy>
              </TableCell>
              <TableCell>
                <ClipCopy>{convertLocation(user.location)}</ClipCopy>
              </TableCell>
              <TableCell align="right">
                <UserNation color={getColor()}>{country}</UserNation>
              </TableCell>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  </TableWrapper>
);

export { Table };
