const ChatHistory = () => {
  const chatHistory = [
    { id: 1, title: 'Previous Chat 1', date: '2024-01-20', preview: 'Last message...' },
    { id: 2, title: 'Previous Chat 2', date: '2024-01-19', preview: 'Last message...' },
    // Add more chat history items
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h2 className="text-xl font-semibold mb-4">Chat History</h2>
      <div className="space-y-2">
        {chatHistory.map((chat) => (
          <div
            key={chat.id}
            className="p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
          >
            <h3 className="font-medium">{chat.title}</h3>
            <p className="text-sm text-gray-500">{chat.preview}</p>
            <span className="text-xs text-gray-400">{chat.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChatHistory;
