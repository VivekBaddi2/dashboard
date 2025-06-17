import React from 'react';

const cardsData = [
  {
    id: 1,
    thumbnail: "/assets/chatbot-thumbnail.png",
    description: 'A powerful LLM-based chatbot that understands and responds to your queries with natural, human-like conversations.',
    title: 'SuperAI ChatBot',
    url: 'https://superai-self.vercel.app/',
  },
  {
    id: 2,
    thumbnail: '/assets/imagen-thumbnail.png',
    description: 'An advanced AI-powered image generator that creates stunning visuals from your text prompts.',
    title: 'SuperAI Imagen',
    url: 'https://superai-imagen.vercel.app/',
  },
  {
    id: 3,
    thumbnail: '/assets/BG-thumbnail.png',
    description: 'A smart background remover tool that instantly isolates subjects and removes backgrounds from images.',
    title: 'SuperAI BG Remover',
    url: 'https://superai-bg-removal.vercel.app/',
  },
  {
    id: 4,
    thumbnail: '/assets/translator-thumbnail.png',
    description: 'An efficient tool that transcribes audio and translates it into multiple languages with high accuracy.',
    title: 'SuperAI sound transcript and translate',
    url: 'https://superai-voice-translator-transcriptor.onrender.com/',
  },
];

const CardsPage = () => {
  return (
    <div className="flex flex-wrap justify-around items-center h-[90vh] p-6">
      {cardsData.map((card) => (
        <div
          key={card.id}
          className="flex flex-col gap-4 w-[300px] h-[450px] rounded-lg p-0 m-4 text-center animated-border cursor-pointer hover:shadow-lg hover:shadow-gray-700 transition-shadow duration-200"
        >
          <div className="card-content flex flex-col h-full p-4">
            <img
              src={card.thumbnail}
              alt={`Thumbnail ${card.id}`}
              className="w-full h-[35%] rounded-md"
            />
            <p className="my-3 text-xl text-gray-600 h-[10%]">{card.title}</p>
            <p className="my-3 text-sm text-gray-700 h-[50%]">{card.description}</p>
            <button
              onClick={() => window.open(card.url, '_blank')}
              className="px-4 py-2 h-[10%] w-[60%] self-center text-sm text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none"
            >
              Go to page
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardsPage;
