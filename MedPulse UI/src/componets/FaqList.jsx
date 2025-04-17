import { ArrowLeft } from 'lucide-react';

const FaqList = () => {
  const faqs = [
    "How can I contact you?",
    "What is the purpose of this service?",
    "What is the purpose of this service?"
  ];

  return (
    <div className="space-y-4">
      {faqs.map((question, index) => (
        <div className="bg-white rounded border p-4 flex justify-between items-center" key={index}>
          <h4 className="font-semibold">{index + 2}. {question}</h4>
          <ArrowLeft className="text-blue-600" />
        </div>
      ))}
    </div>
  );
}

export default FaqList
