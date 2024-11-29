import React from "react";
import background from "../assets/movie/dunkirk.jpg";
import { useNavigate } from "react-router-dom";

export default function Movie() {
    const navigate = useNavigate();
    return (
        <>
            <div className="relative w-full h-96 bg-cover bg-center flex flex-col justify-center items-start text-white p-8" style={{ backgroundImage: `url(${background})` }}>
                <div className="bg-black bg-opacity-50 p-6 rounded-lg">
                    <h1 className="text-5xl font-bold mb-4">Dunkirk</h1>
                    <div className="flex flex-wrap justify-start mb-4 space-x-2">
                        <span className="bg-gray-800 bg-opacity-75 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">ACTION & DRAMA</span>
                        <span className="bg-gray-800 bg-opacity-75 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">PG13+</span>
                        <span className="bg-gray-800 bg-opacity-75 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">165 МИН</span>
                        <span className="bg-gray-800 bg-opacity-75 text-gray-100 text-xs font-medium px-2.5 py-0.5 rounded">BOX OFFICE</span>
                    </div>
                    <div className="bg-gray-800 bg-opacity-75 p-4 rounded mb-4 max-w-2xl text-left">
                        <p>Дэлхийн 2-р дайны эхэн үе. Британи, Канад, Франц Белги зэрэг холбоот орнуудын олон тооны цэрэг 
                        арми Германий армид бүслэгдэв. Дөнкирк боомтоос английн арал руу нүүлгэн шилжүүлжээ.</p>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
                            onClick={()=> navigate('/bookTicket')}>ЗАХИАЛАХ
                    </button>
                </div>
            </div>

            <div className="bg-slate-800 py-12">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center mb-8">
                        <div className="text-center">
                            <span className="text-white block text-lg font-semibold">НАЙРУУЛАГЧ</span>
                            <span className="text-white text-xl">CHRISTOPHER NOLAN</span>
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center mb-8">
                        <div className="text-center">
                            <span className="text-white block text-lg font-semibold">ЗОХИОЛЧ</span>
                            <span className="text-white text-xl">IME UDO</span>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center mb-8">
                        <span className="text-white block text-lg font-semibold mb-4">ЖҮЖИГЧИД</span>
                        <div className="flex flex-wrap justify-center gap-8">
                            <div className="flex items-center gap-4">
                                <img className="w-16 h-16 rounded-full" src="/src/assets/actors/avatar.jpg" alt="Fion Whitehead" />
                                <div className="font-medium text-white">
                                    <div>Fion Whitehead</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img className="w-16 h-16 rounded-full" src="/src/assets/actors/avatar.jpg" alt="Harry Styles" />
                                <div className="font-medium text-white">
                                    <div>Harry Styles</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img className="w-16 h-16 rounded-full" src="/src/assets/actors/avatar.jpg" alt="Cillian Murphy" />
                                <div className="font-medium text-white">
                                    <div>Cillian Murphy</div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <img className="w-16 h-16 rounded-full" src="/src/assets/actors/avatar.jpg" alt="Tom Hardy" />
                                <div className="font-medium text-white">
                                    <div>Tom Hardy</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center mb-8">
                        <span className="text-white block text-lg font-semibold mb-4">ОНЦЛОХ ЗУРАГ БОЛОН ХЭСГҮҮД</span>
                        <div className="grid md:grid-cols-4 gap-4">
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="/src/assets/seattle.jpg" alt="Seattle" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="/src/assets/ball.jpg" alt="Ball" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="/src/assets/seattle.jpg" alt="Seattle" />
                            </div>
                            <div>
                                <img className="h-auto max-w-full rounded-lg" src="/src/assets/ball.jpg" alt="Ball" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}