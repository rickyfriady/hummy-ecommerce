import Globe from '../assets/Globe.svg';
const Home = () => {
  return (
    <div className="flex justify-evenly gap-2 md:gap-0.5 flex-col md:flex-row ">
      <div className="md:w-[944px] md:h-[709px] rounded-[20px] overflow-hidden">
        <video className="w-full h-full bg-slate-200 object-cover" autoPlay={true}>
          <source src="https://res.cloudinary.com/dy2uwxgvf/video/upload/v1681633461/hummy-ecommerce/hummy-video_mrmguq.mp4" type="video/mp4" />
          Error Message
        </video>
      </div>
      <div className="flex flex-col justify-stretch items-center gap-0.5 relative">
        <div className="md:h-[423px] md:w-[496px] bg-orange-50 p-[40px] rounded-[20px] inline-flex justify-center items-center  ">
          <h1 className="  font-bebasneue text-black text-[96px] text-left leading-[86px]">Find The Best property For you</h1>
        </div>
        <div className="flex gap-0.5 justify-center items-center ">
          <div className="md:w-[339px] bg-[#FFFDFA] rounded-[20px]  md:h-full inline-flex justify-center items-center md:p-10 p-3">
            <p className="text-black font-poppins text-[16px] pl-2 md:p-0">
              We will help you to find the <span className="font-bold">best property</span> with the best offer arround the <span className="font-bold">World</span>
            </p>
          </div>
          <div className="md:w-[152px] md:h-[152px] w-1/2 aspect-square bg-lime-100 rounded-[20px] flex justify-center items-center">
            <img src={Globe} className="" alt="" />
          </div>
        </div>
        <button className="bg-[#FC7B53] w-full h-[87px] rounded-[20px] md:rotate-6 md:absolute bottom-4">
          <span className="font-poppins font-semibold text-[20px] text-black">Let’s Find</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
