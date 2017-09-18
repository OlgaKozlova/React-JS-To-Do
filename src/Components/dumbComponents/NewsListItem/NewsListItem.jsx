import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Row from '../../layoutComponents/Row/Row.jsx';
import Column from '../../layoutComponents/Column/Column.jsx';

const styles = {
    newsListItem: {
        padding: '20px',
    },
    image: {
        maxWidth: '100%;',
    },
};

const NewsListItem = props => (<div
    className={props.classes.newsListItem}
    onClick={props.onClick}
    role="button"
    tabIndex="0"
>
    <Row>
        <Column>
            <div>{props.date}</div>
        </Column>
        <Column>
            <div>{props.author}</div>
        </Column>
    </Row>
    <Row>
        <Column>
            <div>{props.title}</div>
        </Column>
    </Row>
    <Row>
        <Column>
            <div>{props.description}</div>
        </Column>
    </Row>
    <Row>
        <Column>
            <a href={props.url}>Read all</a>
        </Column>
    </Row>
    <Row>
        <Column>
            <img className={props.classes.image} src={props.urlToImage} alt={props.description} />
        </Column>
    </Row>
    <Row>
        <Column>
            <div>{props.isSelected}</div>
        </Column>
    </Row>
</div>);

NewsListItem.propTypes = {
    date: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    urlToImage: PropTypes.string.isRequired,
    isSelected: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(NewsListItem);
