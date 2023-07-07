import { Paragrahp } from "./Paragraph";
import { icons } from "./Icons";

export const TechStack = () => {
  return (
    <>
      <div className="mx-4  grid grid-cols-1 md:mx-20  lg:mx-48 lg:grid-cols-2 lg:shadow-transparent">
        <div className="grid-item">
          <div className="mt-10 text-4xl font-semibold md:mx-24 lg:mx-14">
            <span>ABOUT ME</span>
          </div>
          <Paragrahp />
        </div>
        <div className="grid-item">
          <div className="mb-3 mt-10 text-4xl font-semibold md:mx-24 md:mb-0 lg:mx-14">
            <span>TECH STACK</span>
          </div>
          <div className="grid grid-cols-3 gap-3  md:mx-12 lg:mx-0  lg:gap-0">
            {icons.map((icon) => (
              <div className="grid-item md:p-2 lg:p-4" key={icon.name}>
                <div className=" cursor-pointer rounded-2xl p-8  text-center shadow-2xl hover:scale-110 lg:p-6">
                  <img src={icon.img} alt="" />
                  <span className=" text-base font-medium text-gray-500">
                    {icon.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
