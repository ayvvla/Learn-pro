import woman from "../assets/womann.png";
import CountUp from "react-countup";

export default function Hero() {
  return (
    <section className="bg-[#F8F8F8] px-20 py-14">
      <div className="flex w-full flex-col md:flex-row">
        <div className="flex w-full flex-col items-center space-y-6 text-center md:items-start md:text-start">
          <h1 className="text-5xl font-bold leading-tight">
            Embark on a <span className="text-primary">Delightful</span> Journey
            of <span className="text-primary">Growth</span> with{" "}
            <span className="text-primary">Online</span> Learning
          </h1>
          <p className="text-muted md:max-w-[31rem]">
            Explore our wide range of expert-led courses in coding, digital
            marketing, photography, and more
          </p>

          <div className="flex space-x-8 text-center md:text-start">
            <button className="rounded-md bg-primary px-6 py-3 text-center text-sm text-white outline outline-primary hover:bg-primary/90">
              Get Started
            </button>
            <button className="rounded-md bg-white px-6 py-3 text-center text-sm text-primary outline outline-primary hover:outline-primary/80">
              Get free trial
            </button>
          </div>
          <div className="flex space-x-6">
            <div className="flex w-24 flex-col">
              <span className="text-3xl font-bold text-[#C11574]">
                <CountUp end={50} duration={10} suffix="+" />
              </span>{" "}
              Courses to choose from
            </div>
            <div className="flex w-24 flex-col">
              <span className="text-3xl font-bold text-[#7253A4]">
                <CountUp end={1000} duration={10} suffix="+" />
              </span>
              Students Trained
            </div>
            <div className="flex w-24 flex-col">
              <span className="text-3xl font-bold text-[#F3B411]">
                <CountUp end={100} duration={10} suffix="+" />
              </span>
              Professional Trainers
            </div>
          </div>
        </div>

        <div className="ml-16 hidden w-1/2 self-center md:block">
          <div className="relative h-[350px] w-[350px] rounded-full bg-primary">
            <img
              src={woman}
              alt="hero-imaage"
              className="absolute bottom-10 left-10 h-[340px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
