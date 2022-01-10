import React from "react";

function ListItem(listItem) {
    return (
        <li className="list_item">
            <div className="listBox">
                <img src={listItem.url} width={listItem.width} height={listItem.height} className="playVideo" alt="" />
                <div className="listBox_txt">
                    <div className="list_title">{listItem.title}</div>
                    <div className="list_channelTitle">{listItem.channelTitle}</div>
                </div>
            </div>
        </li>
    );
}

export default ListItem;
