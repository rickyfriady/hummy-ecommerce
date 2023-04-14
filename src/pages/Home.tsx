const Home = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-3">
      <div className=" w-full h-full bg-orange-200">a</div>
      <div className=" w-full h-full bg-orange-400">a</div>
      <div className=" w-full h-full bg-lime-200">a</div>
      <div className=" w-full h-full bg-lime-400">a</div>
      <div className=" w-full h-full bg-orange-200 col-span-2">a</div>
      <div className=" w-full h-full bg-orange-400">a</div>
      <div className=" w-full h-full bg-lime-400">a</div>
    </div>
  );
};

export default Home;
