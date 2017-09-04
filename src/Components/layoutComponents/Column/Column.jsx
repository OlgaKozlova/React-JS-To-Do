import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    column: {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
    },
};

const Column = props => (<div className={props.classes.column}>{props.children}</div>);

Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Column);
