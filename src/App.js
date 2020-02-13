import React from 'react';
import './App.css';
import Page from "./components/page"
import {SideForm, Input} from "./components/sideForm"
import brands from "./brands.json"

function App() {
  return (
    <div>
    <div className = "row">
      <div className = "col-3">
        <SideForm>
          {
            brands.map((brand, i)=>{
              return (
                <Input
                  name = {brand.name}
                  key = {i}
                  num = {i}
                />
              )
            })
          }
        </SideForm>
      </div>
      <div className = "col-9 center">
      <Page></Page>
      </div>
    </div>
    
    </div>    

  );
}

export default App;
