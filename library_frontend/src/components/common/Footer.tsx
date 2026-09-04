import Container from "./Container";


function Footer() {
    return ( 
        <footer className="h-[30vh]">
            <Container>
               
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 p-8 ">
                     {/* Logo */}
                     <div>
                        <h2>Books</h2>
                     </div>
                     {/* Lists */}
                     <div className="flex justify-between">
                        {/* Company_List */}
                        <span>Company</span>
                        <ul></ul>
                        {/* Plans_LIst */}
                         <span>Plans</span>
                        <ul></ul>
                        {/* Nav_LIst */}
                        <span>Nav</span>
                        <ul></ul>

                     </div>
                     {/* Socials */}
                     <div>

                     </div>
                </div>
            </Container>
        </footer>
     );
}

export default Footer;