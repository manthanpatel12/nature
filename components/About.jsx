export default function About({ img }) {
  return (
    <div id="about">
      <div className="grid md:grid-cols-2 items-center h-[90vh] p-8">
        <div className="md:hidden">
          <img
            src={img.src}
            alt="header image"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform"
          />
        </div>
        <div className="px-9">
          <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold mb-4 md:mt-4 mt-8">
            About Nature.
          </h1>
          <p className="break-words">
            Nature provides us services round the clock: provisional services,
            regulating services, and non-material services. Provisional services
            include benefits extracted from nature such as food, water, natural
            fuels and fibres, and medicinal plants. Regulating services include
            regulation of natural processes that include decomposition, water
            purification, pollution, erosion and flood control, and also,
            climate regulation.
          </p>
        </div>
        <div className="hidden md:block ">
          <img
            src={img.src}
            alt="header image"
            className="rounded-2xl shadow-2xl hover:scale-105 transition-transform"
          />
        </div>
      </div>
    </div>
  );
}
