import React from "react"

const Hero = () => {
  return (
    <section
      style={{ backgroundImage: "url(/hero.jpg)" }}
      class=" bg-no-repeat bg-cover  -mt-16 min-h-[70vh] relative w-full after:absolute after:inset-0 after:bg-black after:bg-opacity-20 after:z-0"
    >
      <div class="grid z-10 max-w-7xl mx-auto px-4 py-8  lg:gap-8 xl:gap-0 w-full lg:py-16 lg:grid-cols-12  h-full absolute left-1/2 -translate-x-1/2 bottom-0 ">
        <div class="mr-auto place-self-end lg:col-span-12  mt-auto z-10">
          <p className="text-white md:text-base font-extralight text-sm opacity-50">
            FROM THE FINAL FRONTIER
          </p>
          <h1 class="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-white ">
            Cold-weather apparel for the entire family.
          </h1>
          <p class="max-w-2xl mb-6 font-light  lg:mb-8 md:text-lg lg:text-xl text-white opacity-90 lg:w-7/12">
            Our specialized sub-zero hyper-insulated 3d-printed clothing
            will keep you warm through the toughest of cold. Guaranteed.
          </p>
          <a
            href="#"
            class="inline-flex items-center justify-center pr-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900 transition-transform duration-150 hover:translate-y-1"
          >
            Learn more
            <svg
              class="w-5 h-5 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
          <a
            href="#"
            class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center   rounded-lg transition-all duration-150 bg-sky-500 focus:ring-4 focus:ring-gray-100 text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 hover:translate-y-1"
          >
            Shop now
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
