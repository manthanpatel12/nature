import { useState } from "react";
import { writeData } from "../firebase";

export default function Contact() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });
  const [submited, setSubmited] = useState(false);

  function handleSubmit(t) {
    t.preventDefault();
    writeData(value.name, value.email, value.phone, value.comment);
    setValue({ name: "", email: "", phone: "", comment: "" });
    setSubmited(true);
  }

  return (
    <div id="contact" className="mt-16 p-10">
      <h1 className="lg:text-5xl md:text-4xl text-4xl font-bold mb-4 capitalize text-center">
        contact us
      </h1>
      <div className="flex justify-center">
        <div className="w-full lg:w-1/2 xl:w-5/12 px-4">
          <div className="bg-white relative rounded-lg p-8 sm:p-12 shadow-lg">
            {submited ? (
              <div className="w-full rounded py-3 px-[14px] bg-green-400 text-white mb-6 bg-opacity-70">
                <h1>Thank You For Your Comment!</h1>
              </div>
            ) : null}
            <form
              onSubmit={(t) => {
                handleSubmit(t);
              }}
            >
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required={true}
                  value={value.name}
                  onChange={(d) => {
                    setValue({ ...value, name: d.target.value });
                  }}
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div className="mb-6">
                <input
                  type="email"
                  placeholder="Your Email"
                  required={true}
                  value={value.email}
                  onChange={(d) => {
                    setValue({ ...value, email: d.target.value });
                  }}
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div className="mb-6">
                <input
                  type="text"
                  placeholder="Your Phone"
                  required={true}
                  value={value.phone}
                  onChange={(d) => {
                    setValue({ ...value, phone: d.target.value });
                  }}
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                />
              </div>
              <div className="mb-6">
                <textarea
                  rows="6"
                  placeholder="Your Message"
                  required={true}
                  value={value.comment}
                  onChange={(d) => {
                    setValue({ ...value, comment: d.target.value });
                  }}
                  className="
                        w-full
                        rounded
                        py-3
                        px-[14px]
                        text-body-color text-base
                        border border-[f0f0f0]
                        resize-none
                        outline-none
                        focus-visible:shadow-none
                        focus:border-primary
                        "
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="
                        w-full
                        text-white
                        bg-primary
                        rounded
                        border border-primary
                        p-3
                        transition
                        hover:bg-opacity-90
                        bg-indigo-700
                        "
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
