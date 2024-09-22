import ceo from "../assets/CEO.png";

export default function Testimonials() {
  return (
    <section className="mx-auto mt-20 grid max-w-[95vw] place-items-center px-14 md:px-28">
      <div className="w-full space-y-3 text-center">
        <h1 className="text-3xl font-bold text-primary">Testimonials</h1>
        <h1 className="font-outfit text-4xl font-semibold">
          Stories of Success and Satisfaction
        </h1>
      </div>

      <div className="mt-10 flex flex-col items-center gap-10 border-b border-r-2 p-9 shadow-xl md:flex-row">
        <div className="font-rubik flex flex-col items-center justify-center">
          <img src={ceo} alt="Jackson Leo Image" />
          <h1 className="font-semibold text-4xl mt-2">Jackson Leo</h1>
          <p className="text-primary">Founder and CEO of Supreme</p>
        </div>

        <blockquote className="relative flex max-w-2xl gap-4">
          <span className="absolute md:-left-8 -top-9 text-7xl">&#x275D; </span>
          <p className="px-2 min-w-4xl">
            Learn Pro has been a remarkable journey of personal and professional
            growth. From the moment I enrolled, I knew I was in the right place.
            The courses offered a perfect balance of theory and practical
            applications, giving me the knowledge and skills needed to excel in
            my field.
          </p>

          <span className="absolute -bottom-12 md:-bottom-16 right-5 text-7xl">
            &#x275E;
          </span>
        </blockquote>
      </div>
    </section>
  );
}
