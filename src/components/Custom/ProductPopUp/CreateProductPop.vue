<template>
    <transition name="fade" >
        <div v-if="openProductPopUp" class="g-product-pop-up">
            <div class="g-close-btn-for-mobile" @click="toCloseProductPopup" >+</div>
            <div class="g-product-pop-up_title">Create Product :</div>
            <div class="g-product-pop-up_input-box">
                <div class="g-product-pop-up_label">Product Name:</div>
                <input type="text" v-model="productName" placeholder="Ice Creem" class="g-product_input">
            </div>
            <div class="g-product-pop-up_input-box">
                <div class="g-product-pop-up_label">Brand :</div>
                <input type="text" v-model="productBrand" placeholder="shopy" class="g-product_input">
            </div>
            <div class="g-product-pop-up_input-box">
                <div class="g-product-pop-up_label" >Price:</div>
                <input type="text" v-model="productPrice" placeholder="3.1" class="g-product_input">
            </div>
            <div style="display: none" class="g-product-pop-up_input-box">
                <div class="g-product-pop-up_label">Quentity:</div>
                <input type="text" v-model="productQty" placeholder="2" class="g-product_input">
            </div>
            <div class="g-product-pop-up_input-box">
                <div class="g-product-pop-up_label">Product Picture:</div>
                <input ref="productFile" @change="onFileChange"  type="file" placeholder="2" class="g-product_input">
            </div>
            <div class="g-product-pop-up_input-box  desc ">
                <div class="g-product-pop-up_label">Product description:</div>
                <!-- <input type="text"> -->
                <textarea class="g-product_input" v-model="productDesc" placeholder="Product Description ..." ></textarea>
            </div>
            <div class="g-product-pop-up_btn-box">
                <button class="user-cart_btn-sec user-cart_btn-sec"  @click="toCloseProductPopup" >Cancel</button>
                <button class="user-cart_btn-sec user-cart_btn-main" @click="createProduct" >Create</button>
            </div>
        </div>
    </transition>
    <div v-if="openProductPopUp" @click="toCloseProductPopup" class="g-bk bk-notfication g-bk-product"  ></div>
</template>
<script>
import {ref} from 'vue';
import { useStore } from 'vuex';


export default {
    setup(){
        const store = useStore();
        const openProductPopUp = ref(false);


        function toOpenProductPopup(){
            openProductPopUp.value = true;
        }
        function toCloseProductPopup(){
            openProductPopUp.value = !true;
        }

        const productName = ref('');
        const productDesc = ref('');
        const productPrice = ref('');
        const productQty = ref(1);
        const productBrand = ref('');
        let productFileImg = ref(null);

        function onFileChange(event) {
            productFileImg.value = event.target.files[0];
        }

        async function createProduct(){
            const formData = new FormData();
            formData.append('productImg', productFileImg.value);
            formData.append('name', productName.value);
            formData.append('desc', productDesc.value);
            formData.append('price', productPrice.value);
            formData.append('qty', productQty.value);
            formData.append('brand', productBrand.value);
            await store.dispatch('myProductStore/create',formData);
            toCloseProductPopup();
        }

        return{
            openProductPopUp,
            toOpenProductPopup,
            toCloseProductPopup,
            productName,
            productDesc,
            productQty,
            productPrice,
            productBrand,
            onFileChange,
            createProduct,


        };

    }
}
</script>