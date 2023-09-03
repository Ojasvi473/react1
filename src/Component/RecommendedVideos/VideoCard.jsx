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

      title: "Games of Throne¬Every dragon scene¬Season 1-8",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

      likes: 1500,

      views: "25K",

      channelName: "Sample Channel 1",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 1,

      title: "New South Movie Hindi Dubbed",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

      likes: 1500,

      views: "25K",

      channelName: "Sample Channel 1",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 3,

      title: "The Gen Z army fighting Myanmar's military dictator",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRGOus73Uwr1wTdhuM2HchsGMRp9sAro7fA&usqp=CAU",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 4,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "EBS - Live Doubt Session",

      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrucIT7cQrDexai8okl8ySvwkC6P8j0f_8Qg&usqp=CAU",

      likes: 1200,

      views: "25K",

      channelName: "Complete 11th PHYSICS in 1 Shot",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 1,

      title: "New South Movie Hindi Dubbed",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

      likes: 1500,

      views: "25K",

      channelName: "Sample Channel 1",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },

    {
      id: 5,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "The Gen Z army fighting Myanmar's military dictator",

      thumbnailUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

      likes: 1200,

      views: "25K",

      channelName: "Complete 11th PHYSICS in 1 Shot",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 6,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "Complete 11th PHYSICS in 1 Shot",

      thumbnailUrl:
        "https://medicaldialogues.in/h-upload/2022/10/11/187621-neet-ug-2.webp",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 7,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "Complete 11th PHYSICS in 1 Shot",

      thumbnailUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 1,

      title: "The Gen Z army fighting Myanmar's military dictator",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

      likes: 1500,

      views: "25K",

      channelName: "Sample Channel 1",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },

    {
      id: 2,

      title: "Complete 11th PHYSICS in 1 Shot",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl: "https://i.ytimg.com/vi/Vs4bIFD9IVQ/maxresdefault.jpg",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 3,

      title: "The Gen Z army fighting Myanmar's military dictator",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRGOus73Uwr1wTdhuM2HchsGMRp9sAro7fA&usqp=CAU",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 4,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "EBS - Live Doubt Session",

      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrucIT7cQrDexai8okl8ySvwkC6P8j0f_8Qg&usqp=CAU",

      likes: 1200,

      views: "25K",

      channelName: "The Gen Z army fighting Myanmar's military dictator",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 6,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "Example Video 2",

      thumbnailUrl:
        "https://medicaldialogues.in/h-upload/2022/10/11/187621-neet-ug-2.webp",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 1,

      title: "Complete 11th PHYSICS in 1 Shot",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

      likes: 1500,

      views: "25K",

      channelName: "Sample Channel 1",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },

    {
      id: 2,

      title: "New South Movie Hindi Dubbed",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl: "https://i.ytimg.com/vi/Vs4bIFD9IVQ/maxresdefault.jpg",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 3,

      title: "EBS - Live Doubt Session",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxRGOus73Uwr1wTdhuM2HchsGMRp9sAro7fA&usqp=CAU",

      likes: 1200,

      views: "25K",

      channelName: "New South Movie Hindi Dubbed",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 4,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "EBS - Live Doubt Session",

      thumbnailUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrucIT7cQrDexai8okl8ySvwkC6P8j0f_8Qg&usqp=CAU",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 5,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "Complete 11th PHYSICS in 1 Shot",

      thumbnailUrl:
        "https://cdn.akamai.steamstatic.com/steam/apps/1105420/capsule_616x353.jpg?t=1667532623",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 6,
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      title: "Complete 11th PHYSICS in 1 Shot",

      thumbnailUrl:
        "https://medicaldialogues.in/h-upload/2022/10/11/187621-neet-ug-2.webp",

      likes: 1200,

      views: "25K",

      channelName: "Sample Channel 2",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
    },
    {
      id: 2,

      title: "New South Movie Hindi Dubbed",
      src: "https://harmony.videvo.net/videvo_files/video/premium/video0007/large_watermarked/black_headz_spin4k08_preview.mp4",
      thumbnailUrl: "https://i.ytimg.com/vi/Vs4bIFD9IVQ/maxresdefault.jpg",

      likes: 1200,

      views: "25K",

      channelName: "Complete 11th PHYSICS in 1 Shot",

      channelLogoUrl: "https://i.ytimg.com/vi/TZE9gVF1QbA/maxresdefault.jpg",
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
                    style={{ width: "100%" }}
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
