import { Link } from "react-router-dom";
import {BsInstagram} from 'react-icons/bs'
import {AiFillLinkedin} from "react-icons/ai"
import {SiLeetcode,SiCodechef} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import { SiCodeforces } from "react-icons/si";


export const Footer = () => {
  return (
    <div  className="w-16 justify-center  opacity-60  border-white fixed top-[30%]  text-white text-2xl">
         <div className=" rounded-[20px] shadow-gray-600  bg-white dark:bg-gray-800  ">
          <ul className=" text-sm text-gray-500 dark:text-gray-400 sm:mt-0 mr justify-center">
             
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://www.linkedin.com/in/shubam-chaudhary-41005a241/" target="_blank" rel="noreferrer" className="mr-4 hover:text-5xl text-4xl hover:underline md:mr-6">  <AiFillLinkedin className="mx-10 text-blue-600"/></a>
              </li>
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://leetcode.com/SHUBAMCHAUDHARY/" target="_blank" rel="noreferrer" className="mr-4 hover:text-5xl text-4xl hover:underline md:mr-6"><SiLeetcode className="mx-10 text-[#e1c706]"/></a>
              </li>
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://github.com/shubamchaudhary" target="_blank" rel="noreferrer" className="mr-4 text-4xl hover:text-5xl hover:underline md:mr-6"><BsGithub className="mx-10 text-black"/></a>
              </li>
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://www.codechef.com/users/shubam17sam" target="_blank" rel="noreferrer" className="mr-4 text-4xl hover:text-5xl hover:underline md:mr-6"><SiCodechef className="mx-10 text-[#ec9909cc]"/></a>
              </li>
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://codeforces.com/profile/sam17y" target="_blank" rel="noreferrer" className="mr-4 text-4xl hover:text-5xl hover:underline md:mr-6"><SiCodeforces className="mx-10 text-yellow-800"/></a>
              </li>
              <li className="flex justify-center p-4 ml-8">
                  <a href="https://www.instagram.com/shubam_chaudhary_/" target="_blank" rel="noreferrer" className=" text-4xl hover:text-5xl hover:underline md:mr-6 "><BsInstagram className="mx-10 text-[#bd075ccc]"/></a>
              </li >
          </ul>
      </div>
    </div>
  )
}