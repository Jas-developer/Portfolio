import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const Header = () => {
  return (
    <section className="grid grid-cols-2 grid-rows-2 sm:mt-10 md:mx-24 lg:mx-48  lg:grid-cols-3">
      <div className="grid-item order-1 p-4  ">
        <div className="flex flex-col ">
          <span className="flex-item cursor-pointer text-xl font-bold">
            Jason E.
          </span>
          <span className="flex-item text-gray-600">Software Engineer</span>
        </div>
      </div>
      <div className="grid-item order-3 col-span-2 text-center sm:order-2 sm:col-span-1 md:order-2">
        <div className="flex flex-wrap justify-start gap-5 p-5 font-semibold text-gray-600 md:justify-end lg:justify-center">
          <span className="cursor-pointer">About</span>
          <span className="cursor-pointer">Projects</span>
          <span className="cursor-pointer">Contacts</span>
        </div>
      </div>
      <div className="grid-item order-2 inline-block text-center sm:order-3">
        <div className="flex flex-wrap justify-end gap-3 p-5 text-gray-600 md:order-3 md:justify-start lg:justify-end">
          <span>
            <AiFillLinkedin size={28} className="cursor-pointer" />
          </span>
          <span>
            <AiOutlineGithub size={28} className="cursor-pointer" />
          </span>
          <span>
            <AiOutlineInstagram size={28} className="cursor-pointer" />
          </span>
        </div>
      </div>
    </section>
  );
};

export default Header;
