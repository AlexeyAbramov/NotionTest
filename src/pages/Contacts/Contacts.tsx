import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../components/Filter/Filter";
import { SettingPanel } from "../../components/SettingPanel/SettingPanel";
import { Statistic } from "../../components/Statistic/Statistic";
import { Table } from "../../components/Table/Table";
import { fetchContacts } from "../../redux/contacts/action";
import { getSortedContacts } from "../../redux/contacts/selectors";
import { Container, Header, Title } from "./ContactsStyle";

const Contacts: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getSortedContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Title>Contacts</Title>
        <SettingPanel />
      </Header>
      <main>
        <Filter />
        <Table data={contacts} />
        <Statistic />
      </main>
    </Container>
  );
};

export { Contacts };
