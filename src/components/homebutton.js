'use client'
import Image from "next/image"

const Homebutton = () => {
    return (
<div className="flex flex-col items-center mx-auto max-w-sm my-4 rounded-xl overflow-hidden"> 
            
  
            <div className="w-full h-[80px] px-4 py-2 text-white 
                          bg-gradient-to-r from-[#5B0202] to-[#200E01] 
                          flex items-center space-x-3">
                
 
                <Image
                    src='/profile-placeholder.png' 
                    alt='User Profile'
                    width={40} 
                    height={40}
                    className="rounded-full object-cover"
                />


                <div className="flex flex-col text-sm font-medium">
                    <p className="font-semibold text-base">Welcome Users~</p>
                    <p className="text-sm font-light">How about chilling with a cup of coffee?</p>
                </div>
            </div>


            <div className="w-full h-[1px] bg-white">

            </div>
            

            <div className="flex flex-row w-full justify-between space-x-2 p-4">

                <button className="flex-1 h-[70px] flex items-center justify-between px-3 
                                   bg-gradient-to-r from-[#5B0202] to-[#200E01] rounded-lg 
                                   text-white text-lg font-bold">
                    
                    <span>Delivery</span>
                    

                    <Image
                        src='/Coffee.svg' 
                        alt='Delivery Icon'
                        width={40} 
                        height={40}
                        className="opacity-90"
                    />
                </button>


                <button className="flex-1 h-[70px] flex items-center justify-between px-3 
                                   bg-gradient-to-r from-[#5B0202] to-[#200E01] rounded-lg 
                                   text-white text-lg font-bold">
                    
                    <span>Promo's</span>
                    
            
                    <Image
                        src='/promos.svg' 
                        alt='Promotions Icon'
                        width={40} 
                        height={40}
                        className="opacity-90"
                    />
                </button>
            </div>

        </div>
    )
}

export default Homebutton;