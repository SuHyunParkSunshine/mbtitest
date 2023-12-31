"use client";

import { useEffect, useState } from "react";

export default function Detail(props) {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/api/post/detail?postId=" + props.params.id)
            .then((response) => response.json())
            .then((result) => {
                // console.log(result.detailedPost[0]);
                setDetails(result.detailedPost[0]);
            });
    }, []);

    return (
        <div>
            <div className="detail-header">
                <h4>자유게시판 상세페이지</h4>
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
