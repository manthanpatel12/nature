import Image from "next/image";

export default function Header({ img }) {
  return (
    <div className="grid md:grid-cols-2 items-center h-[90vh] p-8">
      <div>
        <Image
          src={img.src}
          alt="header image"
          height="300px"
          width="500px"
          layout="responsive"
          className="rounded-2xl shadow-2xl hover:scale-105 transition-transform"
        />
      </div>
      <div className="px-9">
        <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold mb-2">
          A Breif About Nature.
        </h1>
        <p className="break-words">
          Whatever we see around us, right from the moment we step out of our
          house is part of nature. everything that makes our environment so
          beautiful and mesmerizing are part of Nature.
        </p>
      </div>
    </div>
  );
}
