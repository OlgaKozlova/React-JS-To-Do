import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

import Row from '../../layoutComponents/Row/Row.jsx';
import Column from '../../layoutComponents/Column/Column.jsx';

const styles = {
    input: {
        padding: 0,
        margin: 0,
        width: '100%',
    },
};

const Input = props => (<Row>
    <Column>
        <Row>
            <div>{props.label}</div>
        </Row>
        <Row>
            <input
                type={props.type}
                className={props.classes.input}
                onChange={props.onChange}
            />
        </Row>
        <Row>
            <div>{props.prompt}</div>
        </Row>
    </Column>

</Row>
);

Input.propTypes = {
    onChange: PropTypes.func.isRequired,
    label: PropTypes.string.isRequired,
    prompt: PropTypes.string.isRequired,
    type: PropTypes.oneOf('text', 'date'),
    classes: PropTypes.objectOf(PropTypes.string),
};

export default injectSheet(styles)(Input);
