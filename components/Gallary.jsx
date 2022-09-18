import Image from "next/image";
import { useEffect, useState } from "react";

export default function Gallary() {
  const [data, setData] = useState([]);

  const url = `https://api.unsplash.com/search/photos?page=1&query=nature&client_id=${process.env.NEXT_PUBLIC_Access_Key}&w=0.5&per_page=6`;
  useEffect(() => {
    fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((d) => {
        setData(d.results);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div id="gallary" className="mb-5 p-8 md:mt-4 mt-12">
      <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold mb-4 capitalize text-center">
        gallary
      </h1>
      <div className="grid grid-cols-3 grid-rows-2 gap-5 px-5 lg:px-10">
        {data.map((d, key) => {
          let src = d.urls.small;
          return (
            <Image
              src={src}
              key={key}
              width={200}
              height={300}
              className="rounded-xl shadow-2xl"
            />
          );
        })}
      </div>
    </div>
  );
}
