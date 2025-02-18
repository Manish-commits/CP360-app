import userLogo from "../assets/user-solid.svg";

const Header = () => {
  return (
    <div className="w-full bg-white flex justify-end shadow-md p-1">
      <img alt="user-logo" src={userLogo} className="w-[54px] h-[54px] bg-amber-100 p-2 rounded-md" />
    </div>
  );
};

export default Header;
