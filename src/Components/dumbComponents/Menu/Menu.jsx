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

const Menu = props => (<ul className={props.classes.menu}>
    { props.menuItems.map(menuItem => (
        <li
            className={props.classes.item}
            key={menuItem.id}
        >
            {menuItem.text}
        </li>)) }
</ul>);

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Menu);
