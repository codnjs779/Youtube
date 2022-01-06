import React, { Component } from "react";

class Video extends Component {
    render() {
        return (
            <div className="video">
                <div className="videoBox">
                    <div className="playVideo">비디오</div>
                    <div className="playVideo_title">비디오이름</div>
                    <div className="playVideo_creator">영상제작자</div>
                </div>
            </div>
        );
    }
}

export default Video;
