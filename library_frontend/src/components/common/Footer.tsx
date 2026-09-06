import Container from "./Container";
import IconBox from "./IconBox";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


function Footer() {
    return ( 
        <footer className="bg-slate-900 text-slate-300 mt-16 border-t border-slate-800">
            <Container>
               
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-10 items-start py-16">
                     {/* Logo */}
                     <div className="flex flex-col gap-4">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            <span className="text-green-400">Books</span>
                        </h2>
                        <p className="text-sm text-slate-400 leading-relaxed max-w-xs">
                            Twoja biblioteka online — odkrywaj, wypożyczaj i czytaj tysiące książek w jednym miejscu.
                        </p>
                     </div>
                     {/* Lists */}
                     <div className="flex justify-between items-start md:px-8">
                        {/* Company_List */}
                        <div className="space-y-3">
                            <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Company</span>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="hover:text-white cursor-pointer transition-colors">O nas</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Kariera</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Kontakt</li>
                            </ul>
                        </div>
                        {/* Plans_LIst */}
                        <div className="space-y-3">
                            <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Plans</span>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="hover:text-white cursor-pointer transition-colors">Standard</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Premium</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Premium+</li>
                            </ul>
                        </div>
                        {/* Nav_LIst */}
                        <div className="space-y-3">
                            <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Nav</span>
                            <ul className="space-y-2 text-sm text-slate-400">
                                <li className="hover:text-white cursor-pointer transition-colors">Home</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Kategorie</li>
                                <li className="hover:text-white cursor-pointer transition-colors">Wyszukiwarka</li>
                            </ul>
                        </div>

                     </div>
                     {/* Socials */}
                     <div className="flex flex-col gap-4 justify-items-center md:justify-items-end">
                        <span className="text-sm font-semibold uppercase tracking-wider text-green-400 text-center md:text-right">Śledź nas</span>
                        <div className="grid grid-cols-3 gap-4 justify-items-center md:justify-items-end">
                            <IconBox><FacebookIcon/></IconBox>
                            <IconBox><InstagramIcon /></IconBox>
                            <IconBox><XIcon/></IconBox>
                        </div>
                     </div>
                </div>
                <div className="border-t border-slate-800 py-6 text-center text-sm text-slate-500">
                    © {new Date().getFullYear()} Books Library. Wszelkie prawa zastrzeżone.
                </div>
            </Container>
        </footer>
     );
}

export default Footer;