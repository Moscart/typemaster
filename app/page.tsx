import Image from "next/image";
import Logo from "@/public/assets/shared/logo.svg";
import ICompatible from "@/public/assets/shared/icon-compatible.svg";
import IBluetooth from "@/public/assets/shared/icon-bluetooth.svg";
import IBattery from "@/public/assets/shared/icon-battery.svg";
import ILight from "@/public/assets/shared/icon-light.svg";
import ImageKeyboard from "@/public/assets/mobile/image-keyboard.jpg";
import ImageGlass from "@/public/assets/mobile/image-glass-and-keyboard.jpg";
import ImagePhone from "@/public/assets/mobile/image-phone-and-keyboard.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <header className="px-6 pt-6 flex justify-between items-center">
        <Image src={Logo} alt="Logo Typemaster" className="size-10" />
        <Button className="uppercase bg-custom-light-gray text-custom-dark-gray font-bold text-[1rem] leading[1.625rem] h-auto px-[14px] py-3 rounded-[0.5rem] hover:bg-custom-dark-gray hover:text-white">
          Pre-Order Now
        </Button>
      </header>
      <main className="text-custom-dark-gray font-medium">
        <section className="px-6 mt-[64px] flex flex-col gap-8">
          <h1 className="font-black text-[3rem] leading-[3rem] uppercase">
            Typemaster <span className="block">Keyboard</span>
          </h1>
          <p className="text-custom-gray leading[1.625rem]">
            Improve your productivity and gaming without breaking the bank.
            Upgrade to a high quality mechanical typing experience.
          </p>
          <div className="flex gap-8">
            <Button className="uppercase bg-custom-orange text-white font-bold text-[1rem] leading-[1.625rem] h-auto px-[14px] py-3 rounded-[0.5rem] hover:bg-custom-light-orange">
              Pre-Order Now
            </Button>
            <div className="uppercase text-custom-gray text-[1rem] leading-[1.625rem] font-bold items-center flex justify-center">
              Release On 5/27
            </div>
          </div>
        </section>
        <section className="mt-16 ps-6">
          <Image
            src={ImageKeyboard}
            alt="Logo Typemaster"
            className="rounded-s-[1.25rem]"
          />
        </section>
        <section className="pe-6 mt-6 flex gap-6">
          <div className="relative rounded-e-[1.25rem] overflow-hidden z-10">
            <Image
              src={ImagePhone}
              alt="Logo Typemaster"
              className="h-full object-cover object-right mix-blend-multiply opacity-75"
            />
            <div className="bg-custom-orange w-full h-full absolute -z-10 top-0"></div>
          </div>
          <Image
            src={ImageGlass}
            alt="Logo Typemaster"
            className="rounded-[1.25rem]"
          />
        </section>
        <section className="px-6">
          <div className="flex flex-col gap-6">
            <h1 className="uppercase font-black text-[2rem] leading-[2.25rem] text-center mt-[75px]">
              Mechanical <span className="block">Wireless</span>{" "}
              <span className="block">Keyboard</span>
            </h1>
            <p className="leading-[1.625rem] text-custom-gray text-center">
              The Typemaster keyboard boasts top-notch build and practical
              design. It offers a wide variety of switches and keycaps, along
              with reliable wireless connectivity.
            </p>
          </div>
          <div className="flex flex-col gap-16 mt-[111px] mb-[96px]">
            <div className="flex flex-col items-center text-center">
              <div className="bg-custom-orange aspect-square w-[65px] rounded-2xl flex justify-center items-center">
                <Image src={ICompatible} alt="Logo Typemaster" className="" />
              </div>
              <h2 className="uppercase font-black text-2xl leading-[1.75rem] mt-12">
                Highly <span className="block">Compactible</span>
              </h2>
              <p className="mt-6 leading-[1.625rem] text-custom-gray">
                Easy to use and works well with all major computer brands,
                gaming consoles and mobile devices. Plug & play, no installation
                or driver needed.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-custom-orange aspect-square w-[65px] rounded-2xl flex justify-center items-center">
                <Image src={IBluetooth} alt="Logo Typemaster" className="" />
              </div>
              <h2 className="uppercase font-black text-2xl leading-[1.75rem] mt-12">
                Wireless <span className="block">With Bluetooth</span>
              </h2>
              <p className="mt-6 leading-[1.625rem] text-custom-gray">
                Powerful 2.4G RF technology allows you to connect the cordless
                keyboard from up to 30ft away. Simply plug the unifying receiver
                into your computer.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-custom-orange aspect-square w-[65px] rounded-2xl flex justify-center items-center">
                <Image src={IBattery} alt="Logo Typemaster" className="" />
              </div>
              <h2 className="uppercase font-black text-2xl leading-[1.75rem] mt-12">
                High Capacity <span className="block">Battery</span>
              </h2>
              <p className="mt-6 leading-[1.625rem] text-custom-gray">
                Equipped with a long-lasting built-in battery, you’ll never have
                to spend a dime on replaceable ones. Enjoy 40 hours of usage
                time between charges.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-custom-orange aspect-square w-[65px] rounded-2xl flex justify-center items-center">
                <Image src={ILight} alt="Logo Typemaster" className="" />
              </div>
              <h2 className="uppercase font-black text-2xl leading-[1.75rem] mt-12">
                RGB Backlit <span className="block">Modes</span>
              </h2>
              <p className="mt-6 leading-[1.625rem] text-custom-gray">
                Choose from 4 backlight brightness levels and adjustable
                breathing speed. Each key glows intensely in the dark and helps
                you type in low light conditions.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="leading-[1.625rem] text-custom-gray text-center pb-[50px]">
        <span className="font-bold">Typemaster 2021</span> | All Rights Reserved
      </footer>
    </div>
  );
}
