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
        fontWeight: 'bolder',
        display: 'inline-block',
        padding: '10px 20px',
        border: '1px solid',
    },
};

const Menu = props => (<ul className={props.classes.menu}>
    { props.menuItems.map(menuItem => (
        <div
            key={menuItem.id}
            role="button"
            tabIndex={0}
            className={props.classes.item}
            onClick={() => props.onClick(menuItem.url)}
        >
            {menuItem.text}
        </div>
    )) }
</ul>);

Menu.propTypes = {
    menuItems: PropTypes.arrayOf(PropTypes.object).isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Menu);
