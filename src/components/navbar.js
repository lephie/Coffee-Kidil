import Link from "next/link";


const Navbar = () => {

    return(
      <div className="fixed bottom-0 left-0 w-full z-50">
        <nav className="bg-white shadow-xl flex flex-row justify-around h-16 border-t border-gray-100">
            
            <Link href='/page.js'>
            <button className="flex flex-col items-center justify-center p-2 transition-colors duration-200 flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                </g></svg>
                <span>Beranda</span>
            </button>
            </Link>
            <Link href='/Menu'>
            <button className="flex flex-col items-center justify-center p-2 transition-colors duration-200 flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path d="m12.594 23.258l-.012.002l-.071.035l-.02.004l-.014-.004l-.071-.036q-.016-.004-.024.006l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.016-.018m.264-.113l-.014.002l-.184.093l-.01.01l-.003.011l.018.43l.005.012l.008.008l.201.092q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.003-.011l.018-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M12.185 2.421a1 1 0 0 1 1.697 1.051l-.067.107l-.298.421H16.5a1.5 1.5 0 0 1 1.493 1.356L18 5.5V7l-.003.084c.542.19.942.684.997 1.277l.006.14V10a1 1 0 0 1-.879.992l-.116.007l-.92 9.2a2 2 0 0 1-1.837 1.794l-.153.006h-6.19a2 2 0 0 1-1.97-1.65l-.02-.15l-.92-9.2a1 1 0 0 1-.988-.884L5 10V8.5a1.5 1.5 0 0 1 1.003-1.416l-.002-.042L6 5.5a1.5 1.5 0 0 1 1.356-1.493L7.5 4h3.587l.044-.087l.054-.083zm3.71 9.58h-7.79l.8 8h6.19zM17 9H7v1h10zm-1-3H8v1h8z"/>
                </g></svg>
                <span>Menu</span>
            </button>
            </Link>

            <Link href='/Pesanan'>
            <button className="flex flex-col items-center justify-center p-2 transition-colors duration-200 flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"><path d="M20 18v-8c0-1.886 0-2.829-.586-3.414C18.828 6 17.886 6 16 6H4v12c0 1.885 0 2.828.586 3.414S6.114 22 8 22h8c1.886 0 2.828 0 3.414-.586S20 19.885 20 18"/><path d="M12 11a3 3 0 0 1 3 3m-3-3a3 3 0 0 0-3 3m3-3v-1m3 4H9m6 0h1m-7 0H8m0 4h8M4 6l7.385-3.094c1.649-.691 2.473-1.037 3.13-.86a2 2 0 0 1 1.07.717C16 3.305 16 4.203 16 6"/>
                </g></svg>
                <span>Pesanan</span>
            </button>
            </Link>
            <Link href='/Profile'>
            <button className="flex flex-col items-center justify-center p-2 transition-colors duration-200 flex-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" fillRule="evenodd" d="M12 4a8 8 0 0 0-6.96 11.947A4.99 4.99 0 0 1 9 14h6a4.99 4.99 0 0 1 3.96 1.947A8 8 0 0 0 12 4m7.943 14.076q.188-.245.36-.502A9.96 9.96 0 0 0 22 12c0-5.523-4.477-10-10-10S2 6.477 2 12a9.96 9.96 0 0 0 2.057 6.076l-.005.018l.355.413A9.98 9.98 0 0 0 12 22q.324 0 .644-.02a9.95 9.95 0 0 0 5.031-1.745a10 10 0 0 0 1.918-1.728l.355-.413zM12 6a3 3 0 1 0 0 6a3 3 0 0 0 0-6" clipRule="evenodd"/>
                </svg>
                <span>Profile</span>
            </button>
            </Link>
        </nav>
      </div>      
    )
}

export default Navbar;