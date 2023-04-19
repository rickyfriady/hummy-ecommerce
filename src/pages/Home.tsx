import Globe from '../assets/Globe.svg';
import SantaPng from '../assets/santa-head-trans.png';
import star from '../assets/Star.svg';

const Home = () => {
  return (
    <>
      <div className="flex justify-evenly gap-2 md:gap-0.5 flex-col md:flex-row ">
        <div className="md:w-[944px] md:h-[709px] rounded-[20px] overflow-hidden border-none">
          <video className="w-full h-full bg-slate-200 object-cover" autoPlay={true}>
            <source src="https://res.cloudinary.com/dy2uwxgvf/video/upload/v1681633461/hummy-ecommerce/hummy-video_mrmguq.mp4" type="video/mp4" />
            Error Message
          </video>
        </div>
        <div className="flex flex-col justify-stretch items-center gap-0.5 relative">
          <div className="md:h-[423px] md:w-[496px] bg-orange-50 p-[40px] rounded-[20px] inline-flex justify-center items-center realtive ">
            <img src={star} alt="star-png" className="absolute w-20 top-10 right-20 animate-pulse" />
            <img src={star} alt="star-png" className="absolute w-12 top-36 right-44 transition animate-pulse delay-500" />
            <img src={star} alt="star-png" className="absolute w-10 top-56 right-20 animate-pulse delay-600" />
            <h1 className="  font-bebasneue text-black text-[96px] text-left leading-[86px]">Find The Best property For you</h1>
          </div>
          <div className="flex gap-0.5 justify-center items-center ">
            <div className="md:w-[339px] bg-[#FFFDFA] rounded-[20px]  md:h-full inline-flex justify-center items-center md:p-10 p-3">
              <p className="text-black font-poppins text-[16px] pl-2 md:p-0">
                We will help you to find the <span className="font-bold">best property</span> with the best offer arround the <span className="font-bold">World</span>
              </p>
            </div>
            <div className="md:w-[152px] md:h-[152px] w-1/2 aspect-square bg-lime-100 rounded-[20px] flex justify-center items-center">
              <img src={Globe} className="" alt="globe-png" />
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
            <div className="card w-full h-full  bg-base-100 shadow-xl border-2 border-black  overflow-hidden border-b-4 border-r-4 group-hover:-rotate-12 group-hover:bg-[#DBACFF] group-hover:border-b-8 group-hover:border-r-8 transition">
              <div className="card-body">
                <h2 className="card-title font-bebasneue text-4xl text-black">Home</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="group w-[210px] h-[151px]">
            <div className="card w-full h-full  bg-base-100 shadow-xl border-2 border-black  overflow-hidden border-b-4 border-r-4 group-hover:-rotate-12 group-hover:bg-[#DBACFF] group-hover:border-b-8 group-hover:border-r-8 transition">
              <div className="card-body">
                <h2 className="card-title font-bebasneue text-4xl text-black">Market</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="group w-[210px] h-[151px]">
            <div className="card w-full h-full  bg-base-100 shadow-xl border-2 border-black  overflow-hidden border-b-4 border-r-4 group-hover:-rotate-12 group-hover:bg-[#DBACFF] group-hover:border-b-8 group-hover:border-r-8 transition">
              <div className="card-body">
                <h2 className="card-title font-bebasneue text-4xl text-black">About</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          <div className="group w-[210px] h-[151px]">
            <div className="card w-full h-full  bg-base-100 shadow-xl border-2 border-black  overflow-hidden border-b-4 border-r-4 group-hover:-rotate-12 group-hover:bg-[#DBACFF] group-hover:border-b-8 group-hover:border-r-8 transition">
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
