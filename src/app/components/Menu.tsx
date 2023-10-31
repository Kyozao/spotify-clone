export default function Menu() {
  return (
    <div className="h-12 w-full p-2 my-2 flex justify-between">
      <div className="flex space-x-2">
        <a href="#" className="bg-black/20 rounded-full flex">
          <span className="material-symbols-outlined p-1 scale-75 relative left-0.5">
            arrow_back_ios
          </span>
        </a>
        <a href="#" className="bg-black/20 rounded-full flex">
          <span className="material-symbols-outlined p-1 scale-75 ">
            arrow_forward_ios
          </span>
        </a>
      </div>
      <div className="flex space-x-2">
        <a href="#" className="bg-black/20 rounded-full flex">
          <span className="material-symbols-outlined p-1 scale-75 left-0.5">
            notifications
          </span>
        </a>
        <a href="#" className="bg-black/20 rounded-full flex">
          <span className="material-symbols-outlined p-1 scale-75 left-0.5">
            groups
          </span>
        </a>
        <a href="#" className="bg-black/20 rounded-full flex">
          <span className="material-symbols-outlined p-1 scale-75 left-0.5">
            person
          </span>
        </a>
      </div>
    </div>
  );
}
