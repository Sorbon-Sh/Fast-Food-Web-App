
import { Link } from "react-router-dom"

const Navigation = () =>{
    return(
        <nav className="">
            <article className="flex justify-between align-middle">
  <ul className="flex list-none ">
   {Array.from(["Питца","Комбо","Закуски","Десерты","Напитки","Сиоусы","Любят дети"]).map((elem,index) => (
    <li className="px-5 py-4 hover:text-orange-400 hover:transition-all font-medium hover:cursor-pointer " key={index}>{elem}</li>
   ))}
  </ul>
  <Link to={"/junk"} className="self-center"><div className="py-3 px-7  rounded-3xl cursor-pointer text-white bg-orange-500 ">Корзина</div></Link>
  </article>
</nav>
    )
}

export default Navigation