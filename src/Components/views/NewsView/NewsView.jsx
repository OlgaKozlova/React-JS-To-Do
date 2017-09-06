import React from 'react';
import { connect } from 'react-redux';

import NewsViewActions from './NewsViewActions.js';
import NewsViewSelector from './NewsViewSelector.js';

import Row from '../../layoutComponents/Row/Row.jsx';
import Column from '../../layoutComponents/Column/Column.jsx';
import View from '../../layoutComponents/View/View.jsx';

import Header from '../../dumbComponents/Header/Header.jsx';
import Menu from '../../dumbComponents/Menu/Menu.jsx';
import NewsList from '../../dumbComponents/NewsList/NewsList.jsx';

export default connect(NewsViewSelector, NewsViewActions)(props => (<View>
    <Row>
        <Column>
            <Header
                title={props.title}
                description={props.description}
            />
        </Column>
    </Row>
    <Row>
        <Column>
            <Menu
                menuItems={props.menuItems}
            />
        </Column>
    </Row>
    <Row>
        <Column>
            <NewsList
                items={props.news}
                onClick={props.toggleIsItemSelected}
            />
        </Column>
    </Row>
</View>));
