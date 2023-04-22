import React from "react";

import { Container, Logo, Tarefa } from "./Header.styled";
import { BiGridAlt } from "react-icons/bi";
import { BsFillClipboard2PlusFill } from "react-icons/bs";
import { RxDashboard } from "react-icons/rx";

import { TiCancel } from "react-icons/ti";
import logoLink from "./img/logo.svg";

function Header(height) {
  return (
    <Container>
      <button type="button">
        <RxDashboard size={32} />

        <h2>Projetos</h2>
      </button>
      <button type="button">
        <BsFillClipboard2PlusFill size={32} color={"#20ac51"} />

        <h2 color={"#20ac51"}>Tarefas</h2>
      </button>
      <button type="button">
        <Logo height={64} src={logoLink} />

        <h2>Home</h2>
      </button>
    </Container>
  );
}

export default Header;
