import Link from "next/link";
import { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar({ items, title }) {
  const [show, setshow] = useState(false);

  return (
    <>
      <nav className="bg-slate-800 h-16 text-slate-200 grid grid-cols-3 items-center">
        <div className="col-span-2 items-center px-3">
          <h1 className="font-mono text-2xl">{title}</h1>
        </div>
        <div>
          <ul className="hidden md:flex md:justify-around items-center">
            {items.map((i, key) => {
              return (
                <li
                  key={key}
                  className="hover:bg-sky-400 p-2 rounded-xl hover:text-slate-600"
                >
                  <Link href={i.href}>{i.name}</Link>
                </li>
              );
            })}
          </ul>
          <div className="md:hidden flex justify-end px-3 text-2xl cursor-pointer">
            <span onClick={() => setshow(!show)}>
              {show ? <MdClose /> : <MdMenu />}
            </span>
          </div>
        </div>
      </nav>
      <div className={show ? "bg-slate-800 text-slate-200 p-3" : "hidden"}>
        <ul className=" items-center">
          {items.map((i, key) => {
            return (
              <li
                key={key}
                className="hover:bg-sky-400 p-2 rounded-xl hover:text-slate-600"
              >
                <Link href={i.href}>{i.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
