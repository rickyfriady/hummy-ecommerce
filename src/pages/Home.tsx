import Globe from '../assets/Globe.svg';
import star from '../assets/Star.svg';
import nexticon from '../assets/nextIcon.svg';
import playIcon from '../assets/playIcon.svg';
import prevIcon from '../assets/previousIcon.svg';
import SantaPng from '../assets/santa-head-trans.png';

import * as React from 'react';

const Home = () => {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = React.useState(false);

  const videoHandler = (control: any) => {
    if (control === 'play') {
      // videoRef.current.play();
      setPlaying(true);
    } else if (control === 'pause') {
      // videoRef.current.pause();
      setPlaying(false);
    }
  };

  return (
    <>
      <div className="flex justify-evenly gap-2 md:gap-0.5 flex-col md:flex-row ">
        <div className="md:w-[944px] md:h-[709px] rounded-[20px] overflow-hidden border-none relative">
          <video className="w-full h-full bg-slate-200 object-cover" autoPlay={false} ref={videoRef}>
            <source src="https://res.cloudinary.com/dy2uwxgvf/video/upload/v1681633461/hummy-ecommerce/hummy-video_mrmguq.mp4" type="video/mp4" />
            Error Message
          </video>
          {/* controls */}
          <div className="w-full h-full flex flex-col items-center bg-transparent justify-between px-6  absolute top-0 right-0 bg-white">
            <div className="flex w-full justify-between mt-5">
              <a href="#_" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg  bg-[#D7FFC5]"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="font-bebasneue leading-4 relative">california, usa</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>

              <a href="#_" className="relative inline-block text-lg group">
                <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                  <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg  bg-[#DBACFF]"></span>
                  <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                  <span className="font-bebasneue leading-4 relative">house</span>
                </span>
                <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
              </a>
            </div>
            <div className="flex items-center justify-evenly  m-auto">
              <img className="w-8 h-8 cursor-pointer mx-8" alt="" src={prevIcon} />
              <div className="w-20 h-20 cursor-pointer mx-8 inline-flex rounded-[20px] border-b-4 border-r-4 border-black bg-[#FFC264] hover:border-0 hover:transition-transform hover:duration-700 duration-200">
                <img className="w-8 h-8 m-auto " alt="" src={playIcon} onClick={() => videoHandler('play')} />
              </div>
              <img className="w-8 h-8 cursor-pointer mx-8" alt="" src={nexticon} />
            </div>
            <div className="flex flex-col w-full">
              <div className="flex justify-between items-center">
                <div className="flex flex-col">
                  <span className="font-poppins text-lg text-black">Price</span>
                  <h1 className="font-bebasneue text-[64px] text-[#FEC477]" style={{ textShadow: '2px 2px black' }}>
                    120000
                  </h1>
                </div>

                <a href="#_" className="relative inline-block text-lg group ">
                  <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                    <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg  bg-[#e9e7e7]"></span>
                    <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                    <span className="font-bebasneue leading-4 relative">Details</span>
                  </span>
                  <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                </a>
              </div>

              <div className="bg-gray-400 mx-5 my-5 rounded-2xl h-2">
                <div style={{ width: '40%' }} className="rounded-2xl bg-black h-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-stretch items-center gap-0.5 relative">
          <div className="md:h-[423px] md:w-[496px] bg-orange-50 p-[40px] rounded-[20px] inline-flex justify-center items-center realtive ">
            <img src={star} alt="star-png" className="absolute w-20 top-10 right-20 animate-animation-start" />
            <img src={star} alt="star-png" className="absolute w-12 top-36 right-44 animate-[starAnim_2s_infinite_1000ms]" />
            <img src={star} alt="star-png" className="absolute w-10 top-56 right-20 animate-[starAnim_2s_infinite_2000ms]" />
            <h1 className="  font-bebasneue text-black text-[96px] text-left leading-[86px]">Find The Best property For you</h1>
          </div>
          <div className="flex gap-0.5 justify-center items-center ">
            <div className="md:w-[339px] bg-[#FFFDFA] rounded-[20px]  md:h-full inline-flex justify-center items-center md:p-10 p-3">
              <p className="text-black font-poppins text-[16px] pl-2 md:p-0">
                We will help you to find the <span className="font-bold">best property</span> with the best offer arround the <span className="font-bold">World</span>
              </p>
            </div>
            <div className="md:w-[152px] md:h-[152px] w-1/2 aspect-square bg-lime-100 rounded-[20px] flex justify-center items-center">
              <img src={Globe} className="animate-animation-spin" alt="globe-png" />
            </div>
          </div>
          <button className="bg-[#FC7B53] w-full h-[87px] rounded-[20px] md:rotate-[4deg] md:absolute bottom-4">
            <span className="font-poppins font-semibold text-[20px] text-black">Let’s Find</span>
          </button>
        </div>
      </div>

      <section className="flex flex-col md:flex-row gap-0.5 py-0.5 ">
        <div className="md:w-[378px] w-full aspect-video bg-rose-300 rounded-[20px] px-8 flex items-center relative overflow-hidden">
          <div className=" w-1/2 flex flex-col justify-center">
            <h2 className="font-poppins font-semibold text-black text-2xl">Sale Up To</h2>
            <h1 className="font-bebasneue font-normal text-[120px] text-black leading-[104px] tracking-normal">20%</h1>
            <p className="font-poppins font-normal text-black">Special Christmas</p>
          </div>
          <div className="h-fit aspect-square absolute top-0 bottom-0 right-0 ">
            <img src={SantaPng} className="" alt="santa-png" />
          </div>
        </div>
        <div className="w-full bg-white flex-1 flex flex-col md:flex-row justify-between items-center px-10 gap-1 rounded-[20px] ">
          <div className="group w-[210px] h-[151px]">
            <div className="card w-full h-full  bg-base-100 shadow-xl border-2 border-black  overflow-hidden border-b-4 border-r-4 group-hover:-rotate-12 transition-transform duration-700 group-hover:bg-[#DBACFF] group-hover:border-b-8 group-hover:border-r-8 group-hover:transition-transform group-hover:duration-150">
              <div className="card-body">
                <h2 className="card-title font-bebasneue text-4xl text-black">Home</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="group w-[210px] h-[151px]">
            <div className="card w-full h-full  bg-base-100 shadow-xl border-2 border-black  overflow-hidden border-b-4 border-r-4 group-hover:-rotate-12 transition-transform duration-700 group-hover:bg-[#DBACFF] group-hover:border-b-8 group-hover:border-r-8 group-hover:transition-transform group-hover:duration-150">
              <div className="card-body">
                <h2 className="card-title font-bebasneue text-4xl text-black">Market</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="group w-[210px] h-[151px]">
            <div className="card w-full h-full  bg-base-100 shadow-xl border-2 border-black  overflow-hidden border-b-4 border-r-4 group-hover:-rotate-12 transition-transform duration-700 group-hover:bg-[#DBACFF] group-hover:border-b-8 group-hover:border-r-8 group-hover:transition-transform group-hover:duration-150">
              <div className="card-body">
                <h2 className="card-title font-bebasneue text-4xl text-black">About</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="group w-[210px] h-[151px]">
            <div className="card w-full h-full  bg-base-100 shadow-xl border-2 border-black  overflow-hidden border-b-4 border-r-4 group-hover:-rotate-12 transition-transform duration-700 group-hover:bg-[#DBACFF] group-hover:border-b-8 group-hover:border-r-8 group-hover:transition-transform group-hover:duration-150">
              <div className="card-body">
                <h2 className="card-title font-bebasneue text-4xl text-black">Other</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
