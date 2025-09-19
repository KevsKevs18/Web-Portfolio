import Wrapper from "../Wrapper";
import GitHubCalendar from "react-github-calendar";

const Contribution = () => {
  return (
    <div className="w-full lg:min-h-[13rem] bg-wrapperColor flex flex-col sm:rounded-xl ">
      <h4 className="text-[1rem] mt-2 font-bold w-full flex justify-center">
        <span className="ri-github-fill mr-3"></span>My Github Contributions
      </h4>
      <div className="flex justify-center  items-center px-4">
        <div className="w-full m-4 p-2 md:mb-0 bg-lightblue border-[2px] border-gray-400 rounded-lg">
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
