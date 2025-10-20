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
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqs.map((faq, idx) => (
        <details key={idx} className="faq-item">
          <summary>{faq.question}</summary>
          <div>{faq.answer}</div>
        </details>
      ))}
    </div>
  );
}

