'use client'
import { Button } from "@/components/ui/button"
import Image from "next/image";
import mainBackground from "../../public/background.jpg";
import bg from "../../public/background-carta.png";
import bg2 from "../../public/background-carta-2.png";
import logo from "../../public/logo.png";
import { useEffect, useState } from "react";



export default function Home() {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  const phoneNumber = "+573235821954"; // Replace with the recipient's phone number (in international format, without '+' or spaces)
  const message = "Hola quiero el paquete de amor y amistad la opcion"; // Replace with your default message
  const whatsappLink = (option: string) =>
    `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      `${message} ${option}`
    )}`;

  return (
    <main className="flex min-h-screen flex-col relative">
            <header
        className={
          "fixed top-0 w-full  z-30 bg-white transition-all " +
          (scrollActive ? " shadow-md pt-0 bg-white " : " pt-0")
        }
      >
        <nav className="flex flex-row w-full px-6 sm:px-8 lg:px-16 mx-auto py-2 sm:py-4">
          <div className="flex flex-1"></div>
          <div className="flex items-center justify-center">
            <Image src={logo.src} width={154} height={54} alt="Free Plan" />
          </div>
          <div className="flex flex-1 items-center justify-end">
            
          </div>
        </nav>
      </header>
      <div className="w-full mx-auto h-[400px] md:h-[500px]" id="about">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `url(${mainBackground.src})`,
            width: "100%",
            height: "100%",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className="backdrop-blur-[2px] bg-[#F8EDE9]/30  gap-8 py-2 sm:py-16 h-full">
            <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1 px-6 lg:px-20 md:w-[50%] mt-[80px] md:mt-24">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 md:leading-normal">
                Disfruta del dia de Amor y amistad en <strong>Duquesa</strong>.
              </h1>
              <p className="text-black-600 mt-4 mb-6">
                Te invitamos a hacer de esta celebracion un momento memorable con
                tu persona favorita.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="bg-gradient-to-b from-white-300 to-white-500 w-full py-6 md:py-14"
        id="pricing"
      >
        <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
          <div className="flex flex-col w-full">
            <div>
              <div

                className="text-2xl sm:text-3xl lg:text-4xl font-medium text-black-600 md:leading-relaxed"
              >
                Selecciona tu plan favorito
              </div>
              <div

                className="leading-normal w-full sm:w-7/12 lg:w-6/12 mx-auto my-2 text-center"
              >
                Todos nuestros planes incluyen el valor del SERVICIO y una
                decoracion de PETALOS y GLOBOS.
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 h-[1100px] md:h-[900px] gap-12 py-12">
              <div className="flex">
                <div

                  className="py-4 px-6 lg:px-12 xl:px-20 relative"
                  style={{
                    backgroundImage: `url(${bg.src})`,
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}

                >
                  <div className="bottom-5 md:bottom-8 absolute w-[40%] left-[50%] -translate-x-2/4">
                    <a
                      href={whatsappLink("#1")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="font-medium tracking-wide w-full h-6 md:h-10  text-[#FFF]  outline-none rounded-md capitalize bg-[#8E4544] hover:bg-[#85403f] hover:text-white-500 transition-all hover:shadow-[#E5AAAD] text-xs md:text-sm">
                        Reserva
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex">
                <div

                  className="py-4 px-6 lg:px-12 xl:px-20 relative"
                  style={{
                    backgroundImage: `url(${bg2.src})`,
                    width: "100%",
                    height: "100%",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    backgroundPosition: "center",
                  }}

                >
                  <div className="bottom-6 md:bottom-10 absolute w-[40%] left-[50%] -translate-x-2/4">
                    <a
                      href={whatsappLink("#2")}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="font-medium tracking-wide w-full h-6 md:h-10 text-[#FFF] text-xs md:text-sm  outline-none rounded-md capitalize bg-[#8E4544] hover:bg-[#85403f] hover:text-white-500 transition-all hover:shadow-[#E5AAAD]">
                        Reserva
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full md:my-16" id="testimoni">
            <div className="relative w-full mt-16">
              <div>
                <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-slate-100">
                  <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                    <h5 className="text-black-600 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                      Conoce más sobre nosotros en Instagram
                    </h5>
                    <p>
                      Siguenos para que estes al tanto de cada nueva experiencia
                    </p>
                  </div>
                  <Button>Ver instagram</Button>
                </div>
                <div
                  className="absolute bg-black-600 opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                  style={{ filter: "blur(114px)" }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white-300 pt-44 pb-24 w-full flex justify-center items-center">
      <p className="text-gray-400">
        ©{new Date().getFullYear()} - Duquesa Restaurante
      </p>
    </div>
    </main>
  );
}
