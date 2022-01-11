import React, { Component } from "react";
import Video from "./Video";

class PopularVideo extends Component {
    render() {
        const { videoList, onVideoClick } = this.props;
        console.log(`onVideoClick`, onVideoClick);

        return (
            <>
                <ul className="popularVideo_list">
                    {videoList &&
                        videoList.map((videoItem) => {
                            return <Video key={videoItem.etag} baseVideoItem={videoItem} videoItem={videoItem.snippet} onVideoClick={onVideoClick} />;
                        })}
                </ul>
            </>
        );
    }
}

export default PopularVideo;
