import PropTypes from "prop-types";
function Button({ children, onClickHandler, className }) {
  function onClickHandlerPrevent(e) {
    e.preventDefault();
    onClickHandler();
  }
  return (
    <button className={className} onClick={onClickHandlerPrevent}>
      {children}
    </button>
  );
}
Button.propTypes = {
  children: PropTypes.node,
  onClickHandler: PropTypes.func,
  className: PropTypes.string,
};
export default Button;
