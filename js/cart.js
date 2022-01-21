
var data = JSON.parse(localStorage.getItem('clothes_cart'));
// console.log(data)

var bb = document.getElementById('bbc');
// console.log(bb)
addproduct(data)
function addproduct(products) {


    products.forEach(function (p) {
        var div1 = document.createElement('div');
        div1.setAttribute('class', 'bigbox')

        var img11 = document.createElement('img')
        img11.id = 'img1';
        img11.src = p.img_src;

        var div2 = document.createElement('div')
        div2.setAttribute('class', 'innerbox')

        var div3 = document.createElement('div')
        div3.setAttribute('class', "innerbox1")
        var h1 = document.createElement('h3')
        h1.textContent = p.name + "      " + "  :";
        var h2 = document.createElement('h3')

        h2.textContent = "Price :" + " " + p.price_now;
        div3.append(h1, h2)

        var br1 = document.createElement('br');
        var h3 = document.createElement('h3')
        h3.textContent = p.size;
        var h4 = document.createElement('h3')
        h4.textContent = p.colour;

        var br2 = document.createElement('br');

        var h5 = document.createElement('h3')
        h5.textContent = "Delivery";

        var p1 = document.createElement('p')
        p1.textContent = "International orders usually arrive within 5–13"

        var p2 = document.createElement('p')
        p2.textContent = "business days. We'll give you delivery dates in checkout.";

        var btn = document.createElement('button');

        btn.id = "btn1";
        btn.innerText = "Remove";

        ///////////Remove Button///////////////////
        btn.addEventListener('click', function () {
            cremove(p)
        })
        function cremove(product) {
            var iid = product.img_src;
            var rl = JSON.parse(localStorage.getItem('clothes_cart'))
            var arr = [];
            for (key in rl) {
                if (iid != rl[key].img_src) {
                    arr.push(rl[key])
                }
            }
            localStorage.setItem('clothes_cart', JSON.stringify(arr))
            div1.remove();
            function Refresh() {

                //////////calculate total amount///////////
                var data2 = JSON.parse(localStorage.getItem('clothes_cart'));
                var sum = 0
                for (key in data2) {
                    sum += data2[key].price_now;
                }
                var amt = document.getElementById('amt')
                console.log(amt)
                amt.textContent = sum
                window.parent.location = window.parent.location.href;
            }
            Refresh();
        }
        ////////////////////////////////
        var data2 = JSON.parse(localStorage.getItem('clothes_cart'));
        var sum = 0
        for (key in data2) {
            sum += data2[key].price_now;
        }
        var amt = document.getElementById('amt')
        console.log(amt)
        amt.textContent = sum

        //(div3, br, h3, h3 ,br, h3, p, p ,button)div2
        div2.append(div3, br1, h3, h4, br2, h5, p1, p2, btn);
        div1.append(img11, div2)
        bb.append(div1)
    })
}
var checkoutbtn = document.getElementById('checkoutbtn');
checkoutbtn.addEventListener('click', next);
function next() {
    window.location.href = '../html/payment.html'
}