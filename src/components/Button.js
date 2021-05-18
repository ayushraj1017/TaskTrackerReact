const Button = ({ expression, background, onClick }) => {
  return (
    <div className="flex justify-center items-center">
      <button
        onClick={onClick}
        style={{ backgroundColor: background }}
        className=" p-4 text-blue-00  rounded-2xl"
      >
        {expression}
      </button>
    </div>
  );
};

export default Button;
