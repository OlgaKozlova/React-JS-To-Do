import React from 'react';
import PropTypes from 'prop-types';

const Menu = props => (<ul>
    { props.menuItems.map(menuItem => (<li key={menuItem.id}>{menuItem.text}</li>)) }
</ul>);

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Menu;
