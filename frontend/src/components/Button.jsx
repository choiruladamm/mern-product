/* eslint-disable react/prop-types */

const Button = ({ title, styles, onClick }) => {
  return (
    <button
    onClick={onClick}
      type="button"
      className={`${styles} text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5`}
    >
      {title}
    </button>
  );
};

export default Button;
