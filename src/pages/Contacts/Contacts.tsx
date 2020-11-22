import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../components/Filter/Filter";
import { Pagination } from "../../components/Pagination/Pagination";
import { SettingPanel } from "../../components/SettingPanel/SettingPanel";
import { Statistic } from "../../components/Statistic/Statistic";
import { Table } from "../../components/Table/Table";
import { fetchContacts } from "../../redux/contacts/action";
import { getContactParts } from "../../redux/contacts/selectors";
import { Container, Header, MainWrapper, Title } from "./ContactsStyle";

const Contacts: React.FC = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContactParts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container>
      <Header>
        <Title>Contacts</Title>
        <SettingPanel />
      </Header>
      <MainWrapper>
        <Filter />
        <Table data={contacts} />
        <Statistic />
        <Pagination />
      </MainWrapper>
    </Container>
  );
};

export { Contacts };
