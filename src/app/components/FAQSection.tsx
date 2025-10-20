'use client';

const faqs = [
  {
    question: "How do I join the society?",
    answer: "Click the 'Join' button in the header or ask a committee member during an event."
  },
  {
    question: "Who can request hardware support?",
    answer: "All current Aston University students in STEM fields can request hardware help."
  },
  {
    question: "Are events and competitions free?",
    answer: "Most events are free or supported by the university. Some hackathons may have registration fees."
  },
  {
    question: "Can I get my CV reviewed?",
    answer: "Yes – use the Career Support section and upload your CV to get feedback from mentors and industry partners."
  }
];

export default function FAQSection() {
  return (
    <div className="card bg-base-100 rounded-xl p-6 shadow-lg max-w-xl mx-auto mt-10">
      <h2 className="card-title text-primary mb-6">Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <details key={idx} className="faq-item mb-4">
          <summary className="cursor-pointer text-secondary font-semibold text-lg hover:text-primary transition-colors">
            {faq.question}
          </summary>
          <div className="mt-3 text-base-content text-base pl-2">
            {faq.answer}
          </div>
        </details>
      ))}
    </div>
  );
}

