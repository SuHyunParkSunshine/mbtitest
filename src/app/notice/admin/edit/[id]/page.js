"use client";

import { useEffect, useState } from "react";

export default function Edit(props) {
    let [details, setDetails] = useState([]);

    useEffect(() => {
        fetch("/api/notice/detail?noticeId=" + props.params.id)
            .then((response) => response.json())
            .then((result) => setDetails(result.detailedNotice[0]));
    }, []);

    return (
        <div className="edit-page">
            <h4>공지시항 수정페이지</h4>
            <form action="/api/notice/edit" method="POST">
                <div className="form-data">
                    {/* <label>제목 :</label> */}
                    제목 :{" "}
                    <input
                        className="title"
                        type="text"
                        name="title"
                        defaultValue={details.title}
                    />
                </div>
                <div className="form-data">
                    내용 :{" "}
                    <input
                        className="content"
                        type="text"
                        name="content"
                        defaultValue={details.content}
                    />
                </div>
                <div className="form-data">
                    작성자 :{" "}
                    <input
                        className="author"
                        type="text"
                        name="author"
                        defaultValue={details.author}
                        readOnly
                    />
                </div>
                <input
                    style={{ display: "none" }}
                    name="notice_id"
                    defaultValue={details.notice_id}
                />
                <button
                    className="text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mr-8"
                    href="/notice/admin/newpost"
                    type="submit"
                >
                    수정
                </button>
            </form>
        </div>
    );
}
