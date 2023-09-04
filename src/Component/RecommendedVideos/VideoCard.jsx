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
      thumbnailUrl:
        "https://thumbs.dreamstime.com/b/beautiful-autumn-scenery-park-beautiful-autumn-scenery-park-outdoor-photography-sunrise-light-101482086.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1500,
      views: 25000,
      channelName: "Nature Explorers",
      channelLogoUrl: "https://picsum.photos/50/50",
    },
    {
      id: 2,
      title: "Cooking Masterclass: Italian Cuisine",
      thumbnailUrl:
        "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",

      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2000,
      views: 30000,
      channelName: "Culinary Delights",
      channelLogoUrl: "https://picsum.photos/51/51",
    },
    {
      id: 3,
      title: "Historical Wonders: Ancient Rome",
      thumbnailUrl:
        "https://e0.pxfuel.com/wallpapers/309/348/desktop-wallpaper-beautiful-natural-sceneries-high-definition-beautiful-scenery.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1800,
      views: 27000,
      channelName: "History Unearthed",
      channelLogoUrl: "https://picsum.photos/52/52",
    },
    {
      id: 4,
      title: "Space Exploration: Journey to the Stars",
      thumbnailUrl:
        "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",

      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2200,
      views: 32000,
      channelName: "Cosmic Voyages",
      channelLogoUrl: "https://picsum.photos/53/53",
    },
    {
      id: 5,
      title: "Artistic Expressions: Abstract Painting",
      thumbnailUrl:
        "https://wallpapers.com/images/hd/nature-farm-scenery-4nho1u78dzvt1meo.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1600,
      views: 28000,
      channelName: "Artistic Creations",
      channelLogoUrl: "https://picsum.photos/54/54",
    },
    {
      id: 6,
      title: "Fitness and Wellness: Yoga for Beginners",
      thumbnailUrl:
        "https://static.vecteezy.com/system/resources/thumbnails/001/226/132/small/time-lapse-of-clouds-at-lake-during-dawn.jpeg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1900,
      views: 29000,
      channelName: "Healthy Living",
      channelLogoUrl: "https://picsum.photos/55/55",
    },
    {
      id: 7,
      title: "Travel Diaries: Exploring Southeast Asia",
      thumbnailUrl:
        "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2100,
      views: 31000,
      channelName: "Wanderlust Adventures",
      channelLogoUrl: "https://picsum.photos/56/56",
    },
    {
      id: 8,
      title: "Tech Talk: The Future of Artificial Intelligence",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv2BqgiAtuyhhmFKsxCAksynpszFi-t_9wvG5R4I2cgSTnJqkAUmGf3pERZeg4qO6yWvw&usqp=CAU",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1700,
      views: 26000,
      channelName: "Tech Insights",
      channelLogoUrl: "https://picsum.photos/57/57",
    },
    {
      id: 9,
      title: "Healthy Recipes: Nutritious Smoothies",
      thumbnailUrl:
        "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2400,
      views: 33000,
      channelName: "Healthy Eats",
      channelLogoUrl: "https://picsum.photos/58/58",
    },
    {
      id: 10,
      title: "Gaming Unleashed: Fortnite Championships",
      thumbnailUrl:
        "https://wallpapers.com/images/hd/nature-farm-scenery-4nho1u78dzvt1meo.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2000,
      views: 29000,
      channelName: "Game Masters",
      channelLogoUrl: "https://picsum.photos/59/59",
    },
    {
      id: 11,
      title: "Exploring Wildlife: Safari Adventures",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYLVyVsg2y72pPmzolkPdLFVNM38yaZ8T1BQ&usqp=CAU",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1800,
      views: 27000,
      channelName: "Wildlife Wonders",
      channelLogoUrl: "https://picsum.photos/60/60",
    },
    {
      id: 12,
      title: "Science Explained: The Human Brain",
      thumbnailUrl:
        "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",

      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2500,
      views: 35000,
      channelName: "Science Enthusiasts",
      channelLogoUrl: "https://picsum.photos/61/61",
    },
    {
      id: 13,
      title: "Thrilling Adventures: Mountain Climbing",
      thumbnailUrl:
        "https://previews.123rf.com/images/thiradech/thiradech1610/thiradech161000041/65798280-alphabet-holiday-clock-and-blue-blurred-background-scenery-beautiful.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2200,
      views: 32000,
      channelName: "Adventure Seekers",
      channelLogoUrl: "https://picsum.photos/62/62",
    },
    {
      id: 14,
      title: "Creative Photography: Capturing Moments",
      thumbnailUrl:
        "https://wallpapers.com/images/hd/nature-farm-scenery-4nho1u78dzvt1meo.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1600,
      views: 28000,
      channelName: "Photography Enthusiasts",
      channelLogoUrl: "https://picsum.photos/63/63",
    },
    {
      id: 15,
      title: "Mindful Living: Meditation for Inner Peace",
      thumbnailUrl:
        "https://img.freepik.com/premium-vector/sunset-scenery-with-river-forest-reflection-water-colorful-sky_104785-1636.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1900,
      views: 29000,
      channelName: "Mindfulness Moments",
      channelLogoUrl: "https://picsum.photos/64/64",
    },
    {
      id: 16,
      title: "Tech Insights: The Future of Quantum Computing",
      thumbnailUrl:
        "https://img.freepik.com/premium-photo/silhouette-trees-against-sunset-sky-illustration-style_625492-18312.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2100,
      views: 31000,
      channelName: "Quantum Tech Explorers",
      channelLogoUrl: "https://picsum.photos/65/65",
    },
    {
      id: 17,
      title: "Travel Diaries: European Adventures",
      thumbnailUrl:
        "https://t4.ftcdn.net/jpg/03/80/74/79/360_F_380747975_sS1hCVB0qPqFCWBMZ3qJ5xTqH6rtaDBI.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1700,
      views: 26000,
      channelName: "European Explorers",
      channelLogoUrl: "https://picsum.photos/66/66",
    },
    {
      id: 18,
      title: "Healthy Recipes: Plant-Based Cooking",
      thumbnailUrl:
        "https://wallpapers.com/images/featured/beautiful-scenery-wnxju2647uqrcccv.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2400,
      views: 33000,
      channelName: "Plant-Based Cuisine",
      channelLogoUrl: "https://picsum.photos/67/67",
    },
    {
      id: 19,
      title: "Gaming Unleashed: Esports Championships",
      thumbnailUrl:
        "https://t3.ftcdn.net/jpg/04/39/66/32/360_F_439663294_VLagwhcKP2TQAcu21Mqnmrdq2HcnImme.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 2000,
      views: 29000,
      channelName: "Esports Titans",
      channelLogoUrl: "https://picsum.photos/68/68",
    },
    {
      id: 20,
      title: "History Revisited: The Renaissance Era",
      thumbnailUrl:
        "https://e0.pxfuel.com/wallpapers/309/348/desktop-wallpaper-beautiful-natural-sceneries-high-definition-beautiful-scenery.jpg",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",

      likes: 1800,
      views: 27000,
      channelName: "Renaissance Chronicles",
      channelLogoUrl: "https://picsum.photos/69/69",
    },
  ];

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
