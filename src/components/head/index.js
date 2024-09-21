<<<<<<< HEAD
import React, {useCallback} from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head({ title}) {

=======
import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

function Head({ title }) {
>>>>>>> 8329d0d275cfdb630a5800801f9862536640983a
  return (
    <div className="Head">
      <h1>{title}</h1>
    </div>
  );
}

Head.propTypes = {
  title: PropTypes.node,
};

export default React.memo(Head);
