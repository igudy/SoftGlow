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
    <>
      <section className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center mb-3">
          Questions? We Have Answers.
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Explore our FAQ section for quick answers to common inquiries about
          our services, appointments, and more. Your beauty journey begins here.
        </p>

        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="border border-b-[10px] border-gray-900 bg-[#F6F1EB] rounded-xl"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between px-4 py-4 text-left"
              >
                <span className="font-medium">{item.question}</span>
                {openIndex === index ? (
                  <FiMinus size={18} />
                ) : (
                  <FiPlus size={18} />
                )}
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600">{item.answer}</div>
              )}
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Questions;
