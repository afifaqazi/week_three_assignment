import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.jsx'
import ColorList from "./color_list";
import NewComp from './NewComp.jsx';
import ResultList from './ResultList.jsx';


const root = createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <div>
      <h2>Color List</h2>
      <ColorList />
    </div>
  </StrictMode>
);
 root.render(
      <ColorList/>
    )
  