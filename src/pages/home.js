export default function Home() {
  return (
    <>
      <div>
        {/* sec 1 */}
        <section className="relative flex   h-auto w-full flex-col items-center   justify-center">
          {/*   absolute floeting content  */}
          <div className="absolute  z-20 flex max-w-3xl flex-col  items-center space-y-   ">
            <div className="text-4xl font-bold">Unlimited movies, TV </div>
            <div className="text-4xl font-bold"> shows and more.</div>
            <div className="hidden text-xl  sm:inline-block">
              Watch anywhere. Cancel anytime.
            </div>
            <div className="hidden px-8 text-lg  sm:inline-block">
              Ready to watch? Enter your email to create or restart your
              membership.
            </div>
            <div className="flex w-full">
              <input
                className="w-full bg-white px-4 py-3 text-gray-400 focus:outline-none"
                placeholder="Email address"
                type="text"
              />
              <div className="bg-red flex flex-shrink-0 ">
                <button className="flex items-center  px-4">
                  Get Started
                  <svg
                    className="w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {/*  top section  */}
          <div className=" relative h-full  ">
            {/* top nav */}
            <div className="absolute h-60  w-full bg-gradient-to-b from-black   ">
              <div className="flex  w-full items-center justify-between py-4 px-20">
                <div className="w-40 text-red-500">
                  <span
                    className=" nfLogo"
                    data-uia="netflix-header-svg-logo-noclick"
                  >
                    <svg
                      viewBox="0 0 111 30"
                      className="svg-icon svg-icon-netflix-logo"
                      focusable="false"
                    >
                      <g id="netflix-logo">
                        <path
                          d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"
                          id="Fill-14"
                        />
                      </g>
                    </svg>
                  </span>
                </div>
                <div className="flex space-x-6  sm:inline-flex">
                  <div className="">
                    <select
                      className="rounded border border-white bg-transparent px-4 py-1"
                      name=""
                      id="cars"
                    >
                      <option value="">English</option>
                      <option value="">हिन्दी</option>
                    </select>
                  </div>
                  <div className="bg-red rounded px-4 py-1">Sign In</div>
                </div>
              </div>
            </div>
            {/*    bootom gradients  */}
            <div className=" absolute bottom-0 h-60 w-full bg-gradient-to-t from-blac">
              {" "}
            </div>
            {/*  middle section     */}
            <img
              className="object-fit z-0 flex w-full "
              src="https://assets.nflxext.com/ffe/siteui/vlv3/c43f3cc0-6f02-4b8a-9470-7b1732eb937d/7ae82418-beea-4868-8594-dddd284dc46c/IN-en-20210315-popsignuptwoweeks-perspective_alpha_website_small.jpg"
            />
          </div>
        </section>
        {/* sec 2 */}
        <section className=" min-half-screen  z-50 flex flex h-full  w-full  flex-col   border-t-8  border-gray-700   sm:flex-row">
          <div className="my-auto flex  h-full w-full   flex-col  items-center justify-center p-12 sm:w-1/2">
            <div className="w-full text-left  text-4xl font-bold">
              Enjoy on your TV.
            </div>
            <div className="text-xl">
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </div>
          </div>
          <div className="w-full  sm:w-1/2">
            <div className="relative my-auto  my-auto w-full max-w-2xl  overflow-hidden">
              <img
                alt=""
                className="absolute  right-0 z-10"
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              />
              <video
                className=" w-full p-20"
                autoPlay=""
                playsInline=""
                muted=""
                loop=""
              >
                <source
                  src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </section>
      </div>
      {/*  sec   */}
      <section className="   min-half-screen z-50 flex  h-full  w-full flex-col  border-t-8  border-gray-700   sm:flex-row">
        <div className="my-auto flex  h-full w-full   flex-col  items-center justify-center p-12 sm:w-1/2">
          <div className="relative ">
            <div className="flex w-full justify-center">
              <div className="absolute bottom-0 flex flex  w-full max-w-sm justify-between  border border-gray-500  p-4">
                <div className="">
                  <img
                    className="h-16"
                    src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png"
                  />
                </div>
                <div className="our-story-card-animation-text">
                  <div id="" className="text-0" data-uia="">
                    Stranger Things
                  </div>
                  <div id="" className="text-1" data-uia="">
                    Downloading...
                  </div>
                </div>
                <div className="">
                  <svg
                    className="w-"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" />
          </div>
        </div>
        <div className="my-auto flex  h-full w-full   flex-col  items-center justify-center p-12 sm:w-1/2">
          <div className="w-full text-left  text-4xl font-bold">
            Watch everywhere.
          </div>
          <div className="text-xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV. .
          </div>
        </div>
      </section>
      {/*  sec 3  */}
      <section className="  min-half-screen z-50  flex h-full  w-full flex-col  border-t-8  border-gray-700   sm:flex-row">
        <div className="my-auto flex  h-full w-full   flex-col  items-center justify-center p-12 sm:w-1/2">
          <div className="w-full text-left  text-4xl font-bold">
            Watch everywhere.
          </div>
          <div className="text-xl">
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV. .
          </div>
        </div>
        <div className="w-full  sm:w-1/2">
          <div className="relative my-auto  my-auto w-full max-w-2xl  overflow-hidden">
            <img
              alt=""
              className="absolute  right-0 z-10"
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png"
            />
            <video
              className=" w-full p-20"
              autoPlay=""
              playsInline=""
              muted=""
              loop=""
            >
              <source
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
      </section>
      {/*  */}
      <section className=" border-b-8 border-t-8 border-gray-700  text-center">
        <div className="mx-auto w-full max-w-3xl py-20">
          <div className=" text-4xl font-bold">Frequently Asked Questions</div>
          <div className=" py-4">
            {" "}
            Ready to watch? Enter your email to create or restart your
            membership.
          </div>
          <div className="flex w-full">
            <input
              className="w-full px-4 py-3 text-gray-400 focus:outline-none"
              placeholder="Email address"
              type="text"
            />
            <div className="bg-red flex flex-shrink- ">
              <button className="flex items-center  px-4">
                Get Started
                <svg
                  className="w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
