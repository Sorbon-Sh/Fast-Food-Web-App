import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import burger from "../assets/icon-menu.png";
import { useState } from "react";
const Navigation = () => {
  const [show, setShow] = useState(false);
  const navItems = [
    "Питца",
    "Комбо",
    "Закуски",
    "Десерты",
    "Напитки",
    "Сиоусы",
    "Любят дети",
  ];
  return (
    <nav className="bg-white bg-opacity-90 backdrop-blur-sm navigation sticky top-0 z-20">
      <article className="flex justify-between align-middle">
        <div className="relative hidden -md:block">
          <img
            src={burger}
            className="h-14 border-2 border-orange-400 rounded-lg cursor-pointer "
            onClick={() => setShow(!show)}
          />

          <ul
            className={` w-32 absolute bg-white  text-center bg-opacity-90 backdrop-blur-sm ${
              show ? "block" : "hidden"
            }`}
          >
            {navItems.map((elem) => (
              <li className="py-5 hover:text-orange-400 hover:transition-all">
                {elem}
              </li>
            ))}
          </ul>
        </div>
        <ul className="flex -md:hidden">
          {navItems.map((elem, index) => (
            <li
              className="pr-5 py-5 hover:text-orange-400 hover:transition-all font-medium hover:cursor-pointer "
              key={index}
            >
              {elem}
            </li>
          ))}
        </ul>
        <Link to={"/junk"} className="self-center">
          <Button style="py-2 px-5  rounded-3xl">Корзина</Button>
        </Link>
      </article>
    </nav>
  );
};

export default Navigation;
