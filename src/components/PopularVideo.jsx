import React, { Component } from "react";
import Video from "./Video";

class PopularVideo extends Component {
    render() {
        this.props.getPopularData();
        return (
            <>
                <div></div>
                <Video />
            </>
        );
    }
}

export default PopularVideo;
