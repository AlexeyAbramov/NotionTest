import React from "react";
import { Filter } from "../../components/Filter/Filter";
import { SettingPanel } from "../../components/SettingPanel/SettingPanel";
import { Statistic } from "../../components/Statistic/Statistic";
import { Table } from "../../components/Table/Table";
import { Container, Header, Title } from "./ContactsStyle";

const Contacts: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Contacts</Title>
        <SettingPanel />
      </Header>
      <main>
        <Filter />
        <Table />
        <Statistic />
      </main>
    </Container>
  );
};

export { Contacts };