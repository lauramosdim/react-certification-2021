import React, { useState, useEffect } from 'react';
import { HomeBodyWrapper, HomeBodyTitle, HomeBodyContent } from './HomeBody.styles';
import Card from '../Card';

const HomeBody = () => {
  const [videos, setVideos] = useState([]);
  const VIDEOS_URL =
    'https://gist.githubusercontent.com/jparciga/1d4dd34fb06ba74237f8966e2e777ff5/raw/f3af25f1505deb67e2cc9ee625a633f24d8983ff/youtube-videos-mock.json';

  const getVideos = async () => {
    const response = await fetch(VIDEOS_URL);
    const data = await response.json();
    setVideos(data.items);
  };

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <HomeBodyWrapper>
      <HomeBodyTitle>Welcome to the Challenge!</HomeBodyTitle>
      <HomeBodyContent>
        {videos.map((video) => (
          <Card
            key={video.etag}
            title={video.snippet.title}
            description={video.snippet.description}
            bckgImage={video.snippet.thumbnails.medium.url}
          />
        ))}
      </HomeBodyContent>
    </HomeBodyWrapper>
  );
};

export default HomeBody;
