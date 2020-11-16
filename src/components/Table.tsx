import React from "react";
import { convertBirthday, convertFullName, convertLocation } from "../helpers/data-convertor";
import { TableCell, TableContainer, TableHead, TableWrapper } from "../styled/Table";
import { IUserInfo } from "../types/users";
import data from "../mock/data-min.json";

const Table: React.FC = () => (
  <TableWrapper>
    <TableContainer>
      <TableHead>
        <tr className="thead__row">
          <TableCell width="7rem" align="center">
            Avatar
          </TableCell>
          <TableCell>Full name</TableCell>
          <TableCell>Birthday</TableCell>
          <TableCell>Email</TableCell>
          <TableCell>Phone</TableCell>
          <TableCell>Location</TableCell>
          <TableCell align="right">Nationality</TableCell>
        </tr>
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
                <img className="cell-image" src={user.picture.thumbnail} alt="avatar" />
              </TableCell>
              <TableCell>
                <a href="/">{fullName}</a>
              </TableCell>
              <TableCell>
                {convertBirthday(user.dob)}
              </TableCell>
              <TableCell>
                <a href={`mailto:${email}`}>{email}</a>
              </TableCell>
              <TableCell>
                <a href={`tel:${phone}`}>{phone}</a>
              </TableCell>
              <TableCell>
                {convertLocation(user.location)}
              </TableCell>
              <TableCell align="right">
                <p className="cell-nation">{country}</p>
              </TableCell>
            </tr>
          );
        })}
      </tbody>
    </TableContainer>
  </TableWrapper>
);

export { Table };
