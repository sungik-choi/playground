/* eslint-disable react/jsx-key */
import React from 'react';
import Link from 'next/Link'

function Home() {
  return (
    <div>
      <h1>Test CSS-IN-JS</h1>
      <nav>
        <Link href="/">Home</Link> |{" "}
        <Link href="stitches">Stitches</Link> |{" "}
        <Link href="styled-comp">Styled Components</Link>
      </nav>
    </div>
  );
}

export default Home;