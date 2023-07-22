import PropTypes from "prop-types";
function Button({ children, onClickHandler, className }) {
  return (
    <button className={className} onClick={onClickHandler}>
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
