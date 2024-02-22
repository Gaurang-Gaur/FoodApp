Issues:

1. That swiggy api is not getting fetch so, i have to make my own api hosting setup for getting the data
2. NOw, I have hosted the api but it's not dynamic to handle the resid system how i am suppose to solve this issue how????
3 Solution remember json is just a big object and array 

If it 's a array then we can apply all the operation we perform on array on it like searching or sorting or manipulating data in many ways as possilbe. this how we manage to share json data in between file module.exports=data;

a. if i click on the card in the frontend it will change the url to resId of the restaurant card and made a req in backend
b. then , iteration over the data array eg. data[i].info.resId= resid required from frontend and then just simple give it back to the frontend 
