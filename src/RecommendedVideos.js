import React from 'react';
import './RecommendedVideos.css';
import VideoCard from './VideoCard';

function RecommendedVideos() {
  return (
    <div className='recommendedVideos'>
      <h2>Recommended</h2>
      <div className="recommendedVideos_videos">

        <VideoCard
          image="https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0"
          title="My Mix"
          channel="Kishore Kumar, Lata Mangeshkar, Jaidev"
          views="1.1M views"
          timestamp="1 year ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQdGlXQSR-uhXjghlRAJX1p3OvVsuhwBaRXt4E=s88-c-k-c0x00ffffff-no-rj"
        />

   

        <VideoCard
          image="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_960_720.jpg"
          title="Hotel Owner REFUSES To Accept Hotel is Failing! | Hotel Hell"
          channel="Gordon Ramsay"
          views="1M views"
          timestamp="1 week ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQhN8ZDF7E5ZrX1-PQStW-vcOhr6fyh2Exfpg=s88-c-k-c0x00ffffff-no-rj"
        />

    

        <VideoCard
          image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          title="The Future of Artificial Intelligence"
          channel="Tech World"
          views="2M views"
          timestamp="1 month ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQ3mWz9O9NZRYw68ivd8NJJF0iDbkLg5v8RAqA=s88-c-k-c0x00ffffff-no-rj"
        />

        <VideoCard
          image="https://images.unsplash.com/photo-1551782450-a2132b4ba21d"
          title="How to Make the Perfect Cup of Coffee"
          channel="Coffee Lover"
          views="500K views"
          timestamp="2 days ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLT7A1_5RAj0K6mrH_e4EYvhFA8NnQzjsq7GWL4=s88-c-k-c0x00ffffff-no-rj"
        />

        <VideoCard
          image="https://images.unsplash.com/photo-1593642532973-d31b6557fa68"
          title="Exploring the World of Quantum Computing"
          channel="Quantum Tech"
          views="1M views"
          timestamp="4 months ago"
          channelImage="https://yt3.ggpht.com/ytc/AKedOLQXIM1eVz5QuI1jFOnLfXt-RiGZPHuSO7Q58KU=s88-c-k-c0x00ffffff-no-rj"
        />

        

      </div>
    </div>
  );
}

export default RecommendedVideos;
