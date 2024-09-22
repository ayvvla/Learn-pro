import { HiOutlineDesktopComputer } from "react-icons/hi";
import { BsGraphUp } from "react-icons/bs";
import { HiOutlinePhotograph } from "react-icons/hi";
import { MdKeyboardArrowRight } from "react-icons/md";

export default function Services() {
  return (
    <section className="p-8 md:px-28 py-14 text-center">
      <div className="w-full space-y-3">
        <h1 className=" text-2xl font-bold text-primary">Our Services</h1>
        <p className="mx-auto max-w-[24em] font-outfit text-4xl font-semibold">
          Dive into an Interactive and Engaging Learning Adventure
        </p>
      </div>

      <div className="mt-12 flex flex-col justify-center space-y-12 lg:flex-row lg:justify-between lg:space-x-12 lg:space-y-0">
        <div className="flex flex-col items-center space-y-5 rounded-md bg-primary p-6 shadow-xl lg:items-start">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg bg-white p-1">
              <HiOutlineDesktopComputer size={25} color="#aeaeae" />
            </div>

            <h1 className="text-nowrap text-2xl font-bold text-white">
              Web Development
            </h1>
          </div>
          <p className="text-white">
            Unleash your Coding Creativity: Stay Up-to-Date with Cutting Edge
            Design Lessons!
          </p>
          <div className="flex items-center space-x-7 text-sm">
            <span>Learn More</span>
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-5 rounded-md border p-6 shadow-xl lg:items-start">
          <div className="flex items-center space-x-3">
            <BsGraphUp size={25} color="#7253A4" />
            <h1 className="text-2xl font-bold text-nowrap">digital marketing</h1>
          </div>
          <p className="">
            Master the Art of Digital Marketing: Stay Ahead with the Latest
            Strategies and Innovations
          </p>
          <div className="flex items-center space-x-7 text-sm">
            <span>Learn More</span>
            <MdKeyboardArrowRight />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-5 rounded-md bg-primary p-6 shadow-xl lg:items-start">
          <div className="flex items-center space-x-3">
            <div className="rounded-lg bg-white p-1">
              <HiOutlinePhotograph size={25} color="#7253A4" />
            </div>

            <h1 className="text-2xl font-bold text-white">photography</h1>
          </div>
          <p className="text-white">
            Capture the world Through Your Lens: Discover the Latest in
            Photography Techniques and Trends
          </p>
          <div className="flex items-center space-x-7 text-sm">
            <span>Learn More</span>
            <MdKeyboardArrowRight />
          </div>
        </div>
      </div>

      <div className="mx-auto mt-6 cursor-pointer rounded-md bg-primary py-3 text-sm text-white lg:max-w-[142px]">
        Explore All Courses
      </div>
    </section>
  );
}
