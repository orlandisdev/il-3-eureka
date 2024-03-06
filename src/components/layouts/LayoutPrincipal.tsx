import { FC } from "react";
import { Header, Menu } from "..";
import { ConfigInterface } from "../../types/configSite.types";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import routerAdapter from "../../helpers/routerAdapter";

interface Props {
  data: ConfigInterface;
}

export const Layout: FC<Props> = ({ data }) => {
  const Container = styled.div`
    display: grid;
    grid-template-columns: auto repeat(2, 1fr);
  `;
  routerAdapter();
  return (
    <>
      <Header data={data} />
      <Container>
        <Menu data={data} />
        <Outlet />
      </Container>
    </>
  );
};
