
const UserAccount = () => {
  return (
    <div className="bg-opacity-20 bg-gray-400 rounded-full text-center place-content-center cursor-pointer flex w-80 items-center px-4 justify-between gap-4">
      <div className="flex items-center gap-4">
      <div className="relative h-10 w-10 rounded-full overflow-hidden">
        <img className="absolute scale-[2.2] bottom-0" src='/one-peace.jpg'/>
      </div>
      <div className="">
        <p>John Doe</p>
        <p className="text-gray-400">@john_doe</p>
      </div>
      </div>
      <i className="ph ph-caret-down text-2xl"></i>
    </div>
  )
}

export default UserAccount