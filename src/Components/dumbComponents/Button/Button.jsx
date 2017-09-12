import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    menu: {
        padding: 0,
        margin: 0,
    },
    item: {
        width: '100px',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bolder',
        display: 'inline-block',
        padding: '10px 20px',
    },
};

const Button = props => (<button
    disabled={props.isDisabled}
    className={props.classes.button}
    onClick={props.onClick}
>
    {props.label}
</button>);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    classes: PropTypes.objectOf(PropTypes.string),
};

Button.defaultProps = {
    isDisabled: false,
};

export default injectSheet(styles)(Button);
