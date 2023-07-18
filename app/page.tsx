"use client";
import { useState } from "react";
import Tabs from "./Components/Tabs";
import Button from "./Components/Button";
import Container from "./Components/Container";
import { AiFillApple } from "react-icons/ai";

const items = [
  {
    key: "1",
    label: (
      <span className="flex gap-2 justify-between items-center">
        <AiFillApple />
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
  ...new Array(10).fill(null).map((_, i) => {
    const id = String(i + 3);
    return {
      label: `Tab-${id}`,
      key: id,
      disabled: i === 28,
      closeable: true,
      children: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam
        accusamus optio magni, accusantium modi dolor fugiat incidunt quis sint,
        error deleniti consectetur hic cupiditate voluptates assumenda inventore
        voluptatem aliquam. ${id}`,
    };
  }),
];

const Home = () => {
  const [centered, setCentered] = useState<boolean>(false);
  const [position, setPosition] = useState<string>("top");
  const [size, setSize] = useState<string>("small");
  const [color, setColor] = useState<string>("");
  const [activeColor, setActiveColor] = useState<string>("");
  const [values, setValues] = useState({
    position: "top",
    size: "small",
  });

  const handleSetSize = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(e.target.value);
    setValues({ ...values, size: e.target.value });
  };

  const handleSetPosition = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPosition(e.target.value);
    setValues({ ...values, position: e.target.value });
  };

  const handleSetCentered = () => {
    setCentered((prev) => !prev);
  };

  const handleSetColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColor(e.target.value);
  };

  const handleSetActiveColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActiveColor(e.target.value);
  };

  return (
    <main className="flex min-h-screen flex-col p-[2rem] md:p-24">
      <div className="flex flex-col gap-4 mb-8">
        <Container title="Size">
          {["small", "middle", "large"].map((size) => (
            <Button
              onClick={handleSetSize}
              value={size}
              key={size}
              size={values.size}
            />
          ))}
        </Container>
        <Container title="Position">
          {["top", "bottom", "left", "right"].map((position) => (
            <Button
              onClick={handleSetPosition}
              value={position}
              key={position}
              position={values.position}
            />
          ))}
        </Container>
        <Container title="Centered">
          <Button
            onClick={handleSetCentered}
            value={!centered ? "Enable" : "Disable"}
          />
        </Container>
        <Container title="Active Color">
          <input type="color" onChange={handleSetActiveColor} />
        </Container>
        <Container title="Color">
          <input type="color" onChange={handleSetColor} />
        </Container>
      </div>
      <Tabs
        items={items}
        defaultActiveKey="1"
        size={size}
        centered={centered}
        position={position}
        style={{ color, activeColor }}
      />
    </main>
  );
};

export default Home;
