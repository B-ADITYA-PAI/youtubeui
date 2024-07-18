import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import './ChannelRow.css'
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
  return (
    <div className='searchPage'>
        <div className="searchPage__filter">
            <TuneOutlinedIcon />
            <h2>FILTER</h2>
        </div>
        <hr />
        <ChannelRow
            image="https://yt3.ggpht.com/ytc/AIdro_kotL-OQVXsay2vKRujBvNWcY47UZUwC-axNozc8Mzdutk=s88-c-k-c0x00ffffff-no-rj"
            channel="Clever Programmer"
            verified
            subs="659k"
            noOfVideos={382}
            description="In this channel you will be learning many skills to conquer front end development in javascript subscribe to the channel and dont forget to press the bell icon"
        />
        <hr />
        <VideoRow
            views="1.4M"
            subs="659k"
            description="Lets learn how to code in javasript yey !become an expert in javascrip within no time"
            channel="Clever programmer"
            timestamp="4 hours ago"
            title="Lets create a project on React js"
            image="https://via.placeholder.com/320x180.png?text=React+Project"
        />
    </div>
  )
}

export default SearchPage;

