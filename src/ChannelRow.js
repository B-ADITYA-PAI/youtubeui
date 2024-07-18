import React from 'react'
import './ChannelRow.css'
import VerifiedIcon from '@mui/icons-material/CheckCircleOutline';
import Avatar from '@mui/material/Avatar';

function ChannelRow({image,channel,verified,subs,noOfVideos,description}) {
  return (
    <div className='channelRow'>
        <Avatar className='channelRow_logo' alt={channel} src={image} />
        <div className="channelRow__text">
            <h4>
                {channel} {verified && <VerifiedIcon/>}
            </h4>
            <p>
                {subs} subscribers.{noOfVideos}videos
            </p>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default ChannelRow


