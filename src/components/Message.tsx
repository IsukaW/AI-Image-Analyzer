import { format } from 'date-fns';

const Message = ({ message }) => {
  const isAi = message.sender === 'ai';

  return (
    <div className={`flex ${isAi ? 'justify-start' : 'justify-end'}`}>
      <div 
        className={`max-w-[80%] rounded-2xl px-6 py-3 ${
          isAi 
            ? 'bg-gray-50 text-gray-800' 
            : 'bg-blue-500 text-white'
        }`}
      >
        <p className="text-lg leading-relaxed">{message.text}</p>
      </div>
    </div>
  );
};

export default Message;
