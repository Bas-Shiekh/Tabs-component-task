"use client";
import { useState } from "react";
import Image from "next/image";
import Tabs from "./Components/Tabs";
import icon from "@/public/next.svg";

const items = [
  {
    key: "1",
    label: (
      <span className="flex gap-2 justify-between">
        <Image src={icon} alt="icon" width={30} height={30} />
        Tab
      </span>
    ),
    children: (
      <div>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam
        accusamus optio magni, accusantium modi dolor fugiat incidunt quis sint,
        error deleniti consectetur hic cupiditate voluptates assumenda inventore
        voluptatem aliquam.
      </div>
    ),
  },
  {
    key: "2",
    label: "tab 2",
    disabled: true,
    children: "hello from tab two",
  },
  // ...new Array(30).fill(null).map((_, i) => {
  //     const id = String(i + 3);
  //     return {
  //       label: `Tab-${id}`,
  //       key: id,
  //       disabled: i === 28,
  //       children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam
  //       accusamus optio magni, accusantium modi dolor fugiat incidunt quis sint,
  //       error deleniti consectetur hic cupiditate voluptates assumenda inventore
  //       voluptatem aliquam. ${id}`,
  //     };
  //   }),
  {
    key: "3",
    label: "tab 3",
    children: "hello from tab three",
  },
];

const Home = () => {
  const [centered, setCentered] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("");
  const [size, setSize] = useState<string>("small");

  const handleSetSize = (e: any) => {
    setSize(e.target.value);
  };

  const handleSetPosition = (e: any) => {
    setPosition(e.target.value);
  };

  const handleSetCentered = (value: boolean) => {
    setCentered(value);
  };

  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex flex-col gap-4 mb-8">
        <div className="flex gap-2 items-center">
          <h1>Size :</h1>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleSetSize}
              value="small"
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              Small
            </button>
            <button
              type="button"
              onClick={handleSetSize}
              value="middle"
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              Middle
            </button>
            <button
              type="button"
              onClick={handleSetSize}
              value="large"
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              Large
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <h1>Position :</h1>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={handleSetPosition}
              value="left"
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              Left
            </button>
            <button
              type="button"
              onClick={handleSetPosition}
              value="right"
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              Right
            </button>
            <button
              type="button"
              onClick={handleSetPosition}
              value="top"
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              Top
            </button>
            <button
              type="button"
              onClick={handleSetPosition}
              value="bottom"
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              Bottom
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <h1>Position :</h1>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => handleSetCentered(true)}
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              True
            </button>
            <button
              type="button"
              onClick={() => handleSetCentered(false)}
              className="border border-blue-500 px-4 py-2 rounded-lg"
            >
              False
            </button>
          </div>
        </div>
      </div>
      <Tabs
        items={items}
        defaultActiveKey="1"
        size={size}
        centered={centered}
        position={position}
      />
    </main>
  );
};

export default Home;
