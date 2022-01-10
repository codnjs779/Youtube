import React from "react";

function Video({ key, thumbnailURL, title }) {
    return (
        <li className="video_item">
            <div className="videoBox">
                <img src={thumbnailURL.url} width={thumbnailURL.width} height={thumbnailURL.height} className="playVideo" alt="" />
                <div className="playVideo_title">{title}</div>
            </div>
        </li>
    );
}

export default Video;
