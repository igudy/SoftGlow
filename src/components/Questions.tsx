import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you offer at LuxeBrows?",
    answer:
      "We offer a wide range of beauty services including brow sculpting, waxing, tinting, and lash extensions.",
  },
  {
    question: "How can I schedule an appointment?",
    answer:
      "You can book directly on our website or call our customer support line to schedule an appointment.",
  },
  {
    question: "Do you offer consultations before treatments?",
    answer:
      "Yes – all new consultations access your specific needs and recommend personalized services and skincare routines.",
  },
  {
    question: "Are your services safe and suitable for all skin types?",
    answer:
      "Absolutely. Our treatments are designed for all skin types and our specialists tailor products to your needs.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We require at least 24-hours notice for appointment cancellations to avoid a cancellation fee.",
  },
];

const Questions = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-2xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3">
          Questions? We Have Answers.
        </h2>
        <p className="text-sm sm:text-base text-gray-600 max-w-md mx-auto">
          Explore our FAQ section for quick answers to common inquiries about
          our services, appointments, and more. Your beauty journey begins here.
        </p>
      </div>

      <div className="space-y-3 sm:space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="border border-b-[6px] sm:border-b-[10px] border-gray-900 bg-[#F6F1EB] rounded-lg sm:rounded-xl overflow-hidden"
          >
            <button
              onClick={() => toggle(index)}
              className="w-full flex items-center justify-between px-4 py-3 sm:py-4 text-left hover:bg-[#EBD5C8] transition-colors duration-200"
              aria-expanded={openIndex === index}
              aria-controls={`faq-${index}`}
            >
              <span className="font-medium text-sm sm:text-base text-left">
                {item.question}
              </span>
              {openIndex === index ? (
                <FiMinus className="text-gray-700 flex-shrink-0" size={18} />
              ) : (
                <FiPlus className="text-gray-700 flex-shrink-0" size={18} />
              )}
            </button>

            <div
              id={`faq-${index}`}
              className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-40 pb-4" : "max-h-0"
              }`}
            >
              <p className="text-sm sm:text-base text-gray-600">
                {item.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Questions;
