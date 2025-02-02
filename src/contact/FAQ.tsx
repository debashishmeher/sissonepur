import React from 'react';
import { HelpCircle, Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "What are the admission requirements?",
    answer: "Our admission process includes an entrance exam, previous academic records review, and an interview. Specific requirements vary by grade level."
  },
  {
    question: "How can I schedule a campus tour?",
    answer: "You can schedule a campus tour by calling our admissions office or filling out the contact form on our website. Tours are available Monday through Friday."
  },
  {
    question: "What are the school hours?",
    answer: "Regular school hours are from 8:00 AM to 3:00 PM, Monday through Friday. After-school activities run until 5:00 PM."
  },
  {
    question: "Is transportation available?",
    answer: "Yes, we provide transportation services for students living within a 10-mile radius of the school. Additional fees may apply."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-2 bg-blue-100 px-3 py-1 rounded-full mb-4">
            <HelpCircle size={16} className="text-primary-600" />
            <span className="text-primary-600 text-sm font-medium">FAQ</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Find quick answers to common questions about our school and admission process
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-gray-900">{faq.question}</span>
                {openIndex === index ? (
                  <Minus size={20} className="text-primary-600" />
                ) : (
                  <Plus size={20} className="text-gray-400" />
                )}
              </button>
              <div
                className={`px-6 overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40 pb-4' : 'max-h-0'
                }`}
              >
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}