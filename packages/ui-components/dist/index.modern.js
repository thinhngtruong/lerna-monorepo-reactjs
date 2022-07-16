import React from 'react';

const buttonStyle = {
  padding: '10px 20px'
};

const Button = props => {
  return /*#__PURE__*/React.createElement("button", {
    className: "btn btn-default",
    style: buttonStyle,
    onClick: props.handleClick
  }, props.label);
};

Button.defaultProps = {
  onClick: () => {},
  label: ''
};

export { Button };
//# sourceMappingURL=index.modern.js.map
