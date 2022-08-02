// Step 1: Import React
import * as React from "react";
import { Link } from "gatsby";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <h1>Welcome to my Gatsby site!</h1>
      <Link to="/about">About</Link>
      <p>I'm making this by following the Gatsby Tutorial.</p>
      <p>I have no idea what im doing tbh but im trying a ting.</p>
    </main>
  );
};
//testing testing

// Step 3: Export your component
export default IndexPage;
