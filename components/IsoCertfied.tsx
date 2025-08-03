export default function IsoCertfied() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white py-24">
      <h2 className="text-4xl md:text-5xl font-bold mb-10 font-anton uppercase text-center text-[#13008e] tracking-wide">
        We are ISO certified
      </h2>
      <div className="flex justify-center items-center w-full">
        <img
          src="/iso.png"
          alt="ISO Certified"
          className="mx-auto max-w-[300px] w-full h-auto rounded-lg  bg-white"
        />
      </div>
    </section>
  );
}
