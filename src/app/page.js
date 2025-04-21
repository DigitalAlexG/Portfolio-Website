"use client"
import HomeComponment from "./components/HomeComponent/HomeComponent"
import { Hind } from "next/font/google"
import MySlider from "./components/SliderCard/MySlider"
import AboutMe from "./components/AboutMe/AboutMe"

const hind = Hind({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <HomeComponment />
      <div
        className="mt-0 pt-5 -mb-40"
        id="portfolio"
        style={{
          backgroundImage:
            "linear-gradient(-62deg, #EEF7FB 0 50%,  white 0% 100%)",
          width: "100%",
        }}
      >
        <div className="container m-auto">
          <p
            className="text-[300px]  text-[#F7FBFD] md:pl-[50px] px-5 max-w-[750px] w-[100%] overflow-hidden"
            style={{ transform: "translate(0px,-20px)" }}
          >
            Portfolio
          </p>
          <div className="" style={{ transform: "translate(0px, -290px)" }}>
            <p className="text-[#48AFDE]  md:pl-[80px] px-5 font-extrabold text-5xl">
              Recent Works
            </p>
            <p
              className={`max-w-2xl md:pl-[80px] px-5 font-[300] text-[16px] text-[#47626D] leading-8 mt-5 ${hind.className}`}
            >
              Here are a few examples. As a software engineer, I
              constantly prioritize 100% client satisfaction. I always enjoy
              coding, as each project is a new adventure for me. While working
              on each new project, I attempt to learn new things and grow my
              skills. As a result, my projects are always current and
              one-of-a-kind.
            </p>
          </div>
        </div>
        <div style={{ transform: "translate(0px,-230px)" }}>
          <MySlider />
        </div>
      </div>
      <AboutMe />
    </main>
  )
}
