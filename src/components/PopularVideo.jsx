import React, { Component } from "react";
import SearchBar from "./Search/SearchBar";
import Video from "./Video";

class PopularVideo extends Component {
    render() {
        const { videoList } = this.props;

        return (
            <>
                <SearchBar />
                <ul className="popularVideo_list">
                    {videoList &&
                        videoList.map((videoItem) => {
                            // console.log(`videoItem`, videoItem);
                            console.log(`thumbnails`, videoItem.snippet.thumbnails.medium);
                            return <Video key={videoItem.etag} thumbnailURL={videoItem.snippet.thumbnails.medium} title={videoItem.snippet.title} />;
                        })}
                </ul>
            </>
        );
    }
}

export default PopularVideo;
