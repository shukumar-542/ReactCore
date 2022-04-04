import { useState } from 'react';
import './App.css';

function App() {
  const products =[
    {name:'samsung', price:'$200'},
    {name:'Apple', price:'$400'},
    {name:'onePlus', price:'$600'},
    {name:'Oppo', price:'$200'},
  ]
  const friends = ['jihad','jafor','kabir','nahid']
  return (
    <div className="App">
      <header className="App-header">

      <Count></Count>
       {
         products.map(product => <Products pd={product}></Products>)
       }
        {
          friends.map(fr => <ul >{fr}</ul>)
        }

        
      </header>
    </div>
  );
}

function Friends(props){
  
  return(
    <div style={{border:'1px solid gold', margin:'5px', width:'500px'}}>
      
    </div>

  )
}

function Count(){
  const [count, setCount] = useState(0)
 
 
  return(
    <div>Count : {count}
    <button onClick={()=>setCount(count+1)}>Increse</button>
    <button onClick={()=> setCount(count -1)}>Decrese</button>
    </div>
   
  )
}

function Products(props){
  console.log(props);
  const productStyle ={
    border :'1px solid gray',
    backgroundColor : 'lightgray',
    borderRadius: '5px',
    float :'left',
    width:'200px',
    height:'230px'
  }
  return (
    <div style={productStyle}>
      <h2>{props.pd.name}</h2>
      <h1>{props.pd.price}</h1>

    </div>
  )
}

export default App;
