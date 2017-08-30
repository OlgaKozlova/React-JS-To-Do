import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
    title: {
        background: 'red',
    },
    description: {
        fontWeight: 'bold',
    },
};

const Header = props => (<header>
    <div className={props.classes.title}>{props.title}</div>
    <div className={props.classes.description}>{props.description}</div>
</header>);

Header.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default injectSheet(styles)(Header);
