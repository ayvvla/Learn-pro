import jackson from "../assets/jackson.png";
import perry from "../assets/perry.png";
import kenny from "../assets/kenny.png";
import mary from "../assets/mary.png";
import { FaLinkedin } from "react-icons/fa6";

export default function Instructors() {
  return (
    <section className="mx-auto mt-20 max-w-[95vw]">
      <div className="w-full space-y-3 text-center">
        <h1 className="text-3xl font-bold text-primary">Instructors</h1>
        <h1 className="font-outfit text-4xl font-semibold">
          Meet the Brilliant Minds
        </h1>
        <p className="mx-auto max-w-[30em]">
          At Learn-Pro, Unlock Limitless Knowledge and Skills Today! Join our
          global community of passionate learners.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-6 border md:flex-nowrap">
        <div className="flex w-full flex-col items-center justify-center rounded-xl border-r border-t p-6 text-center shadow-md lg:w-1/4">
          <img src={jackson} alt="Jackson" />
          <h3 className="-mb-1 mt-3">Jackson Leo</h3>
          <p className="text-wrap text-primary lg:text-nowrap">
            UI/UX Designer Lead
          </p>
          <p className="mt-2 w-full">
            Lorem ipsum dolor sit amet consectetur. Vitae ut sagittis tincidunt
            et fames dui turpis.
          </p>
          <FaLinkedin className="mt-4" />
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-xl border-r border-t p-6 text-center shadow-md lg:w-1/4">
          <img src={perry} alt="Perry Henry" />
          <h3 className="-mb-1 mt-3">Perry Henry</h3>
          <p className="text-wrap text-primary lg:text-nowrap">
            Web Development Lead
          </p>
          <p className="mt-2 w-full">
            Lorem ipsum dolor sit amet consectetur. Vitae ut sagittis tincidunt
            et fames dui turpis.
          </p>
          <FaLinkedin className="mt-4" />
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-xl border-r border-t p-6 text-center shadow-md lg:w-1/4">
          <img src={kenny} alt="kenny Marvin" />
          <h3 className="-mb-1 mt-3">Kenny Marvin</h3>
          <p className="text-wrap text-primary lg:text-nowrap">
            Mobile Development Lead
          </p>
          <p className="mt-2 w-full">
            Lorem ipsum dolor sit amet consectetur. Vitae ut sagittis tincidunt
            et fames dui turpis.
          </p>
          <FaLinkedin className="mt-4" />
        </div>

        <div className="flex w-full flex-col items-center justify-center rounded-xl border-r border-t p-6 text-center shadow-md lg:w-1/4">
          <img src={mary} alt="Marry Jake" />
          <h3 className="-mb-1 mt-3">Mary Jake</h3>
          <p className="text-wrap text-primary lg:text-nowrap">
            Digital Marketing Lead
          </p>
          <p className="mt-2 w-full">
            Lorem ipsum dolor sit amet consectetur. Vitae ut sagittis tincidunt
            et fames dui turpis.
          </p>
          <FaLinkedin className="mt-4" />
        </div>
      </div>
    </section>
  );
}
