import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

function Header({ siteTitle }) {
  const [isExpanded, toggleExpansion] = useState(false);

  return (
    <nav>
      <div className="flex items-center justify-between p-2 md:p-4 fixed pin-x">
        <Link
          to="/"
          title={siteTitle}
          className="flex items-center no-underline text-white"
        >
          <span className="font-bold text-xl tracking-tight">OÖ</span>
        </Link>

        <button
          className="block flex items-center px-3 py-2 rounded text-white"
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
}

Header.propTypes = {
  siteTitle: PropTypes.string
};

Header.defaultProps = {
  siteTitle: ``
};

export default Header;
