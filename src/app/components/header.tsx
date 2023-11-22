import { Logo } from "./logo";
import { Link } from "react-router-dom";


export const Header = () => {

  return (
    <div className="header">
      <div className="flex-auto">
        <Link to="/">
          <Logo width="200" />
        </Link>
      </div>
    </div>
  );
};