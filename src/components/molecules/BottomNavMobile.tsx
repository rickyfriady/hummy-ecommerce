import { AiOutlineGift, AiOutlineHome, AiOutlineShop, AiOutlineUser } from 'react-icons/ai';

const BottomNavMobile = () => {
  return (
    <div className="w-full h-full mt-2 px-4">
      <ul className="flex justify-between items-center">
        <li className="py-2 px-3 bg-gray-400 rounded-lg text-black cursor-pointer hover:bg-white  transition-colors duration-1000 hover:transition-colors hover:duration-500">
          <span>
            <AiOutlineHome className="w-8 h-8" />
          </span>
        </li>
        <li className="py-2 px-3 bg-gray-400 rounded-lg text-black cursor-pointer hover:bg-white  transition-colors duration-1000 hover:transition-colors hover:duration-500">
          <span>
            <AiOutlineShop className="w-8 h-8" />
          </span>
        </li>
        <li className="py-2 px-3 bg-gray-400 rounded-lg text-black cursor-pointer hover:bg-white  transition-colors duration-1000 hover:transition-colors hover:duration-500">
          <span>
            <AiOutlineGift className="w-8 h-8" />
          </span>
        </li>
        <li className="py-2 px-3 bg-gray-400 rounded-lg text-black cursor-pointer hover:bg-white  transition-colors duration-1000 hover:transition-colors hover:duration-500">
          <span>
            <AiOutlineUser className="w-8 h-8 " />
          </span>
        </li>
      </ul>
    </div>
  );
};

export default BottomNavMobile;
