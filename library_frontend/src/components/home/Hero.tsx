import { Link } from 'react-router'
import heroVideo from '../../assets/videos/hero-video.mp4'
import CommonHeading from '../common/CommonHeading'




function Hero() {
    return (
        <>
        <div className="w-full min-h-screen relative flex items-center">
            
            <video
                src={heroVideo}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40 pointer-events-none" />

            {/* INNER */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-4 pt-28 pb-16">

                <div className="max-w-2xl">
                    {/* HEADING */}
                    <CommonHeading>
                        Twoja osobista biblioteka
                    </CommonHeading>
                    

                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                        Śledź czytanie z{' '}
                        <span className="text-green-400">Book Tracker</span>
                    </h1>

                    <p className="text-lg sm:text-xl text-slate-300 mt-6 leading-relaxed">
                       Dodawj iczyaataj opinie innych na temat swoich ulbionych ksiazek -
                       wszystko w jednym intuicyjnym miejscu
                    </p>

                    <div className="flex flex-wrap gap-4 mt-8">
                        <Link
                            to="/register"
                            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                        >
                            Załóż konto za darmo
                        </Link>
                        <Link
                            to="/login"
                            className="border border-white/40 hover:border-white hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
                        >
                            Zaloguj się
                        </Link>
                    </div>

                    <ul className="flex flex-wrap gap-6 mt-10 text-sm text-slate-400">
                        <li className="flex items-center gap-2">
                            <span className="text-green-400" aria-hidden="true">✓</span>
                            Darmowe konto
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400" aria-hidden="true">✓</span>
                            Biblioteka i cele
                        </li>
                        <li className="flex items-center gap-2">
                            <span className="text-green-400" aria-hidden="true">✓</span>
                            Tysiace opinii
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        
        </>
    )
}

export default Hero
