import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import NewsListItem from '../../dumbComponents/NewsListItem/NewsListItem.jsx';

const styles = {
    newsList: {
        padding: '20px',
    },
};

const NewsList = props => (<div className={props.classes.newsList}>
    {
        props.items.map(item => (<NewsListItem
            key={item.id}
            date={item.date}
            author={item.author}
            title={item.title}
            description={item.description}
            url={item.url}
            urlToImage={item.urlToImage}
            isSelected={item.isSelected}
            onClick={() => props.onClick(item.id)}
        />))
    }
</div>);

NewsList.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClick: PropTypes.func.isRequired,
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(NewsList);
