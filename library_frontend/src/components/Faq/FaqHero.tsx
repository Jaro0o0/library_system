

import AccordionComponent from "./Accordion";
import { motion } from "framer-motion";
import { fadeInUp } from "../../animations/commonAnimations";
import { useRef } from "react";



const accordionLinks = [
    {
    name:'Order Placed',
       
    },
    {
        name:'Payments',
        
    },
    {
        name:'Registration'
    },
]


const orderPlacedItems = [
    {
      name: 'How do I place an order?',
      description: 'To place an order, select the items you want, add them to your cart, and proceed to checkout.'
    },
    {
      name: 'Can I change my order?',
      description: 'You can change your order before it has been processed. After processing begins, changes may no longer be possible.'
    },
    {
      name: 'How can I track my order?',
      description: 'You can track your order from your account by opening the order history and selecting the order you want to check.'
    },
    {
      name: 'Can I cancel my order?',
      description: 'You can cancel your order as long as it has not already been processed or shipped.'
    },
    {
      name: 'What happens after placing an order?',
      description: 'After placing an order, you will receive a confirmation and your order will be processed. You can check its status from your account.'
    }
]


const paymentsItems = [
    {
      name: 'What payment methods are available?',
      description: 'We support several common payment methods, including credit cards and online payments.'
    },
    {
      name: 'When will I be charged?',
      description: 'Payment is processed when you complete the checkout process.'
    },
    {
      name: 'Why was my payment declined?',
      description: 'A payment may be declined because of incorrect payment details, insufficient funds, or a problem with your bank.'
    },
    {
      name: 'Can I get a refund?',
      description: 'Refund eligibility depends on the status of your order and the applicable refund policy.'
    },
    {
      name: 'Is my payment information secure?',
      description: 'Payment information is handled securely and is not stored directly by the application.'
    }
]

const registrationItems = [
    {
      name: 'How do I create an account?',
      description: 'Click the registration option, enter your required information, and follow the instructions to create your account.'
    },
    {
      name: 'Do I need an account to place an order?',
      description: 'An account may be required to place an order and manage your orders from your profile.'
    },
    {
      name: 'How do I change my account information?',
      description: 'You can update your account information from your profile settings.'
    },
    {
      name: 'I forgot my password. What should I do?',
      description: 'Use the password recovery option on the login page to reset your password.'
    },
    {
      name: 'How do I delete my account?',
      description: 'You can request account deletion from your account settings or contact support for assistance.'
    }
]



function FaqHero() {
  const scrollRef = useRef({});

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
        <div className="p-8 border-r border-gray-200 overflow-y-auto h-full">
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
              ref={(el) => (scrollRef.current['Order Placed'] = el)}
            >
              Order Placed
            </h2>
            {orderPlacedItems.map((item, index) => (
              <AccordionComponent
                id='Order Placed'
                key={index}
                accordionTitle={item.name}
                accordionQuestion={item.description}
                scrollRef={scrollRef}
              />
            ))}
          </div>
          {/* PaymentsAccirdion */}
          <div>
            <h2
              className="text-2xl text-gray-900 font-medium py-6"
              ref={(el) => (scrollRef.current['Payments'] = el)}
            >
              Payments
            </h2>
             {paymentsItems.map((item, index) => (
              <AccordionComponent
                id='Payments'
                key={index}
                 accordionTitle={item.name}
                accordionQuestion={item.description}
                scrollRef={scrollRef}
              />
            ))}
          </div>
            {/* RegistrationAccordion */}
          <div>
            <h2
              className="text-2xl text-gray-900 font-medium py-6"
              ref={(el) => (scrollRef.current['Registration'] = el)}
            >
              Registration
            </h2>
             {registrationItems.map((item, index) => (
              <AccordionComponent
                id='Registration'
                key={index}
                 accordionTitle={item.name}
                accordionQuestion={item.description}
                scrollRef={scrollRef}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FaqHero;