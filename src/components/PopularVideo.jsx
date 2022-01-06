import React, { Component } from "react";
import Video from "./Video";

class PopularVideo extends Component {
    componentDidMount = async () => {
        this.props.getPopularData();
    };
    tst = this.props.state;

    render() {
        return (
            <>
                <div>hello</div>
                <Video />
            </>
        );
    }
}

export default PopularVideo;
