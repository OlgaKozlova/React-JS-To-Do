import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    input: {
        padding: 0,
        margin: 0,
    },
};

const Input = props => (<input
    className={props.classes.input}
    onChange={props.onChange}
/>);

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Input);
