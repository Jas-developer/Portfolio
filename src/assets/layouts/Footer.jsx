import { CgMail } from "react-icons/cg";
import { AiOutlinePhone, AiOutlineMessage } from "react-icons/ai";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineInstagram,
} from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className="mt-10 md:mx-24 lg:mx-48">
      <hr className="shadow" />
      <div className="footer grid md:grid-cols-2 lg:grid-cols-3">
        <div className="grid-item">
          <div className="flex flex-col p-4">
            <span className="text-2xl font-bold">Jason Evaristo</span>
            <span className="font-semibold text-gray-400">
              Software Engineer
            </span>
            <div className="mt-4 flex flex-col gap-3">
              <span className="font-bold">Social Media Links</span>
              <span className=" flex flex-row text-xl font-semibold text-gray-600 hover:underline">
                <BsArrowRight size={30} />
                Facebook
              </span>
              <span className="flex flex-row text-xl font-semibold text-gray-600 hover:underline">
                <BsArrowRight size={30} /> Instagram
              </span>
            </div>
          </div>
        </div>
        <div className="grid-item ">
          <div className="flex flex-col  gap-4 p-4">
            <span className="text-xl font-bold ">Contact</span>
            <span className="flex flex-row ">
              <CgMail size={35} className="text-red-700" />
              <b className="text-xl text-gray-600">: devop.jas@gmail.com</b>
            </span>
            <span className="flex flex-row ">
              <AiOutlinePhone size={30} className="text-green-700" />
              <b className="text-xl text-gray-600">: +639705038067</b>
            </span>
            <span className="flex flex-row ">
              <AiOutlineMessage size={30} className="text-blue-700" />{" "}
              <b className="text-xl text-gray-600">: +639705038067</b>
            </span>
          </div>
        </div>
        <div className="grid-item ">
          <div className="flex flex-row justify-start gap-4 p-4 lg:justify-end">
            <span>
              <AiFillLinkedin
                size={35}
                className="cursor-pointer text-gray-600 transition-all duration-700 hover:scale-110"
              />
            </span>
            <span>
              <AiOutlineGithub
                size={35}
                className="cursor-pointer text-gray-600 transition-all duration-700 hover:scale-110"
              />
            </span>
            <span>
              <AiOutlineInstagram
                size={35}
                className="cursor-pointer text-gray-600 transition-all duration-700 hover:scale-110"
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
