import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        fontFamily: 'sans-serif',
        backgroundColor: 'rgb(246, 245, 238)',
        boxShadow: '0 0 15px rgba(55, 60, 79, 0.5)',
        color: 'rgb(55, 60, 79)',
    },
    '@media (min-width: 1024px)': {
        container: {
            width: '70%',
            margin: 'auto',
        },
    },
};

const View = props => <div className={props.classes.container}>{props.children}</div>;

View.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(View);
