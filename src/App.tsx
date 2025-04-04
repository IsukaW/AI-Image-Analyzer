import Header from './components/Header';
import ChatInterface from './components/ChatInterface';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Header />
      <main className="w-full h-[calc(100vh-4rem)]">
        <div className="h-full">
          <ChatInterface />
        </div>
      </main>
    </div>
  );
}

export default App;
