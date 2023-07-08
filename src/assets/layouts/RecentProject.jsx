import { Pickfresh } from "../components/Projects/Pickfresh";

export const RecentProject = () => {
  return (
    <>
      <div className="mx-6 md:mx-24 lg:mx-48">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="grid-item  mt-4">
            <span className="text-5xl font-bold">
              Recent <br />
              Projects
            </span>
          </div>
          <div className="grid-item lg:ml-12">
            <a href="./projects">
              <button className=" mt-6 w-56 rounded-md border bg-black p-3 text-xl font-bold text-white shadow transition-all duration-1000 ease-in-out hover:scale-110">
                View All
              </button>
            </a>
          </div>
        </div>
      </div>
      <div className="mx-4 mt-4 grid grid-cols-1 gap-3 md:mx-24 md:grid-cols-2 lg:mx-48 lg:grid-cols-3">
        <Pickfresh />
        <Pickfresh />
        <Pickfresh />
        <Pickfresh />
      </div>
    </>
  );
};
