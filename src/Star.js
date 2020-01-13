import React from "react";
import PropTypes from 'prop-types';

const Star = ({ selected=false, onClick=f=>f }) =>
    <div className={(selected) ? "star selected" : "star"}
         onClick={onClick}>
    </div>;

Star.propTypes = {
    onClick: PropTypes.func,
    selected: PropTypes.bool
};

Star.defaultProps = {
    onClick: f=>f,
    selected: false
};

export default Star;