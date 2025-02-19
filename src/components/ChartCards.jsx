/* eslint-disable react/prop-types */
const ChartCards = ({ title = "Title", dropMenu, chart="", className="", isRevenue=false }) => {
  return (
    <div className={`${className} bg-white p-4 flex flex-col gap-4`}>
      <div className="flex justify-between items-center ">
        <div>
          <h1 className="text-[18px]">{title}</h1>
          {isRevenue && <p className="font-semibold">{"$17500"}</p>}
        </div>
        {dropMenu && <select className="border-[0.5px] border-gray-400 shadow-sm px-4 py-2 rounded-lg">
          { dropMenu.map((item) => {
            return (
              <option value={item.value} key={item.id}>
                {item.value}
              </option>
            );
          })}
        </select>}
      </div>
      <div className="w-full h-[350px] ">
        <img src={chart} alt="image" className="w-full h-full object-contain "/>
      </div>
    </div>
  );
};

export default ChartCards;
