import PropTypes from "prop-types";
function Button({
  children,
  type = "button",
  onClickHandler = () => {},
  className,
  disabled = false,
}) {
  function onClickHandlerPrevent(e) {
    e.preventDefault();
    onClickHandler();
  }
  return (
    <button
      type={type}
      disabled={disabled}
      className={className}
      onClick={onClickHandlerPrevent}
    >
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node,
  type: PropTypes.string,
  onClickHandler: PropTypes.func,
  className: PropTypes.string,
};
export default Button;
