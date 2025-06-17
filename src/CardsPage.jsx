import React from 'react';

const cardsData = [
  {
    id: 1,
    thumbnail: "/assets/chatbot-thumbnail.png",
    description: 'This is the description for card 1.',
    title: 'SuperAI ChatBot',
    url: 'https://example.com/page1',
  },
  {
    id: 2,
    thumbnail: '/assets/imagen-thumbnail.png',
    description: 'This is the description for card 2.',
    title: 'SuperAI Imagen',
    url: 'https://example.com/page2',
  },
  {
    id: 3,
    thumbnail: '/assets/BG-thumbnail.png',
    description: 'This is the description for card 3.',
    title: 'SuperAI BG Remover',
    url: 'https://example.com/page3',
  },
  {
    id: 4,
    thumbnail: '/assets/translator-thumbnail.png',
    description: 'This is the description for card 4.',
    title: 'SuperAI sound transcript and translate',
    url: 'https://example.com/page4',
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
