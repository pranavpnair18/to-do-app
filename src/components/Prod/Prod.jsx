import React,{ useState } from 'react';
import { details } from "./Prod.data";
import { Button, Card } from "react-bootstrap";


const Prod = () => {
  const [items, setItems] = useState(details)
  const decqty = (id)=>{
    const newItem=items.map((item)=>
      item.id===id?{...item,qty:item.qty-1}:item
  )
  setItems(newItem);
  };

  const incqty = (id)=>{
    const newItem=items.map((item)=>
      item.id===id?{...item,qty:item.qty+1}:item
  )
  setItems(newItem);
  };

  const almsg =()=>{
    alert('added to cart');

  };
  return (
    <div>
    <h1 className='bg-primary text-white'>Prod</h1>
    <div className="d-flex">   
     
     
      {items.map((item)=>{
        const imageUrl = new URL(`./assets/${item.imagen}`, import.meta.url).href;
      
       return(
       <div key={item.id}>
    <Card className="m-1 shadow bg-body rounded" style={{ width: '13rem' }}>
       <Card.Img style={{ height: '15rem' }} variant="top" src={imageUrl} alt='apple'/>
      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         {item.desc}
        </Card.Text>
        <Card.Text>
         {item.price}
        </Card.Text>
        <p>Qty: <p>{item.qty}</p>
        <Button onClick={()=>decqty(item.id)} className='m-1'>-</Button><Button onClick={()=>incqty(item.id)} className='m-1'>+</Button></p>
        <Button variant="primary" onClick={almsg}>Add to cart</Button>
      </Card.Body>
    </Card>
    
    </div>
     );
     })}
    
    </div>
    </div>
  );
  
};

export default Prod