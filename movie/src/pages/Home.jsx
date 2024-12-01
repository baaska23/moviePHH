import React from "react";
import { useNavigate } from "react-router-dom";
export default function Home() {
  const navigate = useNavigate();
    
  return (
<>
    <div id="default-carousel" className="relative w-full" data-carousel="slide">
      <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div className=" duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/sky.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/ball.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/seattle.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
          <img
            src="/src/assets/chicago.jpg"
            className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            alt="..."
          />
        </div>
      </div>

      <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
      </div>
      <button
        type="button"
        className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>

    <div className="flex justify-center items-center h-full">
      <h2 className="text-2xl font-bold my-8">МАНАЙ ДЭЛГЭЦНЭЭ</h2>
    </div>

    <hr className="mb-3 border-gray-300 dark:border-gray-200 mx-20" />

    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mx-20">
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500">
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/seattle.jpg" alt="" />
            <div className="p-3">
              <div className="flex items-center space-x-4 gap-48">
                 <p className="font-normal text-gray-700 dark:text-gray-400">sep 26, 2023</p>
                   <a href="#" className="font-normal text-blue-700 dark:text-blue-400 hover:underline" onClick={() => navigate('/movie')}>
                  дэлгэрэнгүй
                 </a>
              </div>
                <a href="#">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bob Marley</h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Төрөл:Drama/History | 2 цаг</p>
              </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500">
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/ball.jpg" alt="" />
            <div className="p-3">
              <div className="flex items-center space-x-4 gap-48">
                 <p className="font-normal text-gray-700 dark:text-gray-400">sep 26, 2023</p>
                   <a href="#" className="font-normal text-blue-700 dark:text-blue-400 hover:underline" onClick={() => navigate('/movie')}>
                  дэлгэрэнгүй
                 </a>
              </div>
                <a href="#">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bob Marley</h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Төрөл:Drama/History | 2 цаг</p>
              </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500">
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/chicago.jpg" alt="" />
            <div className="p-3">
              <div className="flex items-center space-x-4 gap-48">
                 <p className="font-normal text-gray-700 dark:text-gray-400">sep 26, 2023</p>
                   <a href="#" className="font-normal text-blue-700 dark:text-blue-400 hover:underline" onClick={() => navigate('/movie')}>
                  дэлгэрэнгүй
                 </a>
              </div>
                <a href="#">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bob Marley</h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Төрөл:Drama/History | 2 цаг</p>
              </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500" onClick={() => navigate('/movie')}>
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/ball.jpg" alt="" />
            <div className="p-3">
              <div className="flex items-center space-x-4 gap-48">
                 <p className="font-normal text-gray-700 dark:text-gray-400">sep 26, 2023</p>
                   <a href="#" className="font-normal text-blue-700 dark:text-blue-400 hover:underline" onClick={() => navigate('/movie')}>
                  дэлгэрэнгүй
                 </a>
              </div>
                <a href="#">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bob Marley</h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Төрөл:Drama/History | 2 цаг</p>
              </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500" onClick={() => navigate('/movie')}>
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/chicago.jpg" alt="" />
            <div className="p-3">
              <div className="flex items-center space-x-4 gap-48">
                 <p className="font-normal text-gray-700 dark:text-gray-400">sep 26, 2023</p>
                   <a href="#" className="font-normal text-blue-700 dark:text-blue-400 hover:underline">
                  дэлгэрэнгүй
                 </a>
              </div>
                <a href="#">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bob Marley</h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Төрөл:Drama/History | 2 цаг</p>
              </div>
        </div>
        <div className=" bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-500" >
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/seattle.jpg" alt="" />
            <div className="p-3">
              <div className="flex items-center space-x-4 gap-48">
                 <p className="font-normal text-gray-700 dark:text-gray-400">sep 26, 2023</p>
                   <a href="#" className="font-normal text-blue-700 dark:text-blue-400 hover:underline" onClick={() => navigate('/movie')}>
                  дэлгэрэнгүй
                 </a>
              </div>
                <a href="#">
                            <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Bob Marley</h5>
                </a>
                <p className="font-normal text-gray-700 dark:text-gray-400"> Төрөл:Drama/History | 2 цаг</p>
              </div>
          </div>
   
    </div>
    {/*Бусад button*/}
     <div className="grid place-items-center h-full py-6">
    <a className="px-10 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" 
                            onClick={()=> navigate('/bookTicket')}>Бусад
                    </a>
    
  </div>

  {/*banner*/}
  <section id="advertise">
        <img src="/src/assets/banner.png" alt="banner" />
      </section>


    <div className="flex justify-center items-center h-full">
      <h2 className="text-2xl font-bold my-8">ТУН УДАХГҮЙ</h2>
    </div>
    <div className="grid md:grid-cols-4 gap-2">
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/seattle.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/ball.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/chicago.jpg" alt="" />
        </div>
        <div>
            <img className="h-auto max-w-full rounded-lg" src="/src/assets/seattle.jpg" alt="" />
        </div>
    </div>

    
</>
  );
}