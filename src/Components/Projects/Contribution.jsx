import Wrapper from "../Wrapper";
import GitHubCalendar from "react-github-calendar";

const Contribution = () => {
  return (
    <div className="w-full lg:min-h-[13rem] bg-white flex flex-col mm:rounded-xl ">
      <h6 className="text-[1.44rem] mm:text-[1.2rem] text-greenFont mt-2 ml-2 font-bold w-full flex">
        <span className="ri-github-line mr-2"></span>
        Github Contributions
      </h6>
      <div className="flex justify-center  items-center px-4">
        <div className="w-full m-4 p-2 bg-bodycolor border-[2px] border-gray-400 rounded-lg">
          <GitHubCalendar
            username="KevsKevs18"
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            color="white"
          />
        </div>
      </div>
    </div>
  );
};

export default Contribution;
