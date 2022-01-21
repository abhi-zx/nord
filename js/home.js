function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }
  
     var counter = 0;
          var arr = ["https://n.nordstrommedia.com/id/25172061-6fcf-4a48-a4b8-0b78ae442cf5.png?h=400&w=1608",
              "https://n.nordstrommedia.com/id/a5509faa-c689-423a-a946-363c011a028f.jpeg?h=711&w=1340",
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/casual-cute2-1605213445.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
              "https://content.fortune.com/wp-content/uploads/2018/04/mens-clothing-at-nordstrom-mens-store.jpg?resize=1200,600"
  
          ]
          var container = document.getElementById('abc')
          // console.log(container)
          function slideshow() {
              // var container = document.getElementsByClassName('container')
  
  
              setInterval(function () {
                  container.innerHTML = null
                  var img = document.createElement('img')
                  img.src = arr[counter];
                  counter++;
                  container.append(img)
                  if (counter == 4)
                      counter = 0;
  
              }, 4000);
  
          }
          slideshow();
  
          var arr2 = ["https://images.squarespace-cdn.com/content/v1/5b3132879f8770b9405536fd/1595963795946-OXYYB5JQEHUK860EUGM6/Pink+Mood+Collage+Instagram+Post-19.png?format=1000w",
              "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.meredithcorp.io%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%253A%252F%252Fstatic.onecms.io%252Fwp-content%252Fuploads%252Fsites%252F14%252F2020%252F10%252F19%252F101920_future_of_fashion_holes_lead1-2000.jpg&q=85",
              "https://i.ytimg.com/vi/nV1fW8Q7aQ8/maxresdefault.jpg"
          ]
          var container2 = document.getElementById('abc2')
          var counter2=0;
          function slideshow2() {
              // var container = document.getElementsByClassName('container')
  
  
              setInterval(function () {
                  container2.innerHTML = null
                  var img = document.createElement('img')
                  img.src = arr2[counter2];
                  counter2++;
                  container2.append(img)
                  if (counter2 == 3)
                      counter2 = 0;
  
              }, 3000);
  
          }
          slideshow2();
  
      // var foot = document.getElementById('foot');
      // foot.innerHTML= footer()
  // var products= [
  //     {
  //       pid :5,
       
  //       name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //       img_src: 'https://static9.depositphotos.com/1013513/1169/i/600/depositphotos_11699738-stock-photo-variety-of-casual-shirts-on.jpg',
  //       price_was:273,
  //       price_now:200,
       
       
  //     },
  //     {
  //         pid :3.2,
         
  //         name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //         img_src: 'https://media1.popsugar-assets.com/files/thumbor/6G6emS4tiK8zGGS8PttmZp7TW5s/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2020/01/09/854/n/1922564/150dc8105e177f41b7bd49.58457068_/i/best-nordstrom-clothes-for-women-2020.jpg',
  //         price_was:340,
  //         price_now:300,       
          
         
  //       },
  //       {
  //         pid :3,
  //         name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //         img_src: 'https://i.insider.com/5cc9ef1c021b4c150d34ff64?width=1136&format=jpeg',
  //         price_was:390,
  //         price_now:400,   
  //       },
  //       {
  //         pid :4.8,
  //         name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //         img_src: 'https://media1.popsugar-assets.com/files/thumbor/3oKKC4EG70HoMK9jj6nlW5DK2No/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2019/03/12/958/n/1922564/004d80385c882bf1889541.52577704_/i/Best-Topshop-Clothes-From-Nordstrom.jpg',
  //         price_was:480,
  //         price_now:400, 
  //       },
  //       {
  //         pid :5,
         
  //         name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //         img_src: 'https://cdn01.pharmeasy.in/dam/products_otc/091760/horlicks-health-nutrition-drink-chocolate-carton-500-g-2-1632775131.jpg?dim=200x0&dpr=1.5&q=100',
  //         price_was:270, 
  //         price_now:200, 
  //       },
  //       {
  //         pid :4.5,
         
  //         name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //         img_src: 'https://cdn01.pharmeasy.in/dam/products_otc/L57984/junior-horlicks-stage-2-4-6-years-health-nutrition-drink-vanilla-flavor-500gm-pet-jar-2-1632778131.jpg?dim=200x0&dpr=1.5&q=100',
  //         price_was:340,
  //          price_now:200, 
  //       },
  //       {
  //         pid :3,
         
  //         name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //         img_src: 'https://cdn01.pharmeasy.in/dam/products_otc/F52227/horlicks-womens-plus-caramel-jar-400-g-2-1632779251.jpg?dim=200x0&dpr=1.5&q=100',
  //         price_was:555,
  //         price_now:400, 
  //       },
  //       {
  //         pid :4.2,
         
  //         name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //         img_src: 'https://cdn01.pharmeasy.in/dam/products_otc/I41108/horlicks-protein-plus-chocolate-container-400-g-2-1632776419.jpg?dim=200x0&dpr=1.5&q=100',
  //         price_was:420,
  //          price_now:800,
  //       },
  //       {
  //         pid :4,
         
  //         name: 'Horlicks Health & Nutrition Drink, Chocolate, Jar 200 G',
  //         img_src: 'https://cdn01.pharmeasy.in/dam/products_otc/091750/horlicks-health-nutrition-drink-chocolate-jar-200-g-2-1632775131.jpg?dim=200x0&dpr=1.5&q=100',
  //         price_was:520,
  //         price_now:420, 
  //       },
  //   ]
  
  var products=[
    
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://cdn-images.farfetch-contents.com/16/04/71/52/16047152_31633872_600.jpg ",
        name: "Palm Angels palm tree high-top sneakers ",
        brand: "PALM ANGLE",
        category: "SHOES",
        price_now: 9999,
        strikedoffprice: 12000,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://cdn-images.farfetch-contents.com/17/38/87/94/17388794_36294381_600.jpg",
        name: " Off-White Arrows leather-trim backpack",
        brand: "OFF WHITE",
        category: "BAG",
        price_now: 779,
        strikedoffprice: 1299,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://content.shop4reebok.com/static/Product-GK9175/reebok_GK9175_1.jpg.plp",
        name: "MEN'S REEBOK TRAINING FOUNDATION  PANTS  ",
        brand: "REEBOK",
        category: "PANT",
        price_now: 1019,
        strikedoffprice: 1699,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://content.shop4reebok.com/static/Product-GK9176/reebok_GK9176_1.jpg.plp ",
        name: "MEN'S REEBOK TRAINING FOUNDATION PANTS  ",
        brand: "REEBOK",
        category: "PANT",
        price_now: 1019,
        strikedoffprice: 1699,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://cdn-images.farfetch-contents.com/16/86/53/38/16865338_36146527_600.jpg",
        name: "Palm Angels slogan-print tote bag ",
        brand: "PALM ANGLE",
        category: "BAG",
        price_now: 1575,
        strikedoffprice: 3499,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            " https://content.shop4reebok.com/static/Product-G57776/reebok_G57776_1.jpg.plp ",
        name: "  MEN'S REEBOK RUNNING ZTAUR RUN SHOES ",
        brand: "REEBOK",
        category: "SHOES",
        price_now: 3449,
        strikedoffprice: 4999,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            " https://cdn-images.farfetch-contents.com/16/32/31/49/16323149_37142236_600.jpg ",
        name: "MAD Paris MAD EMERALDS DAYTONA",
        brand: "MAD PARIS",
        category: "WATCH",
        price_now: 749,
        strikedoffprice: 1499,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://cdn-images.farfetch-contents.com/17/72/28/77/17722877_37116982_600.jpg",
        name: "MAD Paris Nobile quartz 43mm",
        brand: "MAD PARIS",
        category: "WATCH",
        price_now: 1149,
        strikedoffprice: 2299,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            " https://content.shop4reebok.com/static/Product-EX4287/reebok_EX4287_1.jpg.plp  ",
        name: " MEN'S REEBOK RUNNING GENESIS RUNNER SHOE  ",
        brand: "REEBOK",
        category: "SHOES",
        price_now: 1620,
        strikedoffprice: 3599,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://content.shop4reebok.com/static/Product-G57705/reebok_G57705_1.jpg.plp",
        name: "UNISEX REEBOK CLASSICS  BASKETBALL SHOES",
        brand: "REEBOK",
        category: "SHOES",
        price_now: 3919,
        strikedoffprice: 5599,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            " https://cdn-images.farfetch-contents.com/17/29/77/93/17297793_36378668_600.jpg",
        name: " Gucci Eyewear aviator-frame sunglasses ",
        brand: "GUCCI",
        category: "SUNGLASSES",
        price_now: 2779,
        strikedoffprice: 4299,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://cdn-images.farfetch-contents.com/17/29/93/01/17299301_36471919_600.jpg",
        name: "Gucci Eyewear aviator-frame sunglasses",
        brand: "GUCCI",
        category: "SUNGLASSES",
        price_now: 3490,
        strikedoffprice: 4999,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            " https://cdn-images.farfetch-contents.com/17/75/27/86/17752786_37287322_600.jpg  ",
        name: "Gucci Strawberry Gucci print T-shirt ",
        brand: "GUCCI",
        category: "T-SHIRT",
        price_now: 3499,
        strikedoffprice: 4999,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://cdn-images.farfetch-contents.com/17/60/50/63/17605063_36598566_600.jpg ",
        name: "Gucci bleach-effect tapered-leg denim jeans",
        brand: "GUCCI",
        category: "PANT",
        price_now: 1399,
        strikedoffprice: 2799,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://cdn-images.farfetch-contents.com/15/40/06/66/15400666_27114541_600.jpg",
        name: "Gucci Ace GG Supreme sneaker",
        brand: "GUCCI",
        category: "SHOES",
        price_now: 1575,
        strikedoffprice: 3499,
        Symbol: "₹",
    },
    {
        pid: 5,
        price_was: 1000,
        img_src:
            "https://content.shop4reebok.com/static/Product-HC3528/reebok_HC3528_1.jpg.plp",
        name: "MEN'S REEBOK TRAINING BASIC POLO TEE",
        brand: "REEBOK",
        category: "T-SHIRT",
        price_now: 779,
        strikedoffprice: 1299,
        Symbol: "₹",
    },
    {
        pid: 5,
        img_src:
            "https://content.shop4reebok.com/static/Product-FW0344/reebok_FW0344_1.jpg.plp",
        name: "Gucci logo print hoodie",
        brand: "GUCCI",
        category: "SHOES",
        price_now: 1620,
        price_was: 1000,
        strikedoffprice: 3599,
        Symbol: "₹",
    },
]
    async function search2() {

  
        let res = await fetch("http://localhost:3010/products1");
        let products = await res.json();
        showProducts1(products)
        
    }
    
    search2();
   

      function showProducts1(products){
  
  
  products.forEach(function (p) {
      // console.log(p)
      var content3 = document.getElementById('sc1')
      var div1 = document.createElement('div');
      div1.setAttribute('class', 'div3');
      var div2 = document.createElement('div');
      div2.setAttribute('class', 'a1');
      var img = document.createElement('img');
      img.src = p.img_src;
      img.addEventListener('click', function(){
          view(p)
      })
      function view(p) {
        
        var testObject = p;

        // Put the object into storage
        localStorage.setItem('testObject', JSON.stringify(testObject));

        // Retrieve the object from storage
        // var retrievedObject = localStorage.getItem('testObject');

        // console.log('retrievedObject: ', JSON.parse(retrievedObject));
        // console.log("anny1111111")
        window.location.href= "../html/view.html"
      }
      div2.append(img);
      var div3 = document.createElement('div');
      div3.setAttribute('class', 'a2')
      var h4 = document.createElement('h4');
      h4.textContent = 'Course'
      div3.append(h4);
  
      var div4 = document.createElement('div');
      div4.setAttribute('class', 'a3')
      var h4 = document.createElement('p');
      h4.textContent = "Was"+" : "+"INR "+p.price_was;
      div4.append(h4);
  
      var div5 = document.createElement('div');
      div5.setAttribute('class', 'a4')
      var h4 = document.createElement('p');
      h4.textContent = "Now"+" : "+"INR "+p.price_now;
      div5.append(h4);
      var div6= document.createElement('div')
      div6.setAttribute('class', 'a10')
      div6.textContent ="Rating"+" : "+" "+ p.pid;
      // console.log(div6.textContent)
      div1.append(div2, div3, div4, div5,div6)
      // console.log(div1)
      content3.append(div1);
     
      
  })
  }
  
//   async function search2() {

  
//     let res = await fetch("http://localhost:3010/products/products2");
//     let products = await res.json();
   
//     showProducts2(products)
// }

// search2();

  
         
  
async function search1() {

  
  let res = await fetch("http://localhost:3010/products");
  let products = await res.json();
  
  showProducts2(products)
}

search1();
// showProducts2(products2)
    function showProducts2(products2){
  
  
      products2.forEach(function (p) {
      // console.log(p)
      var content3 = document.getElementById('sc')
      var div1 = document.createElement('div');
      div1.setAttribute('class', 'div2');
      var div2 = document.createElement('div');
      div2.setAttribute('class', 'a1');
      var img = document.createElement('img');
      img.src = p.img_src;
      img.addEventListener('click', function(){
        view2(p)
    })
    function view2(p) {
      
      var testObject = p;

      // Put the object into storage
      localStorage.setItem('testObject', JSON.stringify(testObject));

      // Retrieve the object from storage
      // var retrievedObject = localStorage.getItem('testObject');

      // console.log('retrievedObject: ', JSON.parse(retrievedObject));
    //   console.log("anny1111111")
      window.location.href= "../html/view.html"
    }
      div2.append(img);
      var div3 = document.createElement('div');
      div3.setAttribute('class', 'a2')
      var h4 = document.createElement('h4');
      h4.textContent = 'Course'
      div3.append(h4);
  
      var div4 = document.createElement('div');
      div4.setAttribute('class', 'a3')
      var h4 = document.createElement('p');
      h4.textContent = "Was"+" : "+"INR "+p.price_was;
      div4.append(h4);
  
      var div5 = document.createElement('div');
      div5.setAttribute('class', 'a4')
      var h4 = document.createElement('p');
      h4.textContent = "Now"+" : "+"INR "+p.price_now;
      div5.append(h4);
      var div6= document.createElement('div')
      div6.setAttribute('class', 'a10')
      div6.textContent ="Rating"+" : "+" "+ p.pid;
      // console.log(div6.textContent)
      div1.append(div2, div3, div4, div5,div6)
      // console.log(div1)
      content3.append(div1); 
      
  })
    }
  
  
        //   showCourse2_2(products2)
  
          var span3 = document.getElementById('span_3');
          var span4 = document.getElementById('span_4');
          // console.log(span)
          var div3 = document.getElementsByClassName('div3');
          var l = 0;
          span4.addEventListener('click', right2)
          function right2() {
              console.log('abhi')
              l++;
              for (var i of div3) {
                  if (l == 0) {
                      i.style.left = '0px';
                  }
                  if (l == 1) {
                      i.style.left = '-100px';
                  }
                  if (l == 2) {
                      i.style.left = '-1480px';
                  }
                  if (l == 3) {
                      i.style.left = '-2220px';
                  }
                  if (l == 4) {
                      i.style.left = '-2960px';
                  }
                  if (l > 4) {
                      l = 4;
                  }
  
              }
          }
          span3.addEventListener('click', left2)
          function left2() {
              console.log('anny')
              l--;
              for (var i of div3) {
                  if (l == 0) {
                      i.style.left = '0px';
                  }
                  if (l == 1) {
                      i.style.left = '-740px';
                  }
                  if (l == 2) {
                      i.style.left = '-1480px';
                  }
                  if (l == 3) {
                      i.style.left = '-2220px';
                  }
                  if (l == 4) {
                      i.style.left = '-2960px';
                  }
                  if (l < 0) {
                      l = 0;
                  }
  
              }
          }
  
          var span7 = document.getElementById('span_7');
          var span8 = document.getElementById('span_8');
          // console.log(span)
          var div2 = document.getElementsByClassName('div2');
          var l = 0;
          span8.addEventListener('click', right4)
          function right4() {
          //   console.log('anny')
              l++;
              for (var i of div2) {
              //   console.log(i)
                  if (l == 0) {
                      i.style.left = '0px';
                  }
                  if (l == 1) {
                      i.style.left = '-740px';
                  }
                  if (l == 2) {
                      i.style.left = '-1480px';
                  }
                  if (l == 3) {
                      i.style.left = '-2220px';
                  }
                  if (l == 4) {
                      i.style.left = '-2960px';
                  }
                  if (l > 4) {
                      l = 4;
                  }
  
              }
          }
          span7.addEventListener('click', left4)
          function left4() {
              l--;
              for (var i of div2) {
              //   console.log('abhi')
                  if (l == 0) {
                      i.style.left = '0px';
                  }
                  if (l == 1) {
                      i.style.left = '-740px';
                  }
                  if (l == 2) {
                      i.style.left = '-1480px';
                  }
                  if (l == 3) {
                      i.style.left = '-2220px';
                  }
                  if (l == 4) {
                      i.style.left = '-2960px';
                  }
                  if (l < 0) {
                      l = 0;
                  }
  
              }
          }
        