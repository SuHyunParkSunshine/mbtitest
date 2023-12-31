"use client";

import { useState } from "react";

export default function Notice() {
    let [title, setTitle] = useState("");
    let [content, setContent] = useState("");

    return (
        <div>
            <h4>공지사항 게시판</h4>
            <div className="newpost-items">
                <input
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="공지사항 제목"
                />
                <input
                    onChange={(e) => setContent(e.target.value)}
                    placeholder="공지사항 내용"
                />
                <button
                    className="text-white bg-green-700 hover:bg-green-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mr-8"
                    onClick={() => {
                        fetch("/api/notice/new", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                title: title,
                                content: content,
                            }),
                        })
                            .then((response) => {
                                window.location.href = "/notice/list";
                                response.json();
                            })
                            .then((result) => {
                                if ((result.success = true)) {
                                    console.log(result.message);
                                } else {
                                    console.log(result.message);
                                }
                            });
                    }}
                >
                    게시물 등록
                </button>
            </div>
        </div>
    );
}
