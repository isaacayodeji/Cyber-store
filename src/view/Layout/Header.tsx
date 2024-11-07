import CyberLogo from "../../assets/icons/cyber.svg";
import Cart from "../../assets/icons/cart.svg";
import User from "../../assets/icons/user.svg";
import { Badge, Input } from "antd";
import { CiSearch } from "react-icons/ci";
import { Link } from "react-router-dom";
import { routerPath } from "../../utils/helper";

const Header: React.FC = () => {
  return (
    <div className="sticky top-0 z-30 bg-white">
      <div className="flex justify-between p-5">
        <Link to={routerPath.Products}>
          <img className="cursor-pointer" src={CyberLogo} alt="cyber" />
        </Link>
        <div className="">
          <Input
            className="lg:w-[400px]"
            size="large"
            placeholder="search"
            prefix={<CiSearch />}
          />
        </div>
        <div className="flex gap-4">
          <Link to={routerPath.Cart}>
            <Badge count={5}>
              <img className="h-8 w-8 cursor-pointer" src={Cart} alt="cart" />
            </Badge>
          </Link>
          <Link to={routerPath.Profile}>
            <img className="h-8 w-8 cursor-pointer" src={User} alt="user" />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
