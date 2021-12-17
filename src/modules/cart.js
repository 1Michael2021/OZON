const cart = () => {
   const cartBtn = document.getElementById("cart");
   const cartModal = document.querySelector(".cart");
   const cartClose = cartModal.querySelector(".cart-close");
   console.dir(cartBtn);
   cartBtn.addEventListener("click", () => {
      cartModal.style.display = "flex";
   });
   cartClose.addEventListener("click", () => {
      cartModal.style.display = "";
   });
};
export default cart;
