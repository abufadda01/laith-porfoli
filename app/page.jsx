import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import { Button } from "@/components/ui/button";
import {FiDownload} from "react-icons/fi"
import Services from "./services/page";


export default function Home() {
  return (
    <>
      <section className="h-full">

        <div className="container h-full mx-auto">

          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-28">

            <div className="text-center xl:text-left order-2 xl:order-none">

              <span className="text-xl">Software Developer</span>
              <h1 className="h1 mb-6 mt-2">Hello I'm <br /> <span className="text-accent">Laith Abu Fadda</span></h1>

              <p className="max-w-[500px] mb-9 text-white/80">
                I am a highly skilled Full Stack Web Developer proficient in various programming languages and new cutting-edge technologies.            
              </p>

              <div className="flex flex-col xl:flex-row items-center gap-8">

                  <Button variant="outline" size="lg" className="uppercase flex items-center gap-2">
                    <span>Donwload CV</span>
                    <FiDownload className="text-xl"/>
                  </Button>

                  <div className="mb-8 xl:mb-0">
                    <Socials containerStyle="flex gap-6" iconsStyle="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
                  </div>

              </div>

            </div>

            <div className="order-1 xl:order-none mb-8 xl:mb-0">
              <Photo/>
            </div>

          </div>

        </div>

        <Stats/>

      </section>

      {/* <Services/> */}
    </>
  );
}
