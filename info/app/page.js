// import Image from "next/image";

export default function Home() {
  return (
      <div className="flex pt-6 h-screen">
        <div className="flex-auto w-1/4 "></div>
        <div className="flex-auto w-1/2">
          <p className="font-extrabold">colin</p>
          <div className="ml-8 mt-2 font-serif">
            <h1 className="">colin shanghai/China</h1>
            <p> software engineer </p>
            <p> licolin0707@gmail.com</p>
          </div>
          <p className="mt-3 font-extrabold">Short Bio</p>
          <div className="ml-5 mt-3 font-serif">

            As a Software Test Development Engineer with 5 years of experience in Python programming, I have built
            automation frameworks from scratch. I have implemented automated daily regression testing for the company's
            low-latency securities trading system. With a solid understanding of databases, I am knowledgeable about
            MySQL and PostgreSQL. I have experience containerizing automation test frameworks and data service modules
            using Docker. Additionally, I have a good understanding of frontend frameworks such as React and Next.js.

          </div>

        </div>
        <div className="flex-auto w-1/4"></div>

      </div>
  );
}
