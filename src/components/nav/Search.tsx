
const Search = () => {
  return (
    <div className="flex gap-4 items-center rounded-full  bg-gray-600 bg-opacity-20 shadow-inner col-start-1 h-14 py-2 px-8 ">
    <i className=" ph ph-magnifying-glass text-xl"></i>
    <input className="cursor-default  z-10 bg-transparent h-full w-full focus:outline-none placeholder:text-white " placeholder="Search Movies"/>
    </div>
  )
}

export default Search