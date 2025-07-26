var root = document.querySelector('#root')


// element is created uing rect where we ass 1. name of tag 2. name of properties  or attributes in {} 3. childerns or the innerHTML

var h1 = React.createElement('h1', null,"Hello From Kartik" );
var h2 = React.createElement('h2', null,"Hello From Shubh" );
var h3 = React.createElement('h3', null,"Hello From Sarvan" );
var container =React.createElement('div',{id:"box",className:"container"},null,[h1,h2,h3])

//ReactDOM.createRoot means it tell the too to use react 
//render displays the elemts to be displayed but it only accepts single element thats why ontainer is created 

ReactDOM.createRoot(root).render(container);



