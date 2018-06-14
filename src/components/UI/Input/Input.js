import React from 'react';

const input = props => {
  let inputElement;
  const inputClasses = [
    props.className,
    props.invalid ? props.invalidClassName : null
  ]

  switch (props.elementType) {
    case 'input':
      inputElement = (
        <input
          onChange={props.changed}
          {...props.elementConfig}
          value={props.value}
          className={inputClasses.join(' ')}
        />
      )
      break;
    default:
      inputElement = null;
  }

  return (
    <div className={props.wrapperClassName}>
      <label
        className={props.labelClassName}
        htmlFor={props.elementConfig.name}
      >
        {props.label}
      </label>
      {inputElement}
    </div>
  )
}

export default input;