import React from 'react';
import PropTypes from 'prop-types';

const TechItem = props => {
    const {tech} = props;
    return (
        <li className="collection-item">
            <div>
                {tech.firstName} {tech.lasttName}
                <a href="#!" className="secondary-content">
                    <i className="material-icons grey-text">delete</i>
                </a>
            </div>
        </li>
    );
};

TechItem.propTypes = {
    tech: PropTypes.object.isRequired
};

export default TechItem;
