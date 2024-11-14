import ProductItems from "../components/ProductItems"

const Content = () =>{
    return(
        <section className=" bg-orange-300 p-3 content grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))]   gap-y-5 gap-x-4">{Array.from([1,2,3,4,5,6,7,8,9,10].map((elem,index)=>(
          <ProductItems key={index} />
          )))}</section>
    )
}

export default Content