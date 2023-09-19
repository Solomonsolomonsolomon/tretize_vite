

import { BeatLoader } from "react-spinners";

function Spinner() {
  return (
    <div className=" flex flex-wrap items-center justify-center justify-items-center  h-[100vh] place-content-center">
      <div className="font-bold text-lg">Tretize logistics</div>
      <div className="flex w-full mt-2">
        <BeatLoader color="#36d7b7" className="w-full flex justify-center" />
      </div>
    </div>
  );
}

export default Spinner;
