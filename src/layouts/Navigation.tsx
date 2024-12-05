import { Link } from "react-router-dom";
import Button from "../components/buttons/Button";
import burger from "../assets/icon-menu.png";
import closeIcon from "../assets/icon-close.png";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { endpoint } from "../lib//slices/productState";

const Navigation = () => {
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();
  //* Временный

  // const handleClick = () => {};

  return (
    <>
      <nav className="navigation sticky top-0 z-10 bg-white bg-opacity-90 backdrop-blur-sm -md:static">
        <article className="flex justify-between align-middle">
          <ul className="flex -md:hidden">
            <Link to="/">
              <li
                className="navItems"
                onClick={() => dispatch(endpoint("pizza"))}
              >
                Питца
              </li>
            </Link>
            <Link to="combo">
              <li
                className="navItems"
                onClick={() => dispatch(endpoint("combo"))}
              >
                Комбо
              </li>
            </Link>
            <Link to="snacks">
              <li
                className="navItems"
                onClick={() => dispatch(endpoint("snacks"))}
              >
                Закуски
              </li>
            </Link>
            <Link to="deserty">
              <li
                className="navItems"
                onClick={() => dispatch(endpoint("deserty"))}
              >
                Десерты
              </li>
            </Link>
            <Link to="drinks">
              <li
                className="navItems"
                onClick={() => dispatch(endpoint("drinks"))}
              >
                Напитки
              </li>
            </Link>
            <Link to="sauces">
              <li
                className="navItems"
                onClick={() => dispatch(endpoint("sauces"))}
              >
                Соусы
              </li>
            </Link>
            <Link to="kidsLike">
              <li
                className="navItems"
                onClick={() => dispatch(endpoint("kidsLike"))}
              >
                Любят дети
              </li>
            </Link>
          </ul>
          <Link to={"/cart"} className="self-center">
            <Button style="py-2 px-5  rounded-3xl">Корзина</Button>
          </Link>
          <div className="hidden -md:block">
            <img
              src={burger}
              className="h-14 cursor-pointer rounded-lg border-2 border-orange-400"
              onClick={() => setShow(!show)}
            />
          </div>
        </article>
      </nav>
      <div
        className={`absolute z-50 bg-slate-400 bg-opacity-90 text-center backdrop-blur-sm ${show ? "block" : "hidden"} left-2/4 top-[49%] h-full w-full -translate-x-2/4 -translate-y-2/4`}
      >
        <div className="mx-auto mt-44 max-w-96 rounded-lg bg-white p-2">
          <img
            src={closeIcon}
            alt="Закрыть"
            onClick={() => setShow(!show)}
            className="mb-3 ml-auto size-12 cursor-pointer"
          />
          <ul>
            <Link to="/">
              <li
                className="py-5 hover:text-orange-400 hover:transition-all"
                onClick={() => {
                  dispatch(endpoint("pizza"));
                  setShow(!show);
                }}
              >
                Питца
              </li>
            </Link>
            <Link to="combo">
              <li
                className="py-5 hover:text-orange-400 hover:transition-all"
                onClick={() => {
                  dispatch(endpoint("combo"));
                  setShow(!show);
                }}
              >
                Комбо
              </li>
            </Link>
            <Link to="snacks">
              <li
                className="py-5 hover:text-orange-400 hover:transition-all"
                onClick={() => {
                  dispatch(endpoint("snacks"));
                  setShow(!show);
                }}
              >
                Закуски
              </li>
            </Link>
            <Link to="deserty">
              <li
                className="py-5 hover:text-orange-400 hover:transition-all"
                onClick={() => {
                  dispatch(endpoint("deserty"));
                  setShow(!show);
                }}
              >
                Десерты
              </li>
            </Link>
            <Link to="drinks">
              <li
                className="py-5 hover:text-orange-400 hover:transition-all"
                onClick={() => {
                  dispatch(endpoint("drinks"));
                  setShow(!show);
                }}
              >
                Напитки
              </li>
            </Link>
            <Link to="sauces">
              <li
                className="py-5 hover:text-orange-400 hover:transition-all"
                onClick={() => {
                  dispatch(endpoint("sauces"));
                  setShow(!show);
                }}
              >
                Соусы
              </li>
            </Link>
            <Link to="kidsLike">
              <li
                className="py-5 hover:text-orange-400 hover:transition-all"
                onClick={() => {
                  dispatch(endpoint("kidsLike"));
                  setShow(!show);
                }}
              >
                Любят дети
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navigation;
