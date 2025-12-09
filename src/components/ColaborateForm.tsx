import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt } from "react-icons/fa";
import { FaArrowRightLong, FaMap } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { userSchema, type UserSchemaType } from "../zod/formSchema";
import { RxCross2 } from "react-icons/rx";

function ColaborateForm() {
  const [isNameHighlighted, setIsNameHighlighted] = useState(false);
  const [isEmailHighlighted, setIsEmailHighlighted] = useState(false);
  const [isMessageHighlighted, setIsMessageHighlighted] = useState(false);
  const [messageAlert, setMessageAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<UserSchemaType>({
    resolver: zodResolver(userSchema),
  });

  const handleForm = (data: UserSchemaType) => {
    setIsLoading(true);
    setTimeout(() => {
      setIsNameHighlighted(false);
      setIsEmailHighlighted(false);
      setIsMessageHighlighted(false);
      setMessageAlert(true);
      reset();
      setIsLoading(false);
      console.log(data);
    }, 2000);
  };

  useEffect(() => {
    if (messageAlert) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [messageAlert]);
  return (
    <>
      <section className=" min-h-[90dvh] bg-primary flex gap-7 px-14 pt-25 font-serif colaborationForm">
        {/* -----------------left section---------------------- */}
        <div className="min-w-[50%] min-h-full">
          <h1 className="text-white text-5xl font-semibold mb-15">
            Let's Collaborate
          </h1>
          <div className="flex flex-col gap-4 max-w-130">
            <div className="flex gap-5 items-start justify-start">
              <FaMap className="text-secondary text-4xl" />
              <span className="text-white text-2xl">
                4Th Floor, Plot No.22,145 Murphy Canyon Rd. Las Vegas
              </span>
            </div>
            <div className="flex gap-5 items-start justify-start">
              <FaPhoneAlt className="text-secondary text-4xl" />
              <span className="text-white text-2xl">(+356) 99111070</span>
            </div>
            <div className="flex gap-5 items-start justify-start">
              <IoMdMail className="text-secondary text-4xl" />
              <span className="text-white text-2xl">
                sameiadhikari1997@gmail.com
              </span>
            </div>
          </div>
          <button className="mt-15 px-10 py-2 text-2xl  bg-white rounded-full flex gap-5 items-center cursor-pointer hover:bg-secondary transition-all duration-400 ">
            View Profile
            <FaArrowRightLong />
          </button>
        </div>
        {/* -----------------right section---------------------- */}
        <form
          onSubmit={handleSubmit(handleForm)}
          className="flex flex-col gap-4 min-w-[50%] min-h-full bg-secondary p-10 rounded-tr-2xl rounded-tl-2xl"
        >
          <p className="text-black text-3xl font-normal mb-5">Send a note</p>
          <div className="relative flex flex-col gap-1 w-full h-20 ">
            <label
              htmlFor="name"
              className={`absolute ${
                isNameHighlighted ? "-top-4" : "top-[35%] -translate-y-1/2"
              }  left-5 text-lg font-semibold z-11 transition-all duration-500`}
            >
              Name
            </label>
            <span
              className={`${
                isNameHighlighted
                  ? "absolute top-0 z-10 left-4 w-16 min-h-1 bg-amber-100"
                  : "hidden"
              } duration-500 transition-all`}
            ></span>
            <input
              id="name"
              type="text"
              className={`w-full min-h-[70%] py-3 px-5 border border-black rounded-2xl outline-none text-lg focus:bg-amber-100 ${
                isNameHighlighted ? "bg-amber-100" : "bg-transparent"
              }`}
              {...register("userName")}
              onFocus={() => setIsNameHighlighted(true)}
              onBlur={(e) => setIsNameHighlighted(e.target.value !== "")}
            />

            <span
              className={`${
                errors.userName?.message ? "ml-3 text-red-500 -mt-1 " : "hidden"
              }`}
            >
              {errors?.userName?.message}
            </span>
          </div>
          <div className="relative flex flex-col gap-1 w-full h-20 ">
            <label
              htmlFor="email"
              className={`absolute ${
                isEmailHighlighted ? "-top-4" : "top-[35%] -translate-y-1/2"
              } left-5 text-lg font-semibold z-11 transition-all duration-500`}
            >
              Email
            </label>
            <span
              className={`${
                isEmailHighlighted
                  ? "absolute top-0 z-10 left-4 w-16 min-h-1 bg-amber-100"
                  : "hidden"
              } duration-500 transition-all`}
            ></span>
            <input
              id="email"
              type="text"
              className={`w-full min-h-[70%] py-3 px-5 border border-black rounded-2xl outline-none text-lg focus:bg-amber-100 ${
                isEmailHighlighted ? "bg-amber-100" : "bg-transparent"
              }`}
              {...register("userEmail")}
              onFocus={() => setIsEmailHighlighted(true)}
              onBlur={(e) => setIsEmailHighlighted(e.target.value !== "")}
            />

            <span
              className={`${
                errors.userEmail?.message
                  ? "ml-3 -mt-1 text-red-500 "
                  : "hidden"
              }`}
            >
              {errors?.userEmail?.message}
            </span>
          </div>
          <div className="relative flex flex-col gap-1 w-full  ">
            <label
              htmlFor="message"
              className={`absolute ${
                isMessageHighlighted ? "-top-4" : "top-[12%] -translate-y-1/2"
              } left-5 text-lg font-semibold z-11 transition-all duration-500`}
            >
              Write a message (Optional)
            </label>
            <span
              className={`${
                isMessageHighlighted
                  ? "absolute top-0 z-10 left-4 w-65 min-h-1 bg-amber-100"
                  : "hidden"
              } duration-500 transition-all`}
            ></span>
            <textarea
              id="message"
              cols={20}
              rows={20}
              className={`h-50 py-3 px-5 border border-black rounded-2xl outline-none text-lg focus:bg-amber-100 ${
                isMessageHighlighted ? "bg-amber-100" : "bg-transparent"
              }`}
              {...register("message")}
              onFocus={() => setIsMessageHighlighted(true)}
              onBlur={(e) => setIsMessageHighlighted(e.target.value !== "")}
            />
          </div>
          <button
            type="submit"
            className="max-w-fit px-12 py-2 mt-7 cursor-pointer text-2xl bg-amber-100 rounded-full border hover:bg-primary hover:text-white  transition-all duration-300 "
          >
            {isLoading ? "Submitting Now" : "Submit"}
          </button>
        </form>
      </section>
      {messageAlert && (
        <div
          className={`fixed top-0 left-0 w-screen h-screen bg-black/40 z-50 self-start flex items-center justify-center`}
        >
          <span className="relative inline-block bg-green-500 text-white p-10 rounded-2xl text-2xl">
            Thank you! your message is received. We will get back to you.
            <button onClick={() => setMessageAlert(false)}>
              {" "}
              <RxCross2 className="absolute top-0 right-0 text-5xl p-2 text-white cursor-pointer hover:text-black transition-all duration-300" />
            </button>
          </span>
        </div>
      )}
    </>
  );
}

export default ColaborateForm;
