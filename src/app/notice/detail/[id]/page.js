"use client";

import { useEffect, useState } from "react";

export default function Detail(props) {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/api/notice/detail?noticeId=" + props.params.id)
            .then((response) => response.json())
            .then((result) => {
                setDetails(result.detailedNotice[0]);
            });
    }, []);

    return (
        <div>
            <div className="detail-header">
                <h4>공지사항 상세페이지</h4>
            </div>
            <hr className="bg-green-800 h-0.5"></hr>
            <div className="detail-items">
                <h4>{details.title}</h4>
                <p>{details.content}</p>
                <p>{details.author}</p>
            </div>
        </div>
    );
}
