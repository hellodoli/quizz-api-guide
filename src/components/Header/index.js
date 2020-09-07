import React from 'react';
import { HeaderWrapper, ListWrapper, NavHeader, LinkItem } from './styled';

function Header() {
  return (
    <HeaderWrapper>
      <div className="container">
        <NavHeader>
          <ListWrapper>
            <li>
              <LinkItem to="/">Home</LinkItem>
            </li>
            <li>
              <LinkItem to="/guide">Guide</LinkItem>
            </li>
            <li>
              <LinkItem to="/model">Model</LinkItem>
            </li>
          </ListWrapper>
        </NavHeader>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
