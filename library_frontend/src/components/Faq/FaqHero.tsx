import AccordionComponent from "./Accordion";
import Container from "../common/Container";
import { accordionData } from "../../lib/accordionData"







function FaqHero() {
    return ( 
        <div className="w-full h-screen ">
            <div className="grid grid-cols-[1fr_2fr] h-full">
                {/* Nav */}
                <div className='p-8 border-r border-gray-200 overflow-y-auto h-full'>
                    <h1 className="font-semibold text-2xl mt-4 mb-6 text-gray-800">On this site</h1>
                    <ul className="flex flex-col gap-3">
                        {accordionData.map((item ,index) => (
                            <li
                                key={index}
                                className="text-gray-500 text-sm cursor-pointer transition-colors duration-200 hover:text-green-500 hover:pl-1"
                            >
                                {item.accordionTitle}
                            </li>
                        ))}
                    </ul>
                </div>
                {/* Accordion */}
                <div className="overflow-y-auto h-full p-8">
                  
                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-green-400 leading-tight">Questions</h1>
                    <div className="mt-8">
                        {accordionData.map((item, index) => (
                            <AccordionComponent
                                key={index}
                                accordionTitle={item.accordionTitle}
                                accordionQuestion={item.accordionQuestion}
                            />
                        ))}
                    </div>
                    


                </div>

            </div>

        </div>
     );
}

export default FaqHero;