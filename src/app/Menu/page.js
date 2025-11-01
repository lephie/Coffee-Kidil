import { Search, Store } from "lucide-react";
import Image from "next/image";


const Menu = () => {

    return (
        <div className="w-full bg-white p-4 shadow-sm">

            <div className="w-full flex flex-wrap items-center bg-white gap-y-4"> 
                

                <div className="flex items-center w-auto">
                    <Image
                        src='/kidil.svg'
                        width={50}
                        height={50}
                        className="mr-3"
                        alt="Kidil Coffee"
                    />
                    <span>
                        Coffee Kidil
                    </span>
                </div>
                

                <div className="flex-1 relative ml-4">
                    <input 
                        type="text" 
                        placeholder="Search" 
                        className="w-[200px] h-[35px] bg-gray-100 pl-10 pr-4 py-2 rounded-full 
                                   text-sm placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-[#5B0202]" 
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
                

 
                <div className="w-full flex items-center mt-4 justify-between">
                    

                    <div className="flex items-start space-x-3">
                        <Store color="#5B0202" size={35} className="mt-1" />
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold text-gray-800 flex items-center">
                                Kelapa Dua Depok 

                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-gray-500 ml-1">
                                    <polyline points="9 18 15 12 9 6"/>
                                </svg>
                            </span>
                            <span className="text-sm text-gray-500 mt-0.5">
                                4.0 KM from you
                            </span>
                        </div>
                    </div>
                    
                    <button className="h-10 px-6 font-bold text-sm rounded-full text-white 
                                       bg-gradient-to-r from-[#5B0202] to-[#200E01] 
                                       shadow-md hover:shadow-lg transition-shadow whitespace-nowrap">
                        PICKUP
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Menu;