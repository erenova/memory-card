import { useState } from "react";
import { MdQuestionMark } from "react-icons/md";
import { FaCaretDown } from "react-icons/fa";

const Popover = ({ theme }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      {isOpen && (
        <div
          onMouseEnter={() => setIsOpen(true)} // Keep open on hover
          onMouseLeave={() => setIsOpen(false)}
          className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10 -translate-y-[120%]"
        >
          <div className="p-4">
            <p className="text-gray-700">
              try to avoid clicking the same card twice!
            </p>
          </div>
          <div className="absolute -translate-y-[25%] text-white  text-5xl">
            <FaCaretDown />
          </div>
        </div>
      )}
      <button className=" bg-memoryShowWhite rounded-md text-4xl lg:text-5xl p-2 hover:ring-memoryShowBlue hover:ring-1">
        <span
          onClick={() => setIsOpen(!isOpen)}
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
          className="drop-shadow-lg text-[#c2759d]"
        >
          <MdQuestionMark />
        </span>
      </button>
    </div>
  );
};

export default Popover;
