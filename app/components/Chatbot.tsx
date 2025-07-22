'use client';

import { useState } from 'react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;
    setMessages((prev) => [...prev, `${input}`]);

    try {
      const response = await fetch(`http://localhost:8000/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      console.log(data.response);
      setMessages((prev) => [...prev, `${data.response}`]);
    } catch (error) {
      setMessages((prev) => [...prev, '오류']);
      console.error('api요청실패:', error);
    }
    setInput('');
  };

  return (
    <>
      <button
        onClick={toggleChatbot}
        className="bg-amber-600 w-[60px] text-[#fff] h-[60px] z-61 fixed bottom-[100px] right-[50px] rounded-[30px]"
      >
        챗봇
      </button>
      {isOpen && (
        <div className="fixed bottom-[160px] right-[50px] max-w-[400px] h-[500px] bg-[#f5f5f5] border border-gray-300 rounded-[10px] w-full z-60">
          <div className="overflow-auto p-[20px] h-[calc(100%-50px)] scroll-w-[5px]">
            <div className="flex items-center justify-between">
              <h2 className="text-[20px] font-bold">OpenAi 챗봇</h2>

              <button
                onClick={toggleChatbot}
                className="border px-[10px] rounded-[5px] font-bold border-gray-300"
              >
                닫기
              </button>
            </div>
            <div className="mt-4 space-y-2 flex-col flex">
              {messages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-2 rounded text-[13px] border border-gray-300 ${
                    idx % 2 === 0
                      ? 'bg-yellow-100 text-black text-right self-end'
                      : 'bg-white text-black text-left self-start'
                  }`}
                >
                  {msg}
                </div>
              ))}
            </div>
          </div>
          <form
            onSubmit={handleSubmit}
            className="absolute bottom-0 left-0 flex h-[50px] w-full items-center bg-[#f5f5f5] px-[20px] gap-[5px]"
          >
            <input
              className="w-full border-gray-300 rounded"
              type="text"
              placeholder="메세지를 입력하세요"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="btn shrink-0 leading-[38px] border-gray-300 rounded"
            >
              전송
            </button>
          </form>
        </div>
      )}
    </>
  );
}
