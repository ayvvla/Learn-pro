import man from "../assets/man.png";
import one from "../assets/one.png";
import two from "../assets/two.png";
import three from "../assets/three.png";
import four from "../assets/four.png";
import { GiOpenBook } from "react-icons/gi";
import { PiCalendarDots } from "react-icons/pi";
import { FaPeopleRoof } from "react-icons/fa6";
import { GrPersonalComputer } from "react-icons/gr";

export default function Benefits() {
  return (
    <section className="mt-10 md:px-28">
      <div className="flex flex-col lg:flex-row w-full items-center justify-center gap-12">
        <div className="relative md:block">
          <img src={man} alt="man - benefits" />
          <div className="absolute -bottom-14 left-14 flex flex-col items-center justify-center rounded-t-md bg-white px-4 py-4 text-center">
            <h1 className="text-sm font-bold leading-tight">20,5470+</h1>
            <p className="text-sm font-light tracking-tight">
              People are learning
            </p>
            <div className="flex items-center -space-x-3">
              <img src={one} alt="man - benefits" />
              <img src={two} alt="man - benefits" />
              <img src={three} alt="man - benefits" />
              <img src={four} alt="man - benefits" />
              <div className="mt-2 flex h-10 w-14 items-center justify-center rounded-full bg-primary">
                <h1 className="-translate-y-0.5 font-semibold text-white">
                  3+
                </h1>
              </div>
            </div>
          </div>
        </div>

        <div className="h-full w-2/3 md:order-1 mt-10 lg:mt-0   ">
          <h1
            className="text-center lg:text-start mb-10 max-w-[504px] text-2xl text-black md:text-4xl"
            style={{ fontFamily: "outfit" }}
          >
            Benefits of Learning Online With Learn-Pro
          </h1>

          <div className="grid grid-cols-2 gap-x-12 gap-y-14 place-items-center">
            <div className="flex flex-col space-y-4">
              <div className="w-max rounded-xl bg-primary p-3">
                <GrPersonalComputer color="white" size={30} />
              </div>
              <h1 className="font-outfit font-bold">Flexibility</h1>
              <p className="max-w-sm text-lg font-light tracking-wide">
                Learn at your own pace from anywhere, anytime.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="w-max rounded-xl bg-primary p-3">
                <PiCalendarDots color="white" size={30} />
              </div>
              <h1 className="font-outfit font-bold">Practical Skills</h1>
              <p className="max-w-sm text-lg font-light tracking-wide">
                Gain hands-on experience through interactive exercises and
                projects.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="w-max rounded-xl bg-primary p-3">
                <GiOpenBook color="white" size={30} />
              </div>

              <h1 className="font-outfit font-bold">
                Diverse Course Selection
              </h1>
              <p className="max-w-xs text-lg font-light tracking-wide">
                Choose from a variety of subjects tailored to your interests and
                goals.
              </p>
            </div>

            <div className="flex flex-col space-y-4">
              <div className="w-max rounded-xl bg-primary p-3">
                <FaPeopleRoof color="white" size={30} />
              </div>
              <h1 className="font-outfit font-bold">Supportive Community</h1>
              <p className="max-w-sm text-lg font-light tracking-wide">
                Connect with like-minded learners and instructors in our vibrant
                online community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
