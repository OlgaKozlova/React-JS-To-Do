import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    title: {
        textAlign: 'center',
    },
    description: {
        textAlign: 'center',
        fontSize: '1.5em',
    },
};

const Header = props => (<header>
    <h1 className={props.classes.title}>{props.title}</h1>
    <div className={props.classes.description}>{props.description}</div>
</header>);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Header);
