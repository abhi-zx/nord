var data = JSON.parse(localStorage.getItem('testObject'))
//  console.log(data)
 var v = document.getElementById('v');
var div1 =document.createElement('div');
div1.setAttribute('class','vcontainer');

var div2 = document.createElement('div');
div2.setAttribute('class','box1');

var img = document.createElement('img')
img.src= data.img_src;
div2.append(img);
// console.log(div2);

var div3 = document.createElement('div')
div3.setAttribute('class','box2')

var p1 = document.createElement('p')
p1.textContent= "Rating : "+data.pid;
var p2 = document.createElement('p')
p2.textContent= "Name : "+data.name;
var p3 = document.createElement('p')
p3.textContent="Price : "+data.price_now;
var p4 = document.createElement('p')
p4.textContent="Price varies with currency exchange rates and may be different than in store."
var p5 = document.createElement('p')
p5.textContent="Lightweight joggers are cut in a super-versatile, slim profile and make racing to the finish line or grocery store exceptionally comfortable."

var btn1 = document.createElement('button')
btn1.innerText="Add to Bag"
btn1.addEventListener('click', function(){
    add(data)
})
if((JSON.parse(localStorage.getItem('clothes_cart')))==null)
{
localStorage.setItem('clothes_cart', JSON.stringify([]));
}
function add(data) {
   
var items =(JSON.parse(localStorage.getItem('clothes_cart')))
items.push(data);
//  console.log(items)
localStorage.setItem('clothes_cart', JSON.stringify(items));
alert('added to cart');

window.location.href= "./cart.html"
}
div3.append(p1,p2,p3,p4,p5,btn1)
div1.append(div2,div3)
v.append(div1)
