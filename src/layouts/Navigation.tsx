import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import burger from "../assets/icon-menu.png";
import closeIcon from "../assets/icon-close.png";
import { MouseEvent, useState } from "react";
const Navigation = () => {
  const [show, setShow] = useState(false);

  // const closeNav = (event: MouseEvent) => {
  //   event.stopPropagation();

  //   setShow(!show);
  // };

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
    <>
      <nav className="bg-white bg-opacity-90 backdrop-blur-sm navigation sticky top-0 z-10 -md:static">
        <article className="flex justify-between align-middle">
          <div className=" hidden -md:block ">
            <img
              src={burger}
              className="h-14 border-2 border-orange-400 rounded-lg cursor-pointer "
              onClick={() => setShow(!show)}
            />
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
      <div
        className={` 
      w-32 absolute bg-slate-400 z-50 
      text-center bg-opacity-90 
      backdrop-blur-sm ${show ? "block" : "hidden"}
      w-full  h-full top-[49%] left-2/4 
    -translate-x-2/4 -translate-y-2/4
      `}
      >
        <div className="mt-44 max-w-96 bg-white p-2  mx-auto rounded-lg">
          <img
            src={closeIcon}
            alt="Закрыть"
            onClick={() => setShow(!show)}
            className="size-12 ml-auto mb-3 cursor-pointer"
          />
          <ul>
            {navItems.map((elem) => (
              <li className="py-5 hover:text-orange-400 hover:transition-all">
                {elem}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
