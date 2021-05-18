import Button from "./Button";

function Header({ title, onClick, showAdd }) {
  return (
    <div className="bg-yellow-500">
      <h1 className=" text-yellow-100 p-5">{title}</h1>
      <Button
        expression={showAdd ? "Cancle" : "Add"}
        background={showAdd ? "red" : "lightblue"}
        onClick={onClick}
      />
    </div>
  );
}

export default Header;

Header.defaultProps = {
  title: "Default Props",
};
