
const YouMightLikeCard = ({img, genre, title, description}) => {
  

  return (
    <div className=" relative grid  grid-rows-[2fr,1fr,0.7fr,4.2rem] grid-cols-[4fr,1fr] rounded-3xl w-72 px-4 pt-4 pb-6">
    <div style={{ backgroundImage: `url(${img})` }} className={`absolute  inset-0  rounded-3xl bg-cover bg-center -z-20`}/>
    <span className="absolute inset-0 bg-gradient-to-t rounded-3xl from-black from-20% to-transparent to-60% opacity-100 -z-10"></span>
    <button className="col-start-2 text-white h-12 w-12 text-2xl  justify-self-end justify-self-start rounded-full flex justify-center items-center gap-6 bg-opacity-20 backdrop-blur-lg bg-slate-600">
    <i className="ph-fill ph-dots-three-outline text-3xl"></i>
    </button>
    <div className="flex self-center row-start-2 gap-4">
    <div className="w-fit text-white px-4 bg-opacity-20 backdrop-blur-lg bg-slate-600  h-8 text-center content-center rounded-full">{genre}</div>
    </div>
    <h2 className="row-start-3 col-span-2 text-lg text-white overflow-hidden">{title}</h2>
    <p className="row-start-4 text-gray-400 line-clamp-3 overflow-hidden">{description}</p>

    <div className="row-start-4 col-start-2  flex w-full gap-8 justify-end">
    <button className="backdrop-blur-lg bg-white text-black h-12 w-12  self-center rounded-full flex justify-center items-center gap-6 ">
    <i className="ph-fill ph-play text-lg"/>
    </button>           
    </div>
    </div>
  )
}

export default YouMightLikeCard