import logo from './logo.svg';
import './App.css';
import Tab from './Tab';
import { useState } from 'react';

function App() {

  const [currentTabIndex,setIndex]=useState("")
  const handleChange=(newIndex)=>{

    setIndex(newIndex)
  }

  return (
    <Tab  >

<Tab.HeadsContainer currentTab={currentTabIndex} onChange={handleChange}  >
<Tab.Item label={"Tab1"} index={1} ></Tab.Item>
<Tab.Item label={"Tab2"} index={2} ></Tab.Item>
<Tab.Item label={"Tab3"} index={3} ></Tab.Item>
</Tab.HeadsContainer>


<Tab.Container>
<Tab.ContentItem index={1}  >
  <h1>hi i am item 1</h1>
</Tab.ContentItem>
<Tab.ContentItem index={2}  >
  <h1>hi i am item 2</h1>
</Tab.ContentItem>
<Tab.ContentItem index={3}  >
  <h1>hi i am item 3</h1>
</Tab.ContentItem>
</Tab.Container>



    </Tab>
  );
}

export default App;
