const $ = id => document.getElementById(id);
const image = (id, width=600) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;
const dishes = [
{id:1,name:"Truffle Mushroom Pizza",category:"Pizza",price:329,tag:"CHEF'S PICK",rating:"4.8",desc:"Mushroom, herbs and golden mozzarella",keywords:"pizza mushroom vegetarian cheese truffle",img:image("photo-1579751626657-72bc17010498")},
{id:2,name:"Classic Margherita",category:"Pizza",price:249,tag:"VEG FAVOURITE",rating:"4.7",desc:"Tomato, basil and stretchy cheese",keywords:"pizza cheese tomato veg margherita",img:image("photo-1574071318508-1cdbab80d002")},
{id:3,name:"Spicy Paneer Pizza",category:"Pizza",price:299,tag:"SPICY",rating:"4.6",desc:"Paneer, peppers and a spicy sauce",keywords:"pizza paneer spicy indian cheese",img:image("photo-1513104890138-7c749659a591")},
{id:4,name:"Cheese Burst Combo",category:"Pizza",price:399,tag:"COMBO DEAL",rating:"4.9",desc:"Cheese pizza, crispy fries and a drink",keywords:"pizza cheese combo fries coke meal",img:image("photo-1571407970349-bc81e7e96d47")},
{id:5,name:"Smoky Chicken Burger",category:"Burgers",price:219,tag:"BESTSELLER",rating:"4.8",desc:"Juicy patty, crisp lettuce and house sauce",keywords:"burger chicken hamburger kfc fast food",img:image("photo-1568901346375-23c9450c58cd")},
{id:6,name:"Double Cheese Burger",category:"Burgers",price:259,tag:"EXTRA CHEESY",rating:"4.7",desc:"Two patties, melted cheese and toasted bun",keywords:"burger cheese double burger fast food",img:image("photo-1553979459-d2229ba7433a")},
{id:7,name:"Crispy Fried Chicken",category:"Chicken",price:249,tag:"CRUNCHY FAVOURITE",rating:"4.8",desc:"Golden, crunchy, spicy fried chicken pieces",keywords:"kfc chicken fried crispy crispy chicken wings bucket",img:image("photo-1626082927389-6cd097cdc6ec")},
{id:8,name:"Hot & Spicy Chicken Bucket",category:"Chicken",price:449,tag:"SHARE & ENJOY",rating:"4.7",desc:"A sharing bucket of crunchy chicken",keywords:"kfc chicken bucket spicy fried chicken family combo",img:image("photo-1562967914-608f82629710")},
{id:9,name:"Chicken Biryani",category:"Indian",price:189,tag:"LOCAL FAVOURITE",rating:"4.8",desc:"Fragrant basmati rice, spices and raita",keywords:"biryani chicken biriyani indian rice non veg",img:image("photo-1563379091339-03246963d96c")},
{id:10,name:"Hyderabadi Dum Biryani",category:"Indian",price:229,tag:"DUM STYLE",rating:"4.9",desc:"Slow-cooked dum rice with rich aromatic masala",keywords:"biryani biriyani hyderabadi dum rice chicken indian",img:image("photo-1633945274405-b6c8069047b0")},
{id:11,name:"Paneer Butter Masala Bowl",category:"Indian",price:179,tag:"VEG COMFORT",rating:"4.6",desc:"Creamy paneer curry served with rice",keywords:"paneer indian veg curry rice butter masala",img:image("photo-1631452180519-c014fe946bc7")},
{id:12,name:"Masala Dosa Plate",category:"Indian",price:99,tag:"SOUTH INDIAN",rating:"4.7",desc:"Crispy dosa with potato masala and chutneys",keywords:"dosa masala dosa south indian breakfast",img:image("photo-1668236543090-82eba5ee5976")},
{id:13,name:"Chocolate Fudge Sundae",category:"Desserts",price:149,tag:"SWEET TREAT",rating:"4.9",desc:"Chocolate ice cream with fudge and crunchy bits",keywords:"ice cream icecream dessert chocolate sundae fudge",img:image("photo-1563805042-7684c019e1cb")},
{id:14,name:"Strawberry Ice Cream",category:"Desserts",price:119,tag:"COOL & CREAMY",rating:"4.7",desc:"Sweet strawberry scoops with berry drizzle",keywords:"ice cream icecream strawberry dessert kulfi",img:image("photo-1497034825429-c343d7c6a68f")},
{id:15,name:"Belgian Waffle",category:"Desserts",price:169,tag:"WEEKEND MOOD",rating:"4.8",desc:"Warm waffle, chocolate sauce and ice cream",keywords:"waffle dessert chocolate ice cream sweet",img:image("photo-1562376552-0d160a2f238d")},
{id:16,name:"Classic Falooda",category:"Desserts",price:139,tag:"CHILLED FAVOURITE",rating:"4.6",desc:"Rose milk, vermicelli, jelly and ice cream",keywords:"falooda dessert ice cream rose milk drink",img:image("photo-1488900128323-21503983a07e")},
{id:17,name:"Peri Peri Fries",category:"Sides",price:109,tag:"CRUNCH TIME",rating:"4.5",desc:"Crispy fries dusted with fiery peri peri",keywords:"fries french fries potato peri peri side",img:image("photo-1573080496219-bb080dd4f877")},
{id:18,name:"Garlic Cheese Bread",category:"Sides",price:129,tag:"CHEESY SIDE",rating:"4.6",desc:"Toasted garlic bread with melted cheese",keywords:"garlic bread cheese side pizza",img:image("photo-1619531040576-f9416740661c")},
{id:19,name:"Cold Coffee",category:"Drinks",price:119,tag:"COFFEE BREAK",rating:"4.7",desc:"Chilled creamy coffee with a smooth finish",keywords:"cold coffee drink beverage iced coffee",img:image("photo-1461023058943-07fcbe16d735")},
{id:20,name:"Mango Smoothie",category:"Drinks",price:129,tag:"FRUITY",rating:"4.6",desc:"Mango blended into a cool, creamy drink",keywords:"mango smoothie juice drink beverage",img:image("photo-1505252585461-04db1eb84625")},
{id:21,name:"Veg Loaded Wrap",category:"Indian",price:149,tag:"QUICK BITE",rating:"4.5",desc:"Grilled wrap stuffed with crunchy vegetables",keywords:"wrap veg roll sandwich paneer indian",img:image("photo-1626700051175-6818013e1d4f")},
{id:22,name:"BBQ Chicken Wings",category:"Chicken",price:199,tag:"SAUCY",rating:"4.8",desc:"Sticky BBQ wings with a smoky glaze",keywords:"chicken wings bbq kfc chicken side",img:image("photo-1527477396000-e27163b481c2")},
{id:23,name:"Pepperoni Style Pizza",category:"Pizza",price:349,tag:"MEAT LOVERS",rating:"4.8",desc:"Classic savoury topping and molten cheese",keywords:"pizza pepperoni non veg cheese",img:image("photo-1628840042765-356cda07504e")},
{id:24,name:"Mini Party Combo",category:"Combos",price:499,tag:"SAVE MORE",rating:"4.9",desc:"Burger, fries, chicken bites and a chilled drink",keywords:"combo burger fries chicken party meal",img:image("photo-1555939594-58d7cb561ad1")}
];
let cart = {}, activeCategory = "All", favorites = new Set(), appliedCoupon = false, profile = {}, orderTimer = null, trackingIndex = 0;
const steps = [
 {title:"Order confirmed",sub:"Restaurant has accepted your order.",note:"Great news! Your order is confirmed."},
 {title:"Preparing your food",sub:"The kitchen is making it fresh.",note:"The kitchen is preparing your favourites."},
 {title:"Picked up by delivery partner",sub:"Your order has left the restaurant.",note:"Your delivery partner has picked up the order."},
 {title:"On the way",sub:"Your food is travelling to your address.",note:"Your food is on the way to your delivery address."},
 {title:"Delivered",sub:"Enjoy your meal!",note:"Delivered! Enjoy your meal and have a lovely day."}
];
function toast(msg){const el=$("toast");el.textContent=msg;el.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(()=>el.classList.remove("show"),2500)}
function rupees(n){return "₹"+Math.max(0,Math.round(n)).toLocaleString("en-IN")}
function getQty(id){return cart[id]||0}
function itemCount(){return Object.values(cart).reduce((a,b)=>a+b,0)}
function subtotal(){return dishes.reduce((sum,d)=>sum+d.price*getQty(d.id),0)}
function discountAmount(){return appliedCoupon&&subtotal()>=399?50:0}
function total(tip=false){return subtotal()+(subtotal()>0?25:0)-discountAmount()+(tip?20:0)}
function renderFoods(){
 const query=$("searchInput").value.trim().toLowerCase();
 const filtered=dishes.filter(d=>(activeCategory==="All"||d.category===activeCategory||(activeCategory==="Indian"&&d.category==="Meals"))&&(!query||`${d.name} ${d.category} ${d.desc} ${d.keywords}`.toLowerCase().includes(query)));
 $("foodGrid").innerHTML=filtered.map(d=>`<article class="food-card"><div class="food-photo"><img src="${d.img}" alt="${d.name}" loading="lazy" onerror="this.onerror=null;this.src='assets/crave-food-hero.jpg';this.classList.add('food-fallback')"><span class="food-tag">${d.tag}</span><button class="heart-btn ${favorites.has(d.id)?"fav":""}" data-fav="${d.id}" aria-label="Add ${d.name} to favourites">${favorites.has(d.id)?"♥":"♡"}</button></div><div class="food-info"><div class="food-topline"><h3>${d.name}</h3><span class="rating">★ ${d.rating}</span></div><p class="food-desc">${d.desc}</p><div class="food-bottom"><strong class="food-price">${rupees(d.price)}</strong><button class="add-btn" data-add="${d.id}">${getQty(d.id)?"+"+getQty(d.id)+" · Add":"＋ Add"}</button></div></div></article>`).join("");
 $("resultCount").textContent=`${filtered.length} items`;
 $("menuTitle").textContent=query?`Results for “${$("searchInput").value.trim()}”`:activeCategory==="All"?"Popular right now":`${activeCategory} favourites`;
 $("emptyState").classList.toggle("hidden",filtered.length>0);$("foodGrid").classList.toggle("hidden",filtered.length===0);
}
function renderCart(){
 const items=dishes.filter(d=>getQty(d.id)>0);
 $("cartItems").innerHTML=items.map(d=>`<div class="cart-item"><img src="${d.img}" alt="${d.name}" onerror="this.onerror=null;this.src='assets/crave-food-hero.jpg'"><div><h4>${d.name}</h4><small>${rupees(d.price)} each</small><div class="qty-controls"><button data-minus="${d.id}" aria-label="Remove one">−</button><strong>${getQty(d.id)}</strong><button data-add="${d.id}" aria-label="Add one">+</button></div></div><strong>${rupees(d.price*getQty(d.id))}</strong></div>`).join("");
 $("cartEmpty").classList.toggle("hidden",items.length>0);
 $("drawerCount").textContent=`(${itemCount()})`; $("cartCount").textContent=itemCount();$("cartTotal").textContent=rupees(total());
 $("itemSubtotal").textContent=rupees(subtotal());$("deliveryFee").textContent=rupees(subtotal()>0?25:0);$("discount").textContent="−"+rupees(discountAmount());$("grandTotal").textContent=rupees(total());
 $("checkoutTotal").textContent=rupees(total($("addTip").checked));
 $("cartFloat").classList.toggle("hidden",!$("app")||$("app").classList.contains("hidden"));
}
function addItem(id){cart[id]=(cart[id]||0)+1;
const spinPrizes=[
 {label:"₹50 OFF",message:"You won ₹50 OFF! Use code CRAVE50 on eligible demo orders."},
 {label:"FREE DELIVERY",message:"You won FREE DELIVERY! A lovely little treat for your next demo order."},
 {label:"10% OFF",message:"You won 10% OFF! Demo reward unlocked."},
 {label:"BONUS COINS",message:"Bonus Foodie Coins unlocked! Demo reward added."},
 {label:"₹25 OFF",message:"You won ₹25 OFF! Demo reward unlocked."},
 {label:"TRY AGAIN",message:"Almost! Give it another spin for a new surprise."},
 {label:"SWEET TREAT",message:"Sweet Treat unlocked! Enjoy this demo reward."},
 {label:"5% OFF",message:"You won 5% OFF! Demo reward unlocked."}
];
let spinBusy=false, spinRotation=0;
$("openSpinWheel").addEventListener("click",()=>{openModal("spinModal");});
$("spinNow").addEventListener("click",()=>{
 if(spinBusy)return;
 spinBusy=true;$("spinNow").disabled=true;$("spinResult").textContent="Spinning for your surprise…";
 const prizeIndex=Math.floor(Math.random()*spinPrizes.length);
 const segment=360/spinPrizes.length;
 const desired=(360-(prizeIndex*segment+segment/2)+360)%360;
 const current=((spinRotation%360)+360)%360;
 const target=360*5+((desired-current+360)%360);
 spinRotation+=target;
 $("spinWheel").style.transform=`rotate(${spinRotation}deg)`;
 window.setTimeout(()=>{const prize=spinPrizes[prizeIndex];$("spinResult").textContent=prize.message;toast(prize.message);spinBusy=false;$("spinNow").disabled=false;},4100);
});

renderFoods();renderCart();toast("Added to your bag")}
function changeQty(id,delta){cart[id]=(cart[id]||0)+delta;if(cart[id]<=0)delete cart[id];if(subtotal()<399)appliedCoupon=false;renderFoods();renderCart()}
function openModal(id){$(id).classList.remove("hidden")}
function closeModal(id){$(id).classList.add("hidden")}
$("profileForm").addEventListener("submit",e=>{e.preventDefault();profile={name:$("fullName").value.trim(),mobile:$("mobile").value.trim(),location:$("location").value.trim()};if(!profile.name||!profile.mobile||!profile.location){toast("Please complete your profile");return} $("topName").textContent=profile.name.split(" ")[0];$("avatar").textContent=profile.name.charAt(0).toUpperCase();$("topLocation").textContent=profile.location;$("checkoutAddress").value=profile.location;$("checkoutMobile").value=profile.mobile;$("authScreen").classList.add("hidden");$("app").classList.remove("hidden");renderFoods();renderCart()});
$("useLocation").addEventListener("click",()=>{if(!navigator.geolocation){toast("Location not supported; type it manually");return}toast("Requesting device location…");navigator.geolocation.getCurrentPosition(async pos=>{try{const url=`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${pos.coords.latitude}&lon=${pos.coords.longitude}`;const r=await fetch(url);const data=await r.json();$("location").value=data.display_name||`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;toast("Location added")}catch{$("location").value=`${pos.coords.latitude.toFixed(4)}, ${pos.coords.longitude.toFixed(4)}`;toast("Coordinates added; add your area if needed")}},()=>toast("Permission not allowed. Type your area manually."),{enableHighAccuracy:false,timeout:8000})});
$("editLocation").addEventListener("click",()=>{const next=prompt("Enter your delivery area or address:",profile.location||"");if(next&&next.trim()){profile.location=next.trim();$("topLocation").textContent=profile.location;$("checkoutAddress").value=profile.location;toast("Delivery location updated")}});
$("searchInput").addEventListener("input",renderFoods);$("clearSearch").addEventListener("click",()=>{$("searchInput").value="";renderFoods();$("searchInput").focus()});
$("categoryRow").addEventListener("click",e=>{const btn=e.target.closest("[data-category]");if(!btn)return;activeCategory=btn.dataset.category;document.querySelectorAll(".category-chip").forEach(b=>b.classList.toggle("active",b===btn));renderFoods()});
$("foodGrid").addEventListener("click",e=>{const add=e.target.closest("[data-add]"),fav=e.target.closest("[data-fav]");if(add)addItem(Number(add.dataset.add));if(fav){const id=Number(fav.dataset.fav);favorites.has(id)?favorites.delete(id):favorites.add(id);renderFoods()}});
$("resetSearch").addEventListener("click",()=>{$("searchInput").value="";activeCategory="All";document.querySelectorAll(".category-chip").forEach((b,i)=>b.classList.toggle("active",i===0));renderFoods()});
$("useOffer").addEventListener("click",()=>{$("couponInput").value="CRAVE50";openModal("cartDrawer");toast("Offer code added — apply it in your bag")});
$("cartFloat").addEventListener("click",()=>openModal("cartDrawer"));$("closeCart").addEventListener("click",()=>closeModal("cartDrawer"));
$("cartItems").addEventListener("click",e=>{const add=e.target.closest("[data-add]"),minus=e.target.closest("[data-minus]");if(add)addItem(Number(add.dataset.add));if(minus)changeQty(Number(minus.dataset.minus),-1)});
$("applyCoupon").addEventListener("click",()=>{const code=$("couponInput").value.trim().toUpperCase();if(code==="CRAVE50"&&subtotal()>=399){appliedCoupon=true;toast("₹50 offer applied!")}else if(code==="CRAVE50"){appliedCoupon=false;toast("Add items worth ₹399 to use this offer")}else{appliedCoupon=false;toast("Code not recognised. Try CRAVE50")}renderCart()});
$("checkoutButton").addEventListener("click",()=>{if(!itemCount()){toast("Add food to your bag first");return}closeModal("cartDrawer");$("checkoutTotal").textContent=rupees(total($("addTip").checked));openModal("checkoutModal")});
$("addTip").addEventListener("change",()=>{$("checkoutTotal").textContent=rupees(total($("addTip").checked))});
document.querySelectorAll("[data-close]").forEach(b=>b.addEventListener("click",()=>closeModal(b.dataset.close)));
function startOrder(){
 trackingIndex=0;const id="CH-"+Math.floor(1000+Math.random()*9000);$("orderId").textContent=id;$("trackingAddress").textContent=$("checkoutAddress").value.trim();$("eta").textContent="25–35 min";updateTracking();closeModal("checkoutModal");closeModal("upiModal");openModal("trackingModal");
 clearInterval(orderTimer);orderTimer=setInterval(()=>{if(trackingIndex<steps.length-1){trackingIndex++;updateTracking()}else{clearInterval(orderTimer);orderTimer=null}},6500);
}
function updateTracking(){
 $("trackingSteps").innerHTML=steps.map((s,i)=>`<div class="tracking-step ${i<trackingIndex?"done":i===trackingIndex?"current":""}"><span class="step-dot">${i<trackingIndex?"✓":i+1}</span><div><strong>${s.title}</strong><small>${s.sub}</small></div></div>`).join("");
 const pct=trackingIndex/(steps.length-1)*100;$("routeProgress").style.height=pct+"%";$("trackingNote").textContent=steps[trackingIndex].note;
 $("eta").textContent=trackingIndex===4?"Arrived":trackingIndex===3?"Arriving shortly":`${Math.max(5,25-trackingIndex*5)}–${Math.max(15,35-trackingIndex*5)} min`;
}
$("checkoutForm").addEventListener("submit",e=>{e.preventDefault();if(!itemCount()){toast("Your bag is empty");return}const payment=document.querySelector('input[name="payment"]:checked').value;if(payment==="UPI"){closeModal("checkoutModal");openModal("upiModal")}else startOrder()});
$("confirmDemoPayment").addEventListener("click",startOrder);
$("closeTracking").addEventListener("click",()=>{closeModal("trackingModal");cart={};appliedCoupon=false;$("couponInput").value="";renderCart();renderFoods()});
document.querySelectorAll(".modal-backdrop").forEach(backdrop=>backdrop.addEventListener("click",e=>{if(e.target===backdrop&&backdrop.id!=="trackingModal")closeModal(backdrop.id)}));
document.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key.toLowerCase()==="k"){e.preventDefault();$("searchInput").focus()}if(e.key==="Escape"){["cartDrawer","checkoutModal","upiModal"].forEach(closeModal)}});

const spinPrizes=[
 {label:"₹50 OFF",message:"You won ₹50 OFF! Use code CRAVE50 on eligible demo orders."},
 {label:"FREE DELIVERY",message:"You won FREE DELIVERY! A lovely little treat for your next demo order."},
 {label:"10% OFF",message:"You won 10% OFF! Demo reward unlocked."},
 {label:"BONUS COINS",message:"Bonus Foodie Coins unlocked! Demo reward added."},
 {label:"₹25 OFF",message:"You won ₹25 OFF! Demo reward unlocked."},
 {label:"TRY AGAIN",message:"Almost! Give it another spin for a new surprise."},
 {label:"SWEET TREAT",message:"Sweet Treat unlocked! Enjoy this demo reward."},
 {label:"5% OFF",message:"You won 5% OFF! Demo reward unlocked."}
];
let spinBusy=false, spinRotation=0;
$("openSpinWheel").addEventListener("click",()=>{openModal("spinModal");});
$("spinNow").addEventListener("click",()=>{
 if(spinBusy)return;
 spinBusy=true;$("spinNow").disabled=true;$("spinResult").textContent="Spinning for your surprise…";
 const prizeIndex=Math.floor(Math.random()*spinPrizes.length);
 const segment=360/spinPrizes.length;
 const desired=(360-(prizeIndex*segment+segment/2)+360)%360;
 const current=((spinRotation%360)+360)%360;
 const target=360*5+((desired-current+360)%360);
 spinRotation+=target;
 $("spinWheel").style.transform=`rotate(${spinRotation}deg)`;
 window.setTimeout(()=>{const prize=spinPrizes[prizeIndex];$("spinResult").textContent=prize.message;toast(prize.message);spinBusy=false;$("spinNow").disabled=false;},4100);
});

renderFoods();renderCart();
