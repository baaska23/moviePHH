import React from "react";
import background from "../assets/movie/opp.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Movie() {
    // хуудас хоорондын шилжилт
    const navigate = useNavigate();
    
    //postgre db-с дата дуудаж байна
    useEffect(() => {
        const fetchMovie = async () => {
          try {
            const response = await axios.get('http://localhost:3001/home_movie/');
            console.log(response.data)
            setMovie(response.data);
          } catch (error) {
            console.error('Error fetching movie:', error);
          }
        };
    
        fetchMovie();
    });
    return (
        <>
            <div className="relative w-full h-100 bg-cover  flex flex-col justify-center items-start text-white p-8" style={{ backgroundImage: `url(${background})` }}>
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <h1 className="text-5xl font-bold mb-4">Oppenheimer</h1>
                    <div className="flex flex-wrap justify-start mb-4 space-x-2">
                        <span className="bg-gray-800 bg-opacity-75 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">ACTION & DRAMA</span>
                        <span className="bg-gray-800 bg-opacity-75 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">PG13+</span>
                        <span className="bg-gray-800 bg-opacity-75 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">165 МИН</span>
                        <span className="bg-gray-800 bg-opacity-75 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">BOX OFFICE</span>
                        
                    </div>
                    <div className="bg-gray-800 bg-opacity-75 p-4 rounded mb-4 max-w-2xl text-left">
                        <p>Энэ бол атомын бөмбөгийн эцэг гэгддэг Ж. Роберт Оппенгеймерийн амьдралын түүхийг өгүүлэх кино юм. Түүний амьдрал, шинжлэх ухааны ололт амжилт, дэлхийн түүхэнд гүйцэтгэсэн үүрэг зэргийг харуулна.</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                            onClick={()=> navigate('/bookTicket')}>ЗАХИАЛАХ
                    </button>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-900 py-12">
                <div className="container mx-auto px-4">
                <div className="container mx-auto px-4">
                    {/* Director Section */}
                    <div className="flex flex-col items-center mb-12">
                        <h2 className="text-black dark:text-white text-2xl font-bold mb-4 ">НАЙРУУЛАГЧ БА ЗОХИОЛЧИД</h2>
                        <div className="flex gap-6">
                        <div className="bg-gray-500 p-6 rounded-lg shadow-lg text-center w-40">
                            <span className="text-black dark:text-white text-lg font-medium block">Christopher Nolan</span>
                            <div className="h-1 bg-blue-600 w-12 mx-auto my-4 rounded-full"></div>
                        </div>
                        <div className="bg-gray-500 p-6 rounded-lg shadow-lg text-center w-40">
                            <span className="text-black dark:text-white text-lg font-medium block">Kai Bird</span>
                            <div className="h-1 bg-blue-600 w-12 mx-auto my-4 rounded-full"></div>
                            
                        </div>
                        <div className="bg-gray-500 p-6 rounded-lg shadow-lg text-center w-40">
                            <span className="text-black dark:text-white text-lg font-medium block">Martin Sherwin</span>
                            <div className="h-1 bg-blue-600 w-12 mx-auto my-4 rounded-full"></div>
        
                        </div>
                    </div>
                        
                    </div>

                    {/* Cast Section */}
                    <div className="mb-12">
                        <h2 className="text-black dark:text-white text-2xl font-bold text-center mb-8">ЖҮЖИГЧИД</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {[
                                { name: "Cillian Murphy", img: "/src/assets/actors/avatar.jpg" },
                                { name: "Florence Pugh", img: "/src/assets/actors/avatar.jpg" },
                                { name: "Emily Blunt", img: "/src/assets/actors/avatar.jpg" },
                                { name: "Robert Downey Jr", img: "/src/assets/actors/avatar.jpg" },
                            ].map((actor, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col items-center bg-gray-500 p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                                >
                                    <img
                                        className="w-24 h-24 rounded-full mb-4 border-2 border-blue-600"
                                        src={actor.img}
                                        alt={actor.name}
                                    />
                                    <span className="text-black dark:text-white font-medium">{actor.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    </div>

                    <div className="flex flex-wrap justify-center mb-8">
                        <span className="text-black dark:text-white block text-lg font-semibold mb-4">ОНЦЛОХ ЗУРАГ БОЛОН ХЭСГҮҮД</span>
                        <div className="grid md:grid-cols-4 gap-4">
                            <div>
                                <img className="h-52 max-w-full rounded-lg" src="/src/assets/movie/op1.jpg" alt="op1" />
                            </div>
                            <div>
                                <img className="h-52 max-w-full rounded-lg" src="/src/assets/movie/op2.jpeg" alt="op2" />
                            </div>
                            <div>
                                <img className="h-52 max-w-full rounded-lg" src="/src/assets/movie/op3.jpg" alt="op3" />
                            </div>
                            <div>
                                <img className="h-52 max-w-full rounded-lg" src="/src/assets/movie/op4.jpg" alt="op4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}