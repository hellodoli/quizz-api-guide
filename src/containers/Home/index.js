import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MainTitle, EmojiWrapp } from '../../theme/CommonStyle';
import { RowItem, RowContent } from './styled';

function Home() {
  const [list] = useState([
    { left: 'GET', right: '/quizzs' },
    { left: 'GET', right: '/quizzs/:quizzId' },
    { left: 'POST', right: '/quizzs' },
    { left: 'PATCH', right: '/quizzs/:quizzId' },
  ]);
  return (
    <div>
      <div className="container">
        <main className="pb-5">
          <MainTitle>Resources</MainTitle>
          <p>
            A set of 1 common resources: <strong>Quizzs</strong>
          </p>
          <p>
            (Maybe update in future)
            <EmojiWrapp>&#128065;</EmojiWrapp>
            <EmojiWrapp>&#128068;</EmojiWrapp>
            <EmojiWrapp>&#128065;</EmojiWrapp>
          </p>
          <MainTitle>Routes</MainTitle>
          <p>All HTTP methods are supported.</p>
          <div className="mb-3">
            {list.map((item, index) => (
              <RowItem key={index}>
                <RowContent>{item.left}</RowContent>
                <RowContent right>{item.right}</RowContent>
              </RowItem>
            ))}
          </div>
          <p>
            Note: you can view detailed examples <Link to="/guide">here</Link>.
          </p>
        </main>
      </div>
    </div>
  );
}

export default Home;
