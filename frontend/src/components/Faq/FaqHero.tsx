

import AccordionComponent from "./Accordion";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/commonAnimations";
import { useRef } from "react";

import { accordionLinks, orderPlacedItems, paymentsItems, registrationItems  } from '../../lib/Faq/data';




function FaqHero() {

  const scrollRef = useRef<Record<string, HTMLHeadingElement | null>>({});


  const scrollhandler = (itemTitle: string) => {
    const scrollItem = scrollRef.current[itemTitle];

    if (scrollItem) {
      scrollItem.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <div className="w-full h-screen">
      <div className="grid grid-cols-[1fr_2fr] h-full">
        {/* Nav */}
        <div className="p-8  overflow-y-auto h-full">
          <h1 className="font-semibold text-2xl mt-8 mb-6 text-gray-800">On this site</h1>
          <ul className="flex flex-col gap-3">
            {accordionLinks.map((item, index) => (
              <li
                key={index}
                className="text-gray-500 text-sm cursor-pointer transition-colors duration-200 hover:text-green-500 hover:pl-1"
                onClick={() => scrollhandler(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        {/* Accordion */}
        <div className="overflow-y-auto h-full p-8 scroll-smooth">
          <motion.h1
            className="text-4xl font-medium text-gray-900 leading-tight mt-8 mb-12"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            Frequently Asked <span className="text-green-400!">Questions</span>
          </motion.h1>
          {/* AccordionOrder */}
          <div className="mb-4">
            <h2
              className="text-2xl text-gray-900 font-medium py-6"
              ref={(el) => { scrollRef.current['Order Placed'] = el; }}
            >
              Order Placed
            </h2>
            {orderPlacedItems.map((item, index) => (
              <AccordionComponent
                id='Order Placed'
                key={index}
                accordionTitle={item.name}
                accordionQuestion={item.description}
              />
            ))}
          </div>
          {/* PaymentsAccirdion */}
          <div>
            <h2
              className="text-2xl text-gray-900 font-medium py-6"
              ref={(el) => { scrollRef.current['Payments'] = el; }}
            >
              Payments
            </h2>
             {paymentsItems.map((item, index) => (
              <AccordionComponent
                id='Payments'
                key={index}
                 accordionTitle={item.name}
                accordionQuestion={item.description}
              />
            ))}
          </div>
            {/* RegistrationAccordion */}
          <div>
            <h2
              className="text-2xl text-gray-900 font-medium py-6"
              ref={(el) => { scrollRef.current['Registration'] = el; }}
            >
              Registration
            </h2>
             {registrationItems.map((item, index) => (
              <AccordionComponent
                id='Registration'
                key={index}
                 accordionTitle={item.name}
                accordionQuestion={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqHero;