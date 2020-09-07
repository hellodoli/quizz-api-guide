import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 70px;
  border-bottom: 1px solid #e4e4e4;
  background: #fff;
  z-index: 999;
`;

export const NavHeader = styled.nav`
  width: 100%;
`;

export const ListWrapper = styled.ul`
  margin: 0 -1.5rem;
  padding: 0;
  list-style: none;
  display: flex;
  justify-content: flex-start;
`;

export const LinkItem = styled(NavLink)`
  display: block;
  padding: 1.5rem;
  white-space: nowrap;
  color: inherit;
`;
