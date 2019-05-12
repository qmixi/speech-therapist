import React from 'react';
import { Link } from 'gatsby';

import SEO from 'components/seo';

const IndexPage = () => (
  <div>
    <SEO title="" keywords={[`logopeda`, `neurologopeda`, `Toruń`]} />
    <h1>Logopeda Toruń</h1>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
);

export default IndexPage;
