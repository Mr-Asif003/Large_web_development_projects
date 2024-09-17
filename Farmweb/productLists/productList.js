let productPic=document.getElementById("product-pic");
let inputFiles=document.getElementById("input-file")
let submitProduct=document.getElementById("submit-product")
let URLImg;
inputFiles.onchange=function(){
URLImg=productPic.src=URL.createObjectURL(inputFiles.files[0]);
}
let productList1Img=document.getElementById("product-list1");
submitProduct.addEventListener("click",()=>{
    alert("Congratulations Your Order-confirmed")
})

let cardlist=document.querySelector(".card-img-top");
cardlist.onchange=function(){
    cardlist.src=URL.createObjectURL(inputFiles.files[0]);
    }