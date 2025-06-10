"use client";

import { JSX, useEffect, useState } from "react";
import api from "@/lib/axios";

export default function MainPage(): JSX.Element {
  const [data, setData] = useState({} as any);
  useEffect(() => {
    const fetchData = async () => {
      const res = await api.get("/board/1");
      setData(res.data);
    };

    fetchData();
  }, []);

  return (
    <>
      {data?.lists?.map((e: any) => {
        return (
          <div key={e.id}>
            <div>{e.title}</div>
            <div className="">
              {e.cards?.map((item: any) => {
                return (
                  <div key={item.id}>
                    <div>{item.title}</div>
                    <div>{item.description}</div>
                    <div>{item.dueDate}</div>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </>
  );
}
