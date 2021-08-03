import React, { useState, useEffect } from 'react';
import { HomeBodyWrapper, HomeBodyTitle, HomeBodyContent } from './HomeBody.styles';
import Card from '../Card';
import { getVideos } from '../../lib/getVideos';

const HomeBody = () => {
  const [videos, setVideos] = useState([]);

  const setYoutubeVideos = async () => {
    const data = await getVideos();
    setVideos(data.items);
  };

  useEffect(() => {
    setYoutubeVideos();
  }, []);

  const renderVideoItem = (video) => (
    <Card
      key={video.etag}
      title={video.snippet.title}
      description={video.snippet.description}
      bckgImage={video.snippet.thumbnails.medium.url}
    />
  );

  return (
    <HomeBodyWrapper>
      <HomeBodyTitle>Welcome to the Challenge!</HomeBodyTitle>
      <HomeBodyContent>{videos.map(renderVideoItem)}</HomeBodyContent>
    </HomeBodyWrapper>
  );
};

export default HomeBody;
