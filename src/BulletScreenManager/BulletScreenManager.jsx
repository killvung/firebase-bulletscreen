import React, { useState, createRef } from 'react';
import ReactPlayer from 'react-player'
import './BulletScreenManager.css';

import BarrageCanvas from './BarrageCanvas';
import VideoLinkInput from '../VideoLinkInput/VideoLinkInput';

export default function BulletScreenManager() {
  const videoInputRef = createRef();
  const [barrages, setBarrages] = useState([]);
  const [videoUrl, setVideoUrl] = useState('');
  const [commentsFetched, setCommentsFetched] = useState(false);

  const addBarrage = (barrage) => {
    barrages.push(barrage);
    setBarrages(barrages);
  };

  const removeBarrage = (barrage) => {
    barrages.splice(barrages.lastIndexOf(barrage), 1);
    setBarrages(barrages);
  };

  const handleInputGenerateClick = () => {
    setVideoUrl(videoInputRef.current.inputRef.current.value);

    document.getElementById("VideoPlayer__wrapper").scrollIntoView()
  }

  const renderBarrageCanvas = () => (
    commentsFetched ?
      <BarrageCanvas barrages={barrages} removeBarrage={removeBarrage} addBarrage={addBarrage} /> :
      <div>{''}</div>
  )

  const handleOnProgress = ({ played }) => {
    if (played > 0) {
      setCommentsFetched(true);
    }
  }

  const renderVideo = () => (
    <div id="VideoPlayer__wrapper"><ReactPlayer onProgress={handleOnProgress} width="900px" height="675px" playing url={videoUrl} /></div>
  )

  return (
    <div className="BarrageManager__root">
      <div className="BarrageManager__input">
        <VideoLinkInput ref={videoInputRef} handleInputGenerateClick={handleInputGenerateClick} />
      </div>
      <div className="BarrageManager__wrapper">
        {renderBarrageCanvas()}
        {renderVideo()}
      </div>
    </div>
  );
}
