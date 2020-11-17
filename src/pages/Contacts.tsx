import React from "react";
import { Filter } from "../components/Filter";
import { SettingPanel } from "../components/SettingPanel";
import { Table } from "../components/Table";
import { Container, Header, Title } from "../styled/Contacts";

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
      </main>
    </Container>
  );
};

export { Contacts };
