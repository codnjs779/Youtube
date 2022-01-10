import React, { Component } from "react";
import Video from "./Video";

class PopularVideo extends Component {
    render() {
        const { videoList } = this.props;

        return (
            <>
                <ul className="popularVideo_list">
                    {videoList &&
                        videoList.map((videoItem) => {
                            return <Video key={videoItem.etag} videoItem={videoItem.snippet} />;
                        })}
                </ul>
            </>
        );
    }
}

export default PopularVideo;
