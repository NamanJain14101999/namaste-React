import React from "react";
import ReactDOM from "react-dom/client";

/*
Header
 - Logo
 - Nav Items
Body
 - Search 
 - Restaurant Container 
      -  RestaurantCard - image,name of res, start rating, cuisine, delevery time
Footer
 - Copyright
  - Links
  - Address
   - Contact
*/

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"
          alt="food logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0 ",
};

const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
    cloudinaryImageId,
  } = resData?.data;


  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/"+cloudinaryImageId
        }
        alt="pizza"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(",  ")}</h4>
      <h4>{avgRating} Starts✨</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} mintues</h4>
    </div>
  );
};

const resList =[
{
"type": "restaurant",
"data": {
"type": "F",
"id": "47395",
"name": "Subway",
"uuid": "daad04db-f345-470e-90db-cc4584af47ec",
"city": "12",
"area": "Elements Mall",
"totalRatingsString": "10000+ ratings",
"cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
"cuisines": [
"Fast Food",
"Healthy Food",
"Salads",
"Desserts",
"Beverages",
"Snacks",
"Continental",
"Italian",
"Italian-American",
"American"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 27,
"minDeliveryTime": 27,
"maxDeliveryTime": 27,
"slaString": "27 MINS",
"lastMileTravel": 4.800000190734863,
"slugs": {
"restaurant": "subway-ajmer-road-vaishali-nagar",
"city": "jaipur"
},
"cityState": "12",
"address": "Subway Elements mall, Ajmer Rd, DCM, Jaipur, Rajasthan 302021",
"locality": "Bopal",
"parentId": 2,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 3000,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 3000,
"message": "",
"title": "Delivery Charge",
"amount": "3000",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=7391692~p=1~eid=00000189-4409-655f-011c-c965005e016b~srvts=1689063613791",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "4.8 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "UPTO ₹60",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "47395",
"deliveryTime": 27,
"minDeliveryTime": 27,
"maxDeliveryTime": 27,
"lastMileTravel": 4.800000190734863,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "3.8",
"totalRatings": 10000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "249749",
"name": "McDonald's",
"uuid": "7a53e1b3-02fd-4ab7-8a02-97ac75cdf807",
"city": "12",
"area": "Bais Godam",
"totalRatingsString": "10000+ ratings",
"cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
"cuisines": [
"American"
],
"tags": [],
"costForTwo": 40000,
"costForTwoString": "₹400 FOR TWO",
"deliveryTime": 22,
"minDeliveryTime": 22,
"maxDeliveryTime": 22,
"slaString": "22 MINS",
"lastMileTravel": 1.5,
"slugs": {
"restaurant": "mcdonalds-rj-jaipur-crystal-palm-c-scheme",
"city": "jaipur"
},
"cityState": "12",
"address": "RJ Jaipur Crystal Palm, Plot no-2, Shakar Circle, Sardar Patel Marg,C-scheme, Jaipur - 302004",
"locality": "Crystal Palm Mall",
"parentId": 630,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.5 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "20% OFF",
"subHeader": "UPTO ₹50",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "249749",
"deliveryTime": 22,
"minDeliveryTime": 22,
"maxDeliveryTime": 22,
"lastMileTravel": 1.5,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.1",
"totalRatings": 10000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "129366",
"name": "Ganesh Bhojnalaya - Jyoti Nagar",
"uuid": "6f379bfe-05e2-4c78-b368-ad79f50eda46",
"city": "12",
"area": "Lal Kothi",
"totalRatingsString": "10000+ ratings",
"cloudinaryImageId": "ebqewymo7zx4kdsslxdw",
"cuisines": [
"North Indian",
"Thalis",
"Chinese",
"Mughlai",
"Chaat",
"Punjabi",
"Desserts",
"Snacks",
"Rajasthani",
"Tandoor",
"Sweets",
"Indian",
"Beverages",
"Ice Cream",
"Italian",
"Pastas"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 18,
"minDeliveryTime": 18,
"maxDeliveryTime": 18,
"slaString": "18 MINS",
"lastMileTravel": 2.700000047683716,
"slugs": {
"restaurant": "ganesh-bhojnalaya-lal-kothi-lal-kothi",
"city": "jaipur"
},
"cityState": "12",
"address": "Shop 2, Gate 1, Jyoti Nagar, Lal Kothi, Jaipur",
"locality": "Jyoti Nagar",
"parentId": 85926,
"unserviceable": false,
"veg": true,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "2.7 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "60% OFF",
"subHeader": "UPTO ₹120",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "129366",
"deliveryTime": 18,
"minDeliveryTime": 18,
"maxDeliveryTime": 18,
"lastMileTravel": 2.700000047683716,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.1",
"totalRatings": 10000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "538994",
"name": "Bakingo",
"uuid": "a11fa8a1-af82-4dfa-ad28-3d505b1db95d",
"city": "12",
"area": "Bais Godam",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "bhc25imzsaclq3smfcig",
"cuisines": [
"Bakery",
"Desserts",
"Beverages",
"Snacks"
],
"tags": [],
"costForTwo": 29900,
"costForTwoString": "₹299 FOR TWO",
"deliveryTime": 19,
"minDeliveryTime": 19,
"maxDeliveryTime": 19,
"slaString": "19 MINS",
"lastMileTravel": 2.799999952316284,
"slugs": {
"restaurant": "bakingo-kartarpura-lal-kothi",
"city": "jaipur"
},
"cityState": "12",
"address": "Ground Floor Plot No- 36 Industrial Area Kartarpura Jaipur, Rajasthan, 302019",
"locality": "Kartarpura Road",
"parentId": 3818,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=7354713~p=4~eid=00000189-4409-655f-011c-c966005e0409~srvts=1689063613791",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "2.7 kms",
"hasSurge": false,
"sla": {
"restaurantId": "538994",
"deliveryTime": 19,
"minDeliveryTime": 19,
"maxDeliveryTime": 19,
"lastMileTravel": 2.799999952316284,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "4.3",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "143095",
"name": "Mughal Restaurant",
"uuid": "e3f04716-9586-42a2-b0a8-058736e7fd42",
"city": "12",
"area": "Hasanpura",
"totalRatingsString": "10000+ ratings",
"cloudinaryImageId": "cke86uanz4tbdpdumgei",
"cuisines": [
"North Indian",
"Biryani",
"Mughlai",
"Kebabs",
"Tandoor",
"Thalis"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 18,
"minDeliveryTime": 18,
"maxDeliveryTime": 18,
"slaString": "18 MINS",
"lastMileTravel": 1.600000023841858,
"slugs": {
"restaurant": "mughal-hotel-hasanpura-lal-kothi",
"city": "jaipur"
},
"cityState": "12",
"address": "55 & 56, NBC, Hasanpura, Jaipur",
"locality": "",
"parentId": 19456,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.6 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "143095",
"deliveryTime": 18,
"minDeliveryTime": 18,
"maxDeliveryTime": 18,
"lastMileTravel": 1.600000023841858,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "3.4",
"totalRatings": 10000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "44439",
"name": "Kanha",
"uuid": "dc11c04e-94b5-4f72-84e2-d4cf26f9dbe5",
"city": "12",
"area": "C Scheme",
"totalRatingsString": "10000+ ratings",
"cloudinaryImageId": "nbbc3rtpcqq1dss7bcmi",
"cuisines": [
"Sweets",
"Fast Food",
"North Indian",
"South Indian",
"Chinese",
"Snacks",
"Beverages",
"Indian",
"Continental",
"Italian",
"American",
"Rajasthani",
"Chaat",
"Thalis",
"Bakery",
"Grill",
"Salads",
"Healthy Food",
"Pizzas"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 20,
"minDeliveryTime": 20,
"maxDeliveryTime": 20,
"slaString": "20 MINS",
"lastMileTravel": 1.899999976158142,
"slugs": {
"restaurant": "kanha-c-scheme-c-scheme",
"city": "jaipur"
},
"cityState": "12",
"address": "E-62 First Floor, Bhagat Singh Marg, C Scheme, Jaipur, Rajasthan 302001",
"locality": "C Scheme",
"parentId": 4650,
"unserviceable": false,
"veg": true,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.8 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "44439",
"deliveryTime": 20,
"minDeliveryTime": 20,
"maxDeliveryTime": 20,
"lastMileTravel": 1.899999976158142,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.3",
"totalRatings": 10000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "201760",
"name": "Biryani By Kilo",
"uuid": "b0fd0dec-c366-4b67-a0bb-ef6563689687",
"city": "12",
"area": "Vaishali Nagar",
"totalRatingsString": "5000+ ratings",
"cloudinaryImageId": "eybhvte6db8x3jkcuf34",
"cuisines": [
"Biryani",
"Hyderabadi",
"North Indian",
"Kebabs",
"Mughlai",
"Desserts"
],
"tags": [],
"costForTwo": 49900,
"costForTwoString": "₹499 FOR TWO",
"deliveryTime": 53,
"minDeliveryTime": 53,
"maxDeliveryTime": 53,
"slaString": "53 MINS",
"lastMileTravel": 5,
"slugs": {
"restaurant": "biryani-by-kilo-vaishali-nagar-vaishali-nagar",
"city": "jaipur"
},
"cityState": "12",
"address": "Rathore Nagar, D - Block, Hanuman Nagar, Jaipur, Rajasthan, India",
"locality": "Rathore Nagar",
"parentId": 130,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 4400,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 4400,
"message": "",
"title": "Delivery Charge",
"amount": "4400",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=7289406~p=7~eid=00000189-4409-655f-011c-c967005e0725~srvts=1689063613791",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "5 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "10% OFF",
"subHeader": "ABOVE ₹1000",
"discountTag": "FLAT DEAL",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "201760",
"deliveryTime": 53,
"minDeliveryTime": 53,
"maxDeliveryTime": 53,
"lastMileTravel": 5,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "4.2",
"totalRatings": 5000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "346621",
"name": "Pizza Bar",
"uuid": "872a4c60-784c-485a-aa0e-3e50be31b116",
"city": "12",
"area": "Sodala",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "cwfxgvszchj8oelgv09r",
"cuisines": [
"Pizzas",
"Beverages"
],
"tags": [],
"costForTwo": 25000,
"costForTwoString": "₹250 FOR TWO",
"deliveryTime": 25,
"minDeliveryTime": 25,
"maxDeliveryTime": 25,
"slaString": "25 MINS",
"lastMileTravel": 2.9000000953674316,
"slugs": {
"restaurant": "pizza-bar-lal-kothi-lal-kothi",
"city": "jaipur"
},
"cityState": "12",
"address": "45 kailashpuri,just before Sri Sri Girls PG, Shiv Puri Colony, Sodala, Jaipur, Rajasthan, India",
"locality": "Shiv Puri Colony",
"parentId": 158340,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "2.9 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "",
"discountTag": "FLAT DEAL",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "346621",
"deliveryTime": 25,
"minDeliveryTime": 25,
"maxDeliveryTime": 25,
"lastMileTravel": 2.9000000953674316,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "3.7",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "513749",
"name": "Mughal Hotel",
"uuid": "95615765-bc71-40c4-8db8-e47a06f64172",
"city": "12",
"area": "C Scheme",
"totalRatingsString": "100+ ratings",
"cloudinaryImageId": "vxtpeqs2unxmwytfst3h",
"cuisines": [
"North Indian",
"Mughlai",
"Biryani",
"Snacks",
"Thalis"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 27,
"minDeliveryTime": 27,
"maxDeliveryTime": 27,
"slaString": "27 MINS",
"lastMileTravel": 1.600000023841858,
"slugs": {
"restaurant": "mughal-hotel-c-scheme-c-scheme",
"city": "jaipur"
},
"cityState": "12",
"address": "Shop No 56,Shri Ram Market, Jaipur, Rajasthan -302012",
"locality": "",
"parentId": 140947,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.6 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "513749",
"deliveryTime": 27,
"minDeliveryTime": 27,
"maxDeliveryTime": 27,
"lastMileTravel": 1.600000023841858,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "3.3",
"totalRatings": 100,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "73781",
"name": "Bombay Mishthan Bhandar (BMB) - Sanganeeri Gate",
"uuid": "6f72acd0-dc9f-44a9-ae4f-2895d2068f74",
"city": "12",
"area": "MI Road",
"totalRatingsString": "10000+ ratings",
"cloudinaryImageId": "127d6d2a1a4f3e995fba2c5dd93b574f",
"cuisines": [
"North Indian",
"Thalis",
"Chinese",
"Mughlai",
"Chaat",
"Punjabi",
"Desserts",
"Snacks",
"Rajasthani",
"Tandoor",
"Sweets",
"Indian",
"Beverages",
"Ice Cream",
"Italian",
"Pastas"
],
"tags": [],
"costForTwo": 30000,
"costForTwoString": "₹300 FOR TWO",
"deliveryTime": 28,
"minDeliveryTime": 28,
"maxDeliveryTime": 28,
"slaString": "28 MINS",
"lastMileTravel": 4.400000095367432,
"slugs": {
"restaurant": "bombay-mishthan-bhandar-mi-road-c-scheme",
"city": "jaipur"
},
"cityState": "12",
"address": "Sanganeri Gate, MI Road, Jaipur",
"locality": "C Scheme",
"parentId": 13662,
"unserviceable": false,
"veg": true,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 3000,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 3000,
"message": "",
"title": "Delivery Charge",
"amount": "3000",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=7459795~p=10~eid=00000189-4409-655f-011c-c968005e0a6c~srvts=1689063613791",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "4.4 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "73781",
"deliveryTime": 28,
"minDeliveryTime": 28,
"maxDeliveryTime": 28,
"lastMileTravel": 4.400000095367432,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "4.1",
"totalRatings": 10000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "45977",
"name": "Burger Farm",
"uuid": "1d358b51-3727-434f-a9f0-a7e27ac39cae",
"city": "12",
"area": "C Scheme",
"totalRatingsString": "10000+ ratings",
"cloudinaryImageId": "nzcyy3dllok64io32kva",
"cuisines": [
"American",
"Continental",
"Italian-American",
"Snacks",
"Grill",
"Beverages",
"Bakery",
"Desserts",
"Barbecue"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 19,
"minDeliveryTime": 19,
"maxDeliveryTime": 19,
"slaString": "19 MINS",
"lastMileTravel": 1.2000000476837158,
"slugs": {
"restaurant": "burger-farm-c-scheme-c-scheme",
"city": "jaipur"
},
"cityState": "12",
"address": "GROUND FLOOR PLOT NO.F-30, AZAD MARG C-SCHEME JAIPUR, Jaipur, Jaipur, Rajasthan-302001",
"locality": "Azad Marg",
"parentId": 4660,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.2 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "30% OFF",
"subHeader": "UPTO ₹75",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "45977",
"deliveryTime": 19,
"minDeliveryTime": 19,
"maxDeliveryTime": 19,
"lastMileTravel": 1.2000000476837158,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.2",
"totalRatings": 10000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "60482",
"name": "Roll Express",
"uuid": "b05af642-e240-45fc-9cfa-662a9181e54a",
"city": "12",
"area": "C Scheme",
"totalRatingsString": "5000+ ratings",
"cloudinaryImageId": "de58cec62dcd253e469655455e70b8ff",
"cuisines": [
"Fast Food",
"Snacks",
"North Indian",
"Chinese",
"Bengali",
"Beverages",
"Lucknowi",
"Mughlai",
"Indian",
"Continental"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 32,
"minDeliveryTime": 32,
"maxDeliveryTime": 32,
"slaString": "32 MINS",
"lastMileTravel": 1.2999999523162842,
"slugs": {
"restaurant": "roll-express-ramesh-marg-c-scheme",
"city": "jaipur"
},
"cityState": "12",
"address": " J-23 Subhash Marg, Bhagadiya bhawan, C-scheme, Jaipur",
"locality": "Ramesh Marg",
"parentId": 16561,
"unserviceable": false,
"veg": false,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.2 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "",
"discountTag": "FLAT DEAL",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "60482",
"deliveryTime": 32,
"minDeliveryTime": 32,
"maxDeliveryTime": 32,
"lastMileTravel": 1.2999999523162842,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "3.8",
"totalRatings": 5000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "222081",
"name": "Bombay Mishthan Bhandar(BMB)",
"uuid": "4f7a4695-8efe-40f4-92f9-f281384c08d1",
"city": "12",
"area": "Vaishali Nagar",
"totalRatingsString": "10000+ ratings",
"cloudinaryImageId": "127d6d2a1a4f3e995fba2c5dd93b574f",
"cuisines": [
"North Indian",
"Thalis",
"Rajasthani",
"Snacks",
"Sweets",
"Indian"
],
"tags": [],
"costForTwo": 30000,
"costForTwoString": "₹300 FOR TWO",
"deliveryTime": 24,
"minDeliveryTime": 24,
"maxDeliveryTime": 24,
"slaString": "24 MINS",
"lastMileTravel": 5.699999809265137,
"slugs": {
"restaurant": "bombay-misthan-bhandar-vaishali-nagar-vaishali-nagar",
"city": "jaipur"
},
"cityState": "12",
"address": "VAIBHAV COMPLEX AMRAPALI CIRCLE VAISHALI NAGAR",
"locality": "Amrapali Marg",
"parentId": 387367,
"unserviceable": false,
"veg": true,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"ribbon": [
{
"type": "PROMOTED"
}
],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 4400,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 4400,
"message": "",
"title": "Delivery Charge",
"amount": "4400",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "cid=7459796~p=13~eid=00000189-4409-655f-011c-c969005e0d2e~srvts=1689063613791",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "5.6 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "222081",
"deliveryTime": 24,
"minDeliveryTime": 24,
"maxDeliveryTime": 24,
"lastMileTravel": 5.699999809265137,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": true,
"avgRating": "4.1",
"totalRatings": 10000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "375271",
"name": "Burger Shack by Brown Sugar",
"uuid": "a5461352-9194-42b8-add3-ca6ce038674e",
"city": "12",
"area": "Subhash Nagar",
"totalRatingsString": "1000+ ratings",
"cloudinaryImageId": "b500d3558320c44fa781543edbe7eac6",
"cuisines": [
"American",
"Continental",
"Burgers",
"Snacks",
"Fast Food",
"Desserts",
"Beverages",
"Pizzas"
],
"tags": [],
"costForTwo": 20000,
"costForTwoString": "₹200 FOR TWO",
"deliveryTime": 16,
"minDeliveryTime": 16,
"maxDeliveryTime": 16,
"slaString": "16 MINS",
"lastMileTravel": 1.2000000476837158,
"slugs": {
"restaurant": "burger-shack-c-scheme-c-scheme",
"city": "jaipur"
},
"cityState": "12",
"address": "J-2 Shubhash Marg, Jamna Lal Bajaj Marg C-Scheme Jaipur",
"locality": "",
"parentId": 11388,
"unserviceable": false,
"veg": true,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.2 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "50% OFF",
"subHeader": "UPTO ₹100",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "375271",
"deliveryTime": 16,
"minDeliveryTime": 16,
"maxDeliveryTime": 16,
"lastMileTravel": 1.2000000476837158,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.0",
"totalRatings": 1000,
"new": false
},
"subtype": "basic"
},
{
"type": "restaurant",
"data": {
"type": "F",
"id": "44215",
"name": "Ghar Ka Swad",
"uuid": "f13a90b2-e4bc-4c5b-a716-9d686a49128b",
"city": "12",
"area": "C Scheme",
"totalRatingsString": "5000+ ratings",
"cloudinaryImageId": "lvbcoyeqin1gub0tycax",
"cuisines": [
"North Indian",
"Thalis",
"Mughlai",
"Punjabi",
"Rajasthani",
"Desserts"
],
"tags": [],
"costForTwo": 25000,
"costForTwoString": "₹250 FOR TWO",
"deliveryTime": 23,
"minDeliveryTime": 23,
"maxDeliveryTime": 23,
"slaString": "23 MINS",
"lastMileTravel": 1.2000000476837158,
"slugs": {
"restaurant": "ghar-ka-swad-civil-lines-lal-kothi",
"city": "jaipur"
},
"cityState": "12",
"address": "23 Civil Lines Road, Shivaji Nagar, Madrampur,,jaipur",
"locality": "Civil Lines Road",
"parentId": 4439,
"unserviceable": false,
"veg": true,
"select": false,
"favorite": false,
"tradeCampaignHeaders": [],
"chain": [],
"feeDetails": {
"fees": [
{
"name": "distance",
"fee": 2300,
"message": ""
},
{
"name": "time",
"fee": 0,
"message": ""
},
{
"name": "special",
"fee": 0,
"message": ""
}
],
"totalFees": 2300,
"message": "",
"title": "Delivery Charge",
"amount": "2300",
"icon": ""
},
"availability": {
"opened": true,
"nextOpenMessage": "",
"nextCloseMessage": ""
},
"longDistanceEnabled": 0,
"rainMode": "NONE",
"thirdPartyAddress": false,
"thirdPartyVendor": "",
"adTrackingID": "",
"badges": {
"imageBased": [],
"textBased": [],
"textExtendedBadges": []
},
"lastMileTravelString": "1.2 kms",
"hasSurge": false,
"aggregatedDiscountInfoV3": {
"header": "40% OFF",
"subHeader": "UPTO ₹80",
"discountTag": "",
"headerTypeV2": 0
},
"sla": {
"restaurantId": "44215",
"deliveryTime": 23,
"minDeliveryTime": 23,
"maxDeliveryTime": 23,
"lastMileTravel": 1.2000000476837158,
"lastMileDistance": 0,
"serviceability": "SERVICEABLE",
"rainMode": "NONE",
"longDistance": "NOT_LONG_DISTANCE",
"preferentialService": false,
"iconType": "EMPTY"
},
"promoted": false,
"avgRating": "4.4",
"totalRatings": 5000,
"new": false
},
"subtype": "basic"
}
];

// not using keys ( not acceptable ) <<<< index as key <<<< unique id ( best practice )

const Body = () => {
  return (
    <div className="body">
      <div className="Seach">Search</div>
      <div className="res-container">
       {resList.map((restaurant)=><RestaurantCard key={restaurant.data.id} resData={restaurant} />)}
      </div>
    </div>
  );  
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
