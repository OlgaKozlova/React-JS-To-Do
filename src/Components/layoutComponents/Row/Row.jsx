import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    row: {
        display: 'flex',
    },
};

const Row = props => (<div className={props.classes.row}>{props.children}</div>);

Row.propTypes = {
    children: PropTypes.oneOfType(PropTypes.node, PropTypes.arrayOf(PropTypes.node)).isRequired,
    classes: PropTypes.arrayOf(PropTypes.string),
};

export default injectSheet(styles)(Row);
