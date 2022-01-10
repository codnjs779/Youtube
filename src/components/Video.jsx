import React from "react";

function Video({ videoItem }) {
    const baseVideoURL = videoItem.thumbnails.medium;
    // 또다른 방법 함수 인자 자리에 video:{snippet}을 해주면 바로 snippet에 접근 가능함
    return (
        <li className="video_item">
            <div className="videoBox">
                <img src={baseVideoURL.url} width={baseVideoURL.width} height={baseVideoURL.height} className="playVideo" alt="" />
                <div className="videoBox_txt">
                    <div className="playVideo_title">{videoItem.title}</div>
                    <div className="playVideo_channelTitle">{videoItem.channelTitle}</div>
                </div>
            </div>
        </li>
    );
}

export default Video;
