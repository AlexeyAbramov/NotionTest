import React from "react";
import data from "./mock/data-min.json";
import "./App.css";
import { IUserInfo } from "./types/users";
import { convertBirthday, convertFullName, convertLocation } from "./helpers/data-convertor";
import { Table, TableContainer } from "./styled/Table";

const App: React.FC = () => (
  <div className="App">
    <TableContainer>
      <Table>
        <thead className="thead">
          <tr className="thead__row">
            <th className="thead__col thead__cell-image">Avatar</th>
            <th className="thead__col">Full name</th>
            <th className="thead__col">Birthday</th>
            <th className="thead__col">Email</th>
            <th className="thead__col">Phone</th>
            <th className="thead__col">Location</th>
            <th className="thead__col thead__cell-nation">Nationality</th>
          </tr>
        </thead>
        <tbody className="tbody">
          {data.results.map((user: IUserInfo) => {
            const { phone, email } = user;
            const { first, last, title } = user.name;
            const { country } = user.location;
            const fullName = convertFullName(title, first, last);

            return (
              <tr key={user.phone}>
                <td className="tbody__cell tbody__cell-image">
                  <img className="cell-image" src={user.picture.thumbnail} alt="avatar" />
                </td>
                <td className="tbody__cell tbody__cell-name">
                  <a href="/">{fullName}</a>
                </td>
                <td className="tbody__cell tbody__cell-birth">{convertBirthday(user.dob)}</td>
                <td className="tbody__cell tbody__cell-email">
                  <a href={`mailto:${email}`}>{email}</a>
                </td>
                <td className="tbody__cell tbody__cell-phone">
                  <a href={`tel:${phone}`}>{phone}</a>
                </td>
                <td className="tbody__cell tbody__cell-location">
                  {convertLocation(user.location)}
                </td>
                <td className="tbody__cell tbody__cell-nation">
                  <p className="cell-nation">{country}</p>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </TableContainer>
  </div>
);

export { App };
