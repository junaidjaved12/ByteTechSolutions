import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Button } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
const MUIList = () => {
 
  const [getData, SetgetData] = useState([]);
    async function getList() {
       
  const res = await fetch ('https://hisocars.techinnsoft.com/api/Booking/get-hot-offer');
  const data = await res.json();
  SetgetData(data);

};
    
  return (
    <div >
      <div style={{display: 'flex', justifyContent: 'center'}}>
       <Button  variant="outlined" title='Fetch List' onClick={getList}> Fetch List</Button>
       </div>
       <div style={{display: 'flex', justifyContent: 'center'}}>
      <List>
      {
        getData.map((data) => {
          return (
            <ListItem>
                  <ListItemText
                    primary={data.id}
                    
                  />
                  
                </ListItem>
          )
        } ) 
      }  
         </List>
      <List>
      {
        getData.map((data) => {
          return (
            <ListItem>
                  <ListItemText
                    primary={data.carId}
                    
                  />
                </ListItem>
          )
        } ) 
      }  
         </List>
      <List>
      {
        getData.map((data) => {
          return (
            <ListItem>
                  <ListItemText
                    primary={data.brandName}
                    
                  />
                </ListItem>
          )
        } ) 
      }  
         </List>
         <ImageList sx={{ width: 500, height: 450 }}>
      {getData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.carImageUrl}?w=248&fit=crop&auto=format`}
            srcSet={`${item.carImageUrl}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
          <ImageListItemBar
            title={item.title}
            subtitle={<span> {item.author}</span>}
            position="below"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
         
    </div>
  )
}

export default MUIList;
