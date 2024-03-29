import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ContactsView } from "../../components/ContactsView/ContactsView";
import { Filter } from "../../components/Filter/Filter";
import { Pagination } from "../../components/Pagination/Pagination";
import { SettingPanel } from "../../components/SettingPanel/SettingPanel";
import { Statistic } from "../../components/Statistic/Statistic";
import { fetchContacts } from "../../redux/contacts/action";
import { Container, Header, MainWrapper, Title } from "./ContactsStyle";

const Contacts: React.FC = () => {
  const dispatch = useDispatch();

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
        <ContactsView />
        <Statistic />
        <Pagination />
      </MainWrapper>
    </Container>
  );
};

export { Contacts };
