import Image from "next/image";
import Logo from "@/public/assets/shared/logo.svg";
import ICompatible from "@/public/assets/shared/icon-compatible.svg";
import IBluetooth from "@/public/assets/shared/icon-bluetooth.svg";
import IBattery from "@/public/assets/shared/icon-battery.svg";
import ILight from "@/public/assets/shared/icon-light.svg";
import ImageKeyboard from "@/public/assets/mobile/image-keyboard.jpg";
import ImageKeyboardTablet from "@/public/assets/tablet/image-keyboard.jpg";
import ImageKeyboardDesktop from "@/public/assets/desktop/image-keyboard.jpg";
import ImageGlass from "@/public/assets/mobile/image-glass-and-keyboard.jpg";
import ImageGlassTablet from "@/public/assets/tablet/image-glass-and-keyboard.jpg";
import ImageGlassDesktop from "@/public/assets/desktop/image-glass-and-keyboard.jpg";
import ImagePhone from "@/public/assets/mobile/image-phone-and-keyboard.jpg";
import ImagePhoneTablet from "@/public/assets/tablet/image-phone-and-keyboard.jpg";
import ImagePhoneDesktop from "@/public/assets/desktop/image-phone-and-keyboard.jpg";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="">
      <header className="max-w-md md:max-w-4xl xl:max-w-[1110px] mx-auto px-6 pt-6 md:px-10 md:pt-10 xl:px-0 xl:pt-14 flex justify-between items-center">
        <Image src={Logo} alt="Logo Typemaster" className="size-10" />
        <Button className="shadow-none uppercase bg-custom-light-gray text-custom-dark-gray font-bold text-[1rem] leading-[1.625rem] h-auto px-[14px] py-3 md:py-4 md:px-7 rounded-[0.5rem] hover:bg-custom-dark-gray hover:text-white">
          Pre-Order Now
        </Button>
      </header>
      <main className="max-w-md md:max-w-4xl xl:max-w-[1110px] mx-auto text-custom-dark-gray font-medium">
        <section className="md:flex md:gap-[70px] xl:gap-[125px] md:ps-10 xl:ps-0 md:mt-[62px] xl:mt-[84px] items-center">
          <div className="px-6 md:px-0 mt-[64px] md:mt-0 flex flex-col gap-8 md:gap-0 md:min-w-[341px] md:w-[341px] xl:min-w-[445px]">
            <h1 className="font-black text-[3rem] leading-[3rem] xl:text-[3.5rem] xl:leading-[3.5rem] uppercase">
              Typemaster <span className="block">Keyboard</span>
            </h1>
            <p className="text-custom-gray xl:text-[1.125rem] leading-[1.625rem] md:mt-[34px] md:mb-10 xl:mt-6">
              Improve your productivity and gaming without breaking the bank.
              Upgrade to a high quality mechanical typing experience.
            </p>
            <div className="flex gap-8 md:gap-9 xl:gap-10">
              <Button className="shadow-none uppercase bg-custom-orange text-white font-bold text-[1rem] leading-[1.625rem] h-auto px-[14px] py-3 md:py-4 md:px-7 rounded-[0.5rem] hover:bg-custom-light-orange">
                Pre-Order Now
              </Button>
              <div className="uppercase text-custom-gray text-[1rem] leading-[1.625rem] font-bold items-center flex justify-center">
                Release On 5/27
              </div>
            </div>
          </div>
          <div className="mt-16 md:mt-0 overflow-hidden">
            <div className="-right-6 md:right-0 relative">
              <Image
                src={ImageKeyboard}
                alt="Typemaster Keyboard"
                className="rounded-s-[1.25rem] md:hidden"
              />
              <Image
                src={ImageKeyboardTablet}
                alt="Typemaster Keyboard"
                className="rounded-s-[1.25rem] hidden md:block md:h-[425px] object-cover object-left xl:hidden"
              />
              <Image
                src={ImageKeyboardDesktop}
                alt="Typemaster Keyboard"
                className="rounded-s-[1.25rem] xl:rounded-[1.25rem] hidden md:h-[425px] xl:h-[480px] object-cover object-left xl:block"
              />
            </div>
          </div>
        </section>
        <section className="xl:flex xl:mt-[30px] xl:gap-[125px]">
          <div className="relative overflow-hidden mt-6 md:mt-10 xl:mt-0 md:px-10 xl:px-0">
            <div className="flex gap-6 md:gap-[30px] relative -left-6 md:left-0">
              <div className="flex-grow relative rounded-e-[1.25rem] md:rounded-[1.25rem] overflow-hidden">
                <Image
                  src={ImagePhone}
                  alt="Typemaster Keyboard with Phone"
                  className="mix-blend-multiply opacity-75 md:hidden"
                />
                <Image
                  src={ImagePhoneTablet}
                  alt="Typemaster Keyboard with Phone"
                  className="mix-blend-multiply opacity-75 hidden md:block xl:hidden"
                />
                <Image
                  src={ImagePhoneDesktop}
                  alt="Typemaster Keyboard with Phone"
                  className="mix-blend-multiply opacity-75 hidden xl:block"
                />
                <div className="bg-custom-orange w-full h-full absolute -z-10 top-0"></div>
              </div>
              <div className="flex-grow">
                <Image
                  src={ImageGlass}
                  alt="Typemaster Keyboard with Glass"
                  className="rounded-[1.25rem] md:hidden"
                />
                <Image
                  src={ImageGlassTablet}
                  alt="Typemaster Keyboard with Glass"
                  className="rounded-[1.25rem] hidden md:block xl:hidden"
                />
                <Image
                  src={ImageGlassDesktop}
                  alt="Typemaster Keyboard with Glass"
                  className="rounded-[1.25rem] hidden xl:block"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row xl:flex-col xl:justify-center gap-6 md:gap-9 xl:gap-7 px-6 md:px-10 xl:px-0 md:items-center mt-[75px] md:mt-[72px] xl:mt-0 text-center md:text-left xl:max-w-[255.2px]">
            <h1 className="uppercase font-black text-[2rem] leading-[2.25rem] md:min-w-[255px]">
              Mechanical <span className="block">Wireless</span>{" "}
              <span className="block">Keyboard</span>
            </h1>
            <p className="leading-[1.625rem] text-custom-gray">
              The Typemaster keyboard boasts top-notch build and practical
              design. It offers a wide variety of switches and keycaps, along
              with reliable wireless connectivity.
            </p>
          </div>
        </section>
        <section className="px-6 md:px-10 xl:px-0 mt-[111px] md:mt-[142px] xl:mt-[168px] mb-[96px] md:mb-[142px] xl:mb-[128px]">
          <div className="flex flex-col md:grid md:grid-cols-2 xl:grid-cols-4 gap-16 md:gap-[72px] xl:gap-[30px]">
            <div className="flex flex-col md:items-start items-center text-center md:text-left md:max-w-[281px]">
              <div className="bg-custom-orange aspect-square w-[65px] rounded-2xl flex justify-center items-center">
                <Image src={ICompatible} alt="Logo Typemaster" className="" />
              </div>
              <h2 className="uppercase font-black text-2xl leading-[1.75rem] mt-12 md:mt-10 xl:mt-12">
                Highly <span className="block">Compactible</span>
              </h2>
              <p className="mt-6 leading-[1.625rem] text-custom-gray">
                Easy to use and works well with all major computer brands,
                gaming consoles and mobile devices. Plug & play, no installation
                or driver needed.
              </p>
            </div>
            <div className="flex flex-col md:items-start items-center text-center md:text-left md:max-w-[281px]">
              <div className="bg-custom-orange aspect-square w-[65px] rounded-2xl flex justify-center items-center">
                <Image src={IBluetooth} alt="Logo Typemaster" className="" />
              </div>
              <h2 className="uppercase font-black text-2xl leading-[1.75rem] mt-12 md:mt-10 xl:mt-12">
                Wireless <span className="block">With Bluetooth</span>
              </h2>
              <p className="mt-6 leading-[1.625rem] text-custom-gray">
                Powerful 2.4G RF technology allows you to connect the cordless
                keyboard from up to 30ft away. Simply plug the unifying receiver
                into your computer.
              </p>
            </div>
            <div className="flex flex-col md:items-start items-center text-center md:text-left md:max-w-[281px]">
              <div className="bg-custom-orange aspect-square w-[65px] rounded-2xl flex justify-center items-center">
                <Image src={IBattery} alt="Logo Typemaster" className="" />
              </div>
              <h2 className="uppercase font-black text-2xl leading-[1.75rem] mt-12 md:mt-10 xl:mt-12">
                High Capacity <span className="block">Battery</span>
              </h2>
              <p className="mt-6 leading-[1.625rem] text-custom-gray">
                Equipped with a long-lasting built-in battery, you’ll never have
                to spend a dime on replaceable ones. Enjoy 40 hours of usage
                time between charges.
              </p>
            </div>
            <div className="flex flex-col md:items-start items-center text-center md:text-left md:max-w-[281px]">
              <div className="bg-custom-orange aspect-square w-[65px] rounded-2xl flex justify-center items-center">
                <Image src={ILight} alt="Logo Typemaster" className="" />
              </div>
              <h2 className="uppercase font-black text-2xl leading-[1.75rem] mt-12 md:mt-10 xl:mt-12">
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
      <footer className="leading-[1.625rem] text-custom-gray text-center pb-[50px] md:pb-11 xl:pb-10">
        <span className="font-bold">Typemaster 2021</span>
        &nbsp;&nbsp;|&nbsp;&nbsp;All Rights Reserved
      </footer>
    </div>
  );
}
