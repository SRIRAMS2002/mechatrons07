import React from "react";

const YouTubeCard = ({ title, thumbnail, channel, link }) => {
  return (
    <div className="w-80">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="relative rounded-lg overflow-hidden shadow-lg bg-white">
          <img className="w-full h-40 object-cover" src={thumbnail} alt={title} />
          <div className="p-4">
            <h2 className="font-bold text-xl mb-2">{title}</h2>
            <p className="text-gray-700 text-base mb-2">{channel}</p>
          </div>
          <div className="absolute top-14 left-28">
            <img src="/youtube.svg" alt="" className="h-16 w-16" />
          </div>
        </div>
      </a>
    </div>
  );
};

const YouTubeCardSection = () => {
  const videoData = [
    {
      title: "Automatic Headlight Dimmer",
      thumbnail: "/Card1.webp",
      channel: "Team Mechatrons",
      link: "https://www.youtube.com/watch?v=XpvkIRvNJ3w&list=PLUdl9f4veCssUyE3f14yC5sKLsLffYvuS&index=4",
    },
    {
      title: "SIEP E-BIKE CHALLENGE 2023",
      thumbnail: "/card2.webp",
      channel: "Team Mechatrons",
      link: "https://www.youtube.com/watch?v=7sOSkvF0B7s&list=PLaDvXEa2eD20PTxdQAkpwKpA5Ymg4oAgz&index=11",
    },
    {
      title: "One Year of Mechatrons Achievement",
      thumbnail: "/Card4.webp",
      channel: "Team Mechatrons",
      link: "https://www.youtube.com/watch?v=5OVHVbmw73w",
    },
    {
      title: "Mechatrons07 E-Bike",
      thumbnail: "/card5.webp",
      channel: "Team Mechatrons",
      link: "https://www.youtube.com/watch?v=68Jbv-tlzXY",
    },
    // Add more video data as needed
  ];

  return (
    <div className="flex flex-wrap max-w-7xl mx-auto  mt-10 gap-4">
       {videoData.map((video, index) => (
          <div key={index}>
            <YouTubeCard {...video} />
          </div>
        ))}
        <div className="swiper-pagination"></div>
    </div>
  );
};

export default YouTubeCardSection;
