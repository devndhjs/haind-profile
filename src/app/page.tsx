"use client";

import { JSX } from "react";

export default function ProfilePage(): JSX.Element {
  return (
    <div className="container my-4">
      <div className="d-flex flex-column gap-2" style={{ maxWidth: "300px" }}>
        <h2 className="text-dark mb-3" style={{ fontSize: "18px" }}>
          CB Trường An Loạn - Mi Hô Hỗn Chiến
        </h2>
        <a
          href="https://wlyh5_battle.idngoalong.zing.vn/h5/?bid=2503260457021418&version=master&host=s8009.idngoalong.zing.vn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary text-white"
        >
          Tinh anh hộ giá 2
        </a>
        <a
          href="https://wlyh5_battle.idngoalong.zing.vn/h5/?bid=2503260516373339&version=master&host=s8009.idngoalong.zing.vn"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-sm btn-primary text-white"
        >
          Đổng Thừa
        </a>
      </div>
    </div>
  );
}
