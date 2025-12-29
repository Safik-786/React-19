// We have 2 approach 

// 1. using the id
// 2. using the separate state each Node have separate state








import React, { useState } from "react";

// Separate AccordionItem component with its own state
function AccordionItem({ faq }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 text-left"
      >
        <span className="font-semibold text-gray-800">{faq.question}</span>
        <span className="text-xl font-bold text-gray-600 ml-4">
          {isOpen ? "−" : "+"}
        </span>
      </button>

      {/* Content - only shown when open */}
      {isOpen && (
        <div className="p-5 bg-white border-t">
          <p className="text-gray-600">{faq.answer}</p>
        </div>
      )}
    </div>
  );
}

// Main FAQ Component
function FAQAccordion() {
  const faqData = [
    {
      id: 1,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for all unused items in their original packaging. Returns are free for defective products."
    },
    {
      id: 2,
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. Express shipping is available for delivery in 2-3 business days for an additional fee."
    },
    {
      id: 3,
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries. International shipping times vary by location, typically taking 10-21 business days."
    },
    {
      id: 4,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay."
    }
  ];

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Frequently Asked Questions
      </h2>
      
      <div className="space-y-1">
        {faqData.map((faq) => (
          <AccordionItem key={faq.id} faq={faq} />
        ))}
      </div>
    </div>
  );
}

export default FAQAccordion;




















// import React, { useState } from "react";
// import { accordionData } from "./accordianData";

// function Accordian() {
//   const [openId, setOpenId] = useState(null);

//   const toggleAccordion = (id) => {
//     setOpenId((prev) => (prev === id ? null : id));
//   };

//   return (
//     <div className="max-w-xl mx-auto space-y-3">
//       {accordionData.map((item) => (
//         <div
//           key={item.id}
//           className="border rounded-md overflow-hidden"
//         >
//           {/* Header */}
//           <button
//             onClick={() => toggleAccordion(item.id)}
//             className="w-full flex justify-between items-center px-4 py-3 font-medium bg-gray-100 hover:bg-gray-200"
//           >
//             <span>{item.title}</span>
//             <span>{openId === item.id ? "−" : "+"}</span>
//           </button>

//           {/* Content */}
//           {openId === item.id && (
//             <div className="px-4 py-3 bg-white text-sm">
//               <p className="mb-2">{item.content.description}</p>
//               <ul className="list-disc pl-5 space-y-1">
//                 {item.content.points.map((point, index) => (
//                   <li key={index}>{point}</li>
//                 ))}
//               </ul>
//             </div>
//           )}
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Accordian;


