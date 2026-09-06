import Container from "./Container";
import IconBox from "./IconBox";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import XIcon from '@mui/icons-material/X';


function Footer() {
    return ( 
        <footer className="h-[40vh] bg-slate-900 text-slate-300 mt-16">
            <Container>
               
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 gap-10 items-center h-full">
                     {/* Logo */}
                     <div className="flex items-center">
                        <h2 className="text-3xl font-bold text-white tracking-tight">
                            <span className="text-green-400">Books</span>
                        </h2>
                        <p></p>
                     </div>
                     {/* Lists */}
                     <div className="flex justify-between items-center md:px-8">
                        {/* Company_List */}
                        <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Company</span>
                        <ul className="space-y-2 text-sm"></ul>
                        {/* Plans_LIst */}
                         <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Plans</span>
                        <ul className="space-y-2 text-sm"></ul>
                        {/* Nav_LIst */}
                        <span className="text-sm font-semibold uppercase tracking-wider text-green-400">Nav</span>
                        <ul className="space-y-2 text-sm"></ul>

                     </div>
                     {/* Socials */}
                     <div className="grid grid-cols-3 gap-6 justify-items-center md:justify-items-end">
                       
                       
                            <IconBox><FacebookIcon/></IconBox>
                            <IconBox><InstagramIcon /></IconBox>
                            <IconBox><XIcon/></IconBox>
                     </div>
                </div>
            </Container>
        </footer>
     );
}

export default Footer;