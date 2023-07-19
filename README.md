# Tabs component [Live demo](https://tindo-task.vercel.app/)

## Installation

- Clone this repository by typing `git clone https://github.com/Bas-Shiekh/tindo-task.git`
- Open terminal
- Run `npm i` to install packages.
- Run `npm run dev` to start project in the browser

## Usage

```javascript
  import Tabs from 'path/Tabs';
```

1- Create an array of objects to define the tabs and their content. Each object should contain the following properties:
  - `key` (string): A unique identifier for the tab.
  - `label` (string | React.ReactElement): The title of the tab, which can be a string or a React element.
  - `disabled` (boolean, optional): Set to `true` to disable the tab. (Default: `false`)
  - `closeable` (boolean, optional): Set to `true` to enable a close button on the tab. (Default: `false`)
  - `children` (string | React.ReactElement, optional): The content to be displayed when the tab is selected.

Example data for `items`:

```javascript
  const items = [
    {
      key: '1',
      label: 'Tab 1',
      children: 'Content for Tab 1',
    },
    {
      key: '2',
      label: 'Tab 2',
      closeable: true,
      children: 'Content for Tab 2',
    },
    // Add more tab objects as needed
  ];
```

2- Use the Tabs component, passing the items array as a prop:

```javascript
  function YourComponent() {
    return (
      <div>
        <h1>Your Page Title</h1>
        <Tabs items={items} />
      </div>
    );
  }

  export default YourComponent;
```

## Props

The `Tabs` component supports the following props:

  - `items` (required): An array of objects representing the tabs and their content. Each object should contain the properties mentioned above.
  - `defaultActiveKey` (string, optional): The key of the tab that should be active by default. (Default: The first tab in the `items` array)
  - `size` (string, optional): The size of the tabs. Use `'small'`, `'middle'`, or `'large'`. (Default: `'small'`)
  - `position` (string, optional): The position of the tabs. Use `'top'`, `'bottom'`, `'left'`, or `'right'`. (Default: `'top'`)
  - `centered` (boolean, optional): Set to `true` to center-align the tabs. (Default: `false`)
  - `style` (object, optional): Custom CSS styles for the tabs. You can define the following properties:
      - `color` (string, optional): The text color of inactive tabs. (Default: `'black'`)
      - `activeColor` (string, optional): The text color of the active tab. (Default: `'blue'`)
      - And also you can add any `CSS` proprieties

## Customization

You can customize the appearance of the tabs by passing the relevant props to the `Tabs` component. For instance, to change the default active tab:
```javascript
  <Tabs items={items} defaultActiveKey="2" />
```
Or to customize the tab size and position:
```javascript
  <Tabs items={items} size="large" position="bottom" />
```
You can also set custom styles:
```javascript
  const customStyles = {
    color: 'gray',
    activeColor: 'purple',
    // You can also add any any CSS proprieties
  };

  <Tabs items={items} style={customStyles} />
```

## Technologies Used

- ➡️ Next.js.
- ➡️ TypeScript.
- ➡️ classNames.
- ➡️ React-icons.
- ➡️ Eslint.
- ➡️ CSS3.

