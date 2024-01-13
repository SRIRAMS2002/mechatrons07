import React from 'react'

const Footer = () => {
  return (
    <div>
      
      <footer>
  
  <div className="relative isolate overflow-hidden bg-gray-900 pt-16 sm:pt-24 lg:pt-10">

<div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact Us</h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
            "We're just a message away from turning your questions into solutions."
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-3 lg:pt-2">
            <div className="flex flex-col items-start">
            <div className="p-5 w-48 text-white">
            <div className="text-md uppercase text-gray-500 font-medium">Team</div>
            <a className="my-3 block" href="/Founders">
              Founders 
            </a>
            
            <a className="my-3 block" href="/Mentors">
              Mentors
            </a>
            <a className="my-3 block" href="/Members">
              Members
            </a>
           
           
           
          </div>
              
            </div>
            <div className="flex flex-col items-start">
            <div className="p-5 w-48 text-white">
            <div className="text-md uppercase text-gray-500 font-medium">Work</div>
           
            
            <a className="my-3 block" href="/Projects">
              Projects <span className="text-teal-600 text-xs p-1">New</span>
            </a>
            <a className="my-3 block" href="/Achievements">
             Achievements <span className="text-teal-600 text-xs p-1">New</span>
            </a>
            <a className="my-3 block" href="/Gallery">
              Gallery <span className="text-teal-600 text-xs p-1">New</span>
            </a>
          </div>
              
            </div>
            <div className="flex flex-col items-start">
            <div className="p-5 w-52 text-white">
            <div className="text-md uppercase text-gray-500 font-medium">Graduates</div>
            
            <a className="my-3 block" href="/Alumini">
              Alumini <span className="text-teal-600 text-xs p-1"></span>
            </a>
            <a className="my-3 block" href="/Aluminiposition">
            Alumni Positions <span className="text-teal-600 text-xs p-1">New</span>
            </a>
           
          </div>
              
            </div>
          </dl>
        </div>
      </div>
{/* Footer Section */}
      <div class="w-full mx-auto mt-10 my-5 max-w-7xl justify-around text-sm pt-6  flex flex-wrap gap-y-6 gap-4 items-center md:justify-between dark:border-white/10">
            <div class="order-2 sm:order-1 flex items-center gap-3 text-gray-900/50 dark:text-white/50">
                
                <span class="w-48 block pt-1">
                   © Mechatrons 2019 - 2024
                </span>
            </div>
            <div class="order-first sm:order-2 flex flex-wrap justify-center gap-y-2 gap-x-4 text-gray-500">
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/srit_mechatrons_/">Instagram</a>
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/@mechatronssrit902">YouTube</a>

                
                <a class="transition hover:text-gray-600 dark:hover:text-gray-300" href="/contact">Contact</a>
            </div>
            <div class="order-last -mb-4 flex gap-1 overflow-hidden font-medium text-gray-600 dark:text-white">
                Proudly made by
                <h2 class="-mt-[3px] flex items-start justify-center gap-2 text-center text-lg font-semibold text-blue-950 dark:text-white sm:gap-1">
                    <div class="block">
                        <div class="relative block pb-2">
                            <span class="absolute inset-0 z-[1] block bg-gradient-to-b from-blue-950 via-blue-950 to-transparent bg-clip-text text-transparent dark:from-white dark:via-white">SRIRAM S</span>
                            <span class="absolute inset-0 block bg-gradient-to-r from-purple-500 to-yellow-400 bg-clip-text text-transparent">SRIRAM S</span>
                            <span class="block">SRIRAM S</span>
                        </div>
                        <div class="-mt-5 grow overflow-hidden">
                            <svg aria-hidden="true" class="w-24" height="22" viewBox="0 0 283 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.24715 19.3744C72.4051 10.3594 228.122 -4.71194 281.724 7.12332" stroke="url(#paint0_linear_pl)" stroke-width="4"></path>
                                <defs>
                                    <linearGradient id="paint0_linear_pl" x1="282" y1="5.49999" x2="40" y2="13" gradientUnits="userSpaceOnUse">
                                        <stop stop-color="#facc15"></stop>
                                        <stop offset="1" stop-color="#a855f7"></stop>
                                    </linearGradient>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </h2>
            </div>
        </div>
      <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 0.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
        
      
    </div>
</footer>
                                    
    </div>
  )
}

export default Footer
