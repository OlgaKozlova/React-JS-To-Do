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
        backgroundColor: '#8D70B0',
        border: '4px solid #373C4F',
    },
};

const Button = props => (<button
    className={props.classes.button}
    onClick={props.onClick}
>
    {props.label}
</button>);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Button);
