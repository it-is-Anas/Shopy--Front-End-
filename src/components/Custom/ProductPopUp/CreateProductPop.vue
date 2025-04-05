<template>
    <transition name="fade" >
        <div v-if="openProductPopUp" class="g-product-pop-up">
            <div class="g-close-btn-for-mobile" @click="toCloseProductPopup" >+</div>
            <div class="g-product-pop-up_title">Create Product :</div>
            <div class="g-product-pop-up_input-box">
                <div class="g-product-pop-up_label">Product Name *:</div>
                <input type="text" v-model="productName" placeholder="Ice Creem" class="g-product_input">
            </div>
            <div class="g-product-pop-up_input-box">
                <div class="g-product-pop-up_label">Brand :</div>
                <input type="text" v-model="productBrand" placeholder="shopy" class="g-product_input">
            </div>
            <div class="g-product-pop-up_input-box">
                <div class="g-product-pop-up_label" >Price *:</div>
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
                <textarea class="g-product_input" v-model="productDesc" placeholder="Product Description ..." ></textarea>
            </div>
            <div class="g-product-pop-up_btn-box err">
                <p class="g-product-pop-up_err-text" >{{ err }}</p>
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
import {computed, ref , inject} from 'vue';
import { useStore } from 'vuex';

import useVuelidate from '@vuelidate/core';
import { reactive } from 'vue';
import { helpers, required , numeric } from '@vuelidate/validators';

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

        

        const err = ref(null);

        function setErr(msg){
            err.value = msg;
            
        }

        const nameValidator = helpers.withMessage('product name should be string only atleast 3 char (required)', value =>
            value?.length >= 3 && value?.length <= 20   && /^[a-zA-Z ]+$/.test(value)
        );
        const brandValidator = helpers.withMessage('product Brand should Be String and numeric', value =>
            /^[a-zA-Z ]*$/.test(value)
        );
        const descValidator = helpers.withMessage('product desc should be String and nimuric', value =>
            /^[a-zA-Z0-9 ]*$/.test(value)
        );
        const priceValidator = helpers.withMessage('product price should be only nimuric (required)', value =>
            /^[+-]?(\d+(\.\d+)?|\.\d+)$/.test(value)
        );


        const state = reactive({
            productName ,
            productBrand,
            productPrice,
            productDesc,
        });
        const rules = computed(()=>{
            return {
                productName: {nameValidator},
                productBrand: {brandValidator},
                productPrice: {priceValidator},
                productDesc: {descValidator},
            };
        });

        const $v = useVuelidate(rules,state);


        async function createProduct(){
            $v.value.$validate();
            console.log($v.value.$errors);
            if($v.value.$error){
                if($v.value.productName.$error)
                    setErr($v.value.productName.$errors[0].$message);
                else if($v.value.productBrand.$error)
                    setErr($v.value.productBrand.$errors[0].$message);
                else if($v.value.productPrice.$error)
                    setErr($v.value.productPrice.$errors[0].$message);
                else if($v.value.productDesc.$error)
                setErr($v.value.productDesc.$errors[0].$message);
            }else {
                setErr(null);
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
            err,

        };

    }
}
</script>