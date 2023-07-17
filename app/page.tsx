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

const Home = () => (
  <main className="flex min-h-screen flex-col items-center p-24">
    <Tabs items={items} defaultActiveKey="1" centered position="bottom"/>
  </main>
);

export default Home;
