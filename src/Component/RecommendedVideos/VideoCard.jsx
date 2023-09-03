import React, { useState } from "react";
import { Avatar } from "@mui/material";
import { DefaultPlayer as Video } from "react-html5video";
import "react-html5video/dist/styles.css";
import "./VideoCard.css";
const VideoCard = () => {
  const [model, setModel] = useState(false);
  const videos = [
    {
      id: 1,
      title: "Adventure in the Wilderness",
      thumbnailUrl: "https://picsum.photos/200/300",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1500,
      views: 25000,
      channelName: "Nature Explorers",
      channelLogoUrl: "https://picsum.photos/50/50",
    },
    {
      id: 2,
      title: "Cooking Masterclass: Italian Cuisine",
      thumbnailUrl: "https://picsum.photos/200/301",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2000,
      views: 30000,
      channelName: "Culinary Delights",
      channelLogoUrl: "https://picsum.photos/51/51",
    },
    {
      id: 3,
      title: "Historical Wonders: Ancient Rome",
      thumbnailUrl: "https://picsum.photos/200/302",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1800,
      views: 27000,
      channelName: "History Unearthed",
      channelLogoUrl: "https://picsum.photos/52/52",
    },
    {
      id: 4,
      title: "Space Exploration: Journey to the Stars",
      thumbnailUrl: "https://picsum.photos/200/303",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2200,
      views: 32000,
      channelName: "Cosmic Voyages",
      channelLogoUrl: "https://picsum.photos/53/53",
    },
    {
      id: 5,
      title: "Artistic Expressions: Abstract Painting",
      thumbnailUrl: "https://picsum.photos/200/304",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1600,
      views: 28000,
      channelName: "Artistic Creations",
      channelLogoUrl: "https://picsum.photos/54/54",
    },
    {
      id: 6,
      title: "Fitness and Wellness: Yoga for Beginners",
      thumbnailUrl: "https://picsum.photos/200/305",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1900,
      views: 29000,
      channelName: "Healthy Living",
      channelLogoUrl: "https://picsum.photos/55/55",
    },
    {
      id: 7,
      title: "Travel Diaries: Exploring Southeast Asia",
      thumbnailUrl: "https://picsum.photos/200/306",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2100,
      views: 31000,
      channelName: "Wanderlust Adventures",
      channelLogoUrl: "https://picsum.photos/56/56",
    },
    {
      id: 8,
      title: "Tech Talk: The Future of Artificial Intelligence",
      thumbnailUrl: "https://picsum.photos/200/307",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1700,
      views: 26000,
      channelName: "Tech Insights",
      channelLogoUrl: "https://picsum.photos/57/57",
    },
    {
      id: 9,
      title: "Healthy Recipes: Nutritious Smoothies",
      thumbnailUrl: "https://picsum.photos/200/308",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2400,
      views: 33000,
      channelName: "Healthy Eats",
      channelLogoUrl: "https://picsum.photos/58/58",
    },
    {
      id: 10,
      title: "Gaming Unleashed: Fortnite Championships",
      thumbnailUrl: "https://picsum.photos/200/309",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2000,
      views: 29000,
      channelName: "Game Masters",
      channelLogoUrl: "https://picsum.photos/59/59",
    },
    {
      id: 11,
      title: "Exploring Wildlife: Safari Adventures",
      thumbnailUrl: "https://picsum.photos/200/310",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1800,
      views: 27000,
      channelName: "Wildlife Wonders",
      channelLogoUrl: "https://picsum.photos/60/60",
    },
    {
      id: 12,
      title: "Science Explained: The Human Brain",
      thumbnailUrl: "https://picsum.photos/200/311",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2500,
      views: 35000,
      channelName: "Science Enthusiasts",
      channelLogoUrl: "https://picsum.photos/61/61",
    },
    {
      id: 13,
      title: "Thrilling Adventures: Mountain Climbing",
      thumbnailUrl: "https://picsum.photos/200/312",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2200,
      views: 32000,
      channelName: "Adventure Seekers",
      channelLogoUrl: "https://picsum.photos/62/62",
    },
    {
      id: 14,
      title: "Creative Photography: Capturing Moments",
      thumbnailUrl: "https://picsum.photos/200/313",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1600,
      views: 28000,
      channelName: "Photography Enthusiasts",
      channelLogoUrl: "https://picsum.photos/63/63",
    },
    {
      id: 15,
      title: "Mindful Living: Meditation for Inner Peace",
      thumbnailUrl: "https://picsum.photos/200/314",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1900,
      views: 29000,
      channelName: "Mindfulness Moments",
      channelLogoUrl: "https://picsum.photos/64/64",
    },
    {
      id: 16,
      title: "Tech Insights: The Future of Quantum Computing",
      thumbnailUrl: "https://picsum.photos/200/315",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2100,
      views: 31000,
      channelName: "Quantum Tech Explorers",
      channelLogoUrl: "https://picsum.photos/65/65",
    },
    {
      id: 17,
      title: "Travel Diaries: European Adventures",
      thumbnailUrl: "https://picsum.photos/200/316",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1700,
      views: 26000,
      channelName: "European Explorers",
      channelLogoUrl: "https://picsum.photos/66/66",
    },
    {
      id: 18,
      title: "Healthy Recipes: Plant-Based Cooking",
      thumbnailUrl: "https://picsum.photos/200/317",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2400,
      views: 33000,
      channelName: "Plant-Based Cuisine",
      channelLogoUrl: "https://picsum.photos/67/67",
    },
    {
      id: 19,
      title: "Gaming Unleashed: Esports Championships",
      thumbnailUrl: "https://picsum.photos/200/318",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2000,
      views: 29000,
      channelName: "Esports Titans",
      channelLogoUrl: "https://picsum.photos/68/68",
    },
    {
      id: 20,
      title: "History Revisited: The Renaissance Era",
      thumbnailUrl: "https://picsum.photos/200/319",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1800,
      views: 27000,
      channelName: "Renaissance Chronicles",
      channelLogoUrl: "https://picsum.photos/69/69",
    },
  ];

  // const videos = [
  //   {
  //     id: 1,

  //     title: "Games of Throne¬Every dragon scene¬Season 1-8",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl:
  //       "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

  //     likes: 1500,

  //     views: "25K",

  //     channelName: "Nature Explorers",
  //     channelLogoUrl: "https://picsum.photos/50/50",
  //   },
  //   {
  //     id: 2,

  //     title: "New South Movie Hindi Dubbed",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl:
  //       "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

  //     likes: 1500,

  //     views: "25K",

  //     channelName: " Ancient Rome",
  //     channelLogoUrl: "https://picsum.photos/69/69",
  //   },
  //   {
  //     id: 3,

  //     title: "The Gen Z army fighting Myanmar's military dictator",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRGOus73Uwr1wTdhuM2HchsGMRp9sAro7fA&usqp=CAU",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Esports Titans",
  //     channelLogoUrl: "https://picsum.photos/68/68",
  //   },
  //   {
  //     id: 4,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "EBS - Live Doubt Session",

  //     thumbnailUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrucIT7cQrDexai8okl8ySvwkC6P8j0f_8Qg&usqp=CAU",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Plant-Based Cuisine",
  //     channelLogoUrl: "https://picsum.photos/67/67",
  //   },
  //   {
  //     id: 5,

  //     title: "New South Movie Hindi Dubbed",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl:
  //       "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

  //     likes: 1500,

  //     views: "25K",

  //     channelName: "Renaissance Chronicles",
  //     channelLogoUrl: "https://picsum.photos/69/69",
  //   },

  //   {
  //     id: 6,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "The Gen Z army fighting Myanmar's military dictator",

  //     thumbnailUrl:
  //       "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "European Explorers",
  //     channelLogoUrl: "https://picsum.photos/66/66",
  //   },
  //   {
  //     id: 7,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "Complete 11th PHYSICS in 1 Shot",

  //     thumbnailUrl:
  //       "https://medicaldialogues.in/h-upload/2022/10/11/187621-neet-ug-2.webp",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Quantum Tech Explorers",
  //     channelLogoUrl: "https://picsum.photos/65/65",
  //   },
  //   {
  //     id: 8,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "Complete 11th PHYSICS in 1 Shot",

  //     thumbnailUrl:
  //       "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Photography Enthusiasts",
  //     channelLogoUrl: "https://picsum.photos/63/63",
  //   },
  //   {
  //     id: 9,

  //     title: "The Gen Z army fighting Myanmar's military dictator",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl:
  //       "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

  //     likes: 1500,

  //     views: "25K",

  //     channelName: "Mindfulness Moments",
  //     channelLogoUrl: "https://picsum.photos/64/64",
  //   },

  //   {
  //     id: 10,

  //     title: "Complete 11th PHYSICS in 1 Shot",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl: "https://i.ytimg.com/vi/Vs4bIFD9IVQ/maxresdefault.jpg",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Adventure Seekers",
  //     channelLogoUrl: "https://picsum.photos/62/62",
  //   },
  //   {
  //     id: 11,

  //     title: "The Gen Z army fighting Myanmar's military dictator",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRGOus73Uwr1wTdhuM2HchsGMRp9sAro7fA&usqp=CAU",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Science Enthusiasts",
  //     channelLogoUrl: "https://picsum.photos/61/61",
  //   },
  //   {
  //     id: 12,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "EBS - Live Doubt Session",

  //     thumbnailUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrucIT7cQrDexai8okl8ySvwkC6P8j0f_8Qg&usqp=CAU",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Wildlife Wonders",
  //     channelLogoUrl: "https://picsum.photos/60/60",
  //   },
  //   {
  //     id: 13,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "Example Video 2",

  //     thumbnailUrl:
  //       "https://medicaldialogues.in/h-upload/2022/10/11/187621-neet-ug-2.webp",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Game Masters",
  //     channelLogoUrl: "https://picsum.photos/59/59",
  //   },
  //   {
  //     id: 14,

  //     title: "Complete 11th PHYSICS in 1 Shot",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl:
  //       "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

  //     likes: 1500,

  //     views: "25K",

  //     channelName: "Healthy Eats",
  //     channelLogoUrl: "https://picsum.photos/58/58",
  //   },

  //   {
  //     id: 15,

  //     title: "New South Movie Hindi Dubbed",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl: "https://i.ytimg.com/vi/Vs4bIFD9IVQ/maxresdefault.jpg",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Tech Insights",
  //     channelLogoUrl: "https://picsum.photos/57/57",
  //   },
  //   {
  //     id: 16,

  //     title: "EBS - Live Doubt Session",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRGOus73Uwr1wTdhuM2HchsGMRp9sAro7fA&usqp=CAU",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Wanderlust Adventures",
  //     channelLogoUrl: "https://picsum.photos/56/56",
  //   },
  //   {
  //     id: 17,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "EBS - Live Doubt Session",

  //     thumbnailUrl:
  //       "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrucIT7cQrDexai8okl8ySvwkC6P8j0f_8Qg&usqp=CAU",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Healthy Living",
  //     channelLogoUrl: "https://picsum.photos/55/55",
  //   },
  //   {
  //     id: 18,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "Complete 11th PHYSICS in 1 Shot",

  //     thumbnailUrl:
  //       "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Artistic Creations",
  //     channelLogoUrl: "https://picsum.photos/54/54",
  //   },
  //   {
  //     id: 19,
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     title: "Complete 11th PHYSICS in 1 Shot",

  //     thumbnailUrl:
  //       "https://medicaldialogues.in/h-upload/2022/10/11/187621-neet-ug-2.webp",

  //     likes: 1200,

  //     views: "25K",

  //     channelName: "Cosmic Voyages",
  //     channelLogoUrl: "https://picsum.photos/53/53",
  //   },
  //   {
  //     id: 20,
  //     title: "New South Movie Hindi Dubbed",
  //     src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
  //     thumbnailUrl: "https://i.ytimg.com/vi/Vs4bIFD9IVQ/maxresdefault.jpg",
  //     likes: 1200,
  //     views: "25K",
  //     channelName: "History Unearthed",
  //     channelLogoUrl: "https://picsum.photos/52/52",
  //   },
  // ];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>YOUTUBE GALLERY</h1>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: " wrap",
            width: "90%",
            margin: "auto",
          }}
        >
          {videos.map((data) => {
            return (
              <div className="videoCard" key={data.id}>
                <div className="VideoCard-img">
                  <Video
                    style={{ width: "366px", height: "205px" }}
                    autoPlay={model}
                    controls={[
                      "PlayPause",
                      "Seek",
                      "Time",
                      "Volume",
                      "FullSreen",
                    ]}
                    poster={data.thumbnailUrl}
                  >
                    <source src={data.src} type="video/mp4" />
                  </Video>
                </div>
                <div className="videoCard-info">
                  <Avatar
                    className="videoCard-avatar"
                    alt={data.channel}
                    src={data.channelLogoUrl}
                  />
                  <div className="video-text">
                    <h4>{data.title}</h4>
                    <p>{data.channelName}</p>
                    <p>
                      {data.views} views. {data.likes}likes
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default VideoCard;
