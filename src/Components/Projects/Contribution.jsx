import Wrapper from "../Wrapper";
import GitHubCalendar from "react-github-calendar";

const Contribution = () => {
  return (
    <div className="w-full lg:min-h-[13rem] bg-bgcolor flex flex-col md:rounded-xl ">
      <h4 className="text-[1.3rem] ml-4 mt-2 font-bold">
        <span className="ri-github-fill mr-3"></span>Contributions
      </h4>
      <div className="flex justify-center items-center px-4">
        <div className="w-full m-4 p-2 border-[2px] border-gray-400 rounded-lg">
          <GitHubCalendar
            username="KevsKevs18"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
          />
        </div>
      </div>
    </div>
  );
};

export default Contribution;
