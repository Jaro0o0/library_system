import AccordionComponent from "./Accordion";
import Container from "../common/Container";



function FaqHero() {
    return ( 
        <div className="w-full h-screen">
            <div className="grid grid-cols-[1fr_2fr] h-full">
                {/* Nav */}
                <div className='sticky'>
                    <h1>Nav</h1>
                </div>
                {/* Accordion */}
                <div className="overflow-y-auto h-full">
                  
                    
                    <div>
                      
                        <AccordionComponent/>
                    </div>
                    <div>
                      
                        <AccordionComponent/>
                    </div>
                    <div>
                      
                        <AccordionComponent/>
                    </div>
                     <div>
                      
                        <AccordionComponent/>
                    </div>


                </div>

            </div>

        </div>
     );
}

export default FaqHero;