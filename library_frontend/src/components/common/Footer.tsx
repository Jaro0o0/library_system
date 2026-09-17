import Container from "./Container";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';

import { Link } from "react-router";


const companyData = [
    {
        name: 'about',
        link: '/about'
    },
    {
        name: 'careers',
        link: '/comming-soon'
    }
]


const navData = [
    {
        name: 'home',
        link: '/'
    },
    {
        name: 'categories',
        link: '/categories'
    },
    {
        name :'faq',
        link: '/faq'
    }
]

const plansData = [
    {
        name: 'individual',
        link: '/plans'
    },
    {
        name: 'student',
        link: '/plans'
    },
    {
        name: 'duo',
        link: '/plans'
    },
]

const socialData = [
    {
        name:'facebook',
        icon: <FacebookIcon/>
    },
    {
        name: 'instagram',
        icon: <InstagramIcon/>
    },
    {
        name: 'x',
        icon: <XIcon/>
    }
]



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
                           Your online library — discover, borrow, and read thousands of books in one place
                        </p>
                     </div>
                     {/* Lists */}
                     <div className="flex justify-between items-start md:px-8">
                        {/* Company_List */}
                        <div className="space-y-3">
                            <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Company</span>
                            <ul className="space-y-2 text-sm text-slate-400">
                               { companyData.map((item,index)=> {
                                return (
                                    <li className=" mt-2 hover:text-white cursor-pointer transition-colors" key={index}><Link to={item.link}>{item.name}</Link></li>
                                )
                               })}
                            </ul>
                        </div>
                        {/* Plans_LIst */}
                        <div className="space-y-3">
                            <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Plans</span>
                            <ul className="space-y-2 text-sm text-slate-400">
                            
                                { plansData.map((item,index)=> {
                                return (
                                    <li className=" mt-2 hover:text-white cursor-pointer transition-colors" key={index}><Link to={item.link}>{item.name}</Link></li>
                                )
                               })}
                               
                            </ul>
                        </div>
                        {/* Nav_LIst */}
                        <div className="space-y-3">
                            <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Nav</span>
                            <ul className="space-y-2 text-sm text-slate-400 ">
                                   {navData.map((item,index) => {
                                    return (
                                        <li className=" mt-2 hover:text-white cursor-pointer transition-colors" key={index}><Link to={item.link}>{item.name}</Link></li>
                                    )
                                })}
                            </ul>
                        </div>

                     </div>
                            {/* Socials */}
                            <div className="flex flex-col gap-4 items-center">
                                <div className="flex items-center gap-6 ">
                                    {socialData.map((item,index) => {
                                          return(
                                            <div key={index} className="  hover:text-green-400 transition-colors md:mx-6" >
                                                {item.icon}
                                            </div>
                                          )
                                    })}
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