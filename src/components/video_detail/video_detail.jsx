/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";

function VideoDetail({ selected }) {
    console.log("props", selected.snippet.channelTitle);
    return (
        <section className="detailSection">
            // eslint-disable-next-line jsx-a11y/iframe-has-title
            <iframe className="detailVideoIframe" type="text/html" width="100%" height="500px" src={`https://www.youtube.com/embed/${selected.id}`} frameborder="0" allowFullScreen></iframe>
        </section>
    );
}

export default VideoDetail;
