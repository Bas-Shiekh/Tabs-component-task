import Tabs from "./Components/Tabs";

const items = [
  {
    key: "1",
    label: 'tab 1',
    children: <div>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla, nam accusamus optio magni, accusantium modi dolor fugiat incidunt quis sint, error deleniti consectetur hic cupiditate voluptates assumenda inventore voluptatem aliquam.</div>
  },
  {
    key: "2",
    label: 'tab 2',
    children: 'hello from tab two',
  },
];

const Home = () => (
  <main className="flex min-h-screen flex-col items-center p-24">
    <Tabs items={items} defaultActiveKey="1" />
  </main>
);

export default Home;
