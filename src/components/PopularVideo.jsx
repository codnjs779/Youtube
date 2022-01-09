import React, { Component } from "react";
import Video from "./Video";

class PopularVideo extends Component {
    componentDidMount = () => {
        this.props.loadVideo();
    };
    render() {
        console.log(this.props.state);
        return (
            <>
                <div>testBtn</div>
                <Video />
            </>
        );
    }
}

export default PopularVideo;
