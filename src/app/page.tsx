"use client";

import { JSX, useEffect, useState } from "react";
import ProfilePage from "./profile/page";
import api from "@/lib/axios";

export default function MainPage(): JSX.Element {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/board");
      setData(res.data);
      console.log(data);
    };

    fetchData();
  }, []);

  return <ProfilePage />;
}
