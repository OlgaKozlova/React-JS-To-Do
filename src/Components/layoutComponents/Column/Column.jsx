import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    column: {
        display: 'flex',
        flexDirection: 'column',
        flex: props => props.weight,
    },
};

const Column = props => (<div className={props.classes.column}>{props.children}</div>);

Column.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
    weight: PropTypes.number,
};

Column.defaultProps = {
    weight: 1,
};

export default injectSheet(styles)(Column);
