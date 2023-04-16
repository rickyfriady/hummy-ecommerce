const Home = () => {
  return (
    <div className="flex justify-evenly gap-2 md:gap-0.5 flex-col md:flex-row">
      <div className="md:w-[944px] md:h-[709px] rounded-[20px] overflow-hidden ">
        <video className="w-full h-full bg-slate-200 object-cover" controls>
          <source src="https://res.cloudinary.com/dy2uwxgvf/video/upload/v1681633461/hummy-ecommerce/hummy-video_mrmguq.mp4" type="video/mp4" />
          Error Message
        </video>
      </div>
      <div className="flex flex-col justify-stretch items-center gap-0.5 relative">
        <div className="md:h-[423px] md:w-[496px] bg-orange-50 p-[40px] rounded-[20px] inline-flex justify-center items-center  ">
          <h1 className="  font-bebasneue text-black text-[96px] text-left leading-[86px]">Find The Best property For you</h1>
        </div>
        <div className="flex gap-0.5">
          <div className="w-[339px] bg-slate-50 rounded-[20px]  flex-1">
            <p>We will help you to find the best property with the best offer arround the World</p>
          </div>
          <div className="w-[152px] h-[152px] bg-lime-100 rounded-[20px] "></div>
        </div>
        <button className="bg-[#FC7B53] w-full h-[87px] rounded-[20px] md:rotate-6 md:absolute bottom-4">
          <span className="font-poppins font-semibold text-[20px] text-black">Let’s Find</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
