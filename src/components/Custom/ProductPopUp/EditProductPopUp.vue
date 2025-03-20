<template>
    <transition name="fade" >
            <div v-if="popUp" class="g-product-pop-up">
                <div class="g-close-btn-for-mobile" @click="close" >+</div>
                <div class="g-product-pop-up_title">Edit Your Product :</div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Product Name:</div>
                    <input type="text" v-model="name" :placeholder="productName"   class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label" >Pric:</div>
                    <input type="text" v-model="price" :placeholder="productPrice"  class="g-product_input">
                </div>
                <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Brand :</div>
                    <input type="text" v-model="brand" :placeholder="brand"   class="g-product_input">
                </div>
                <!-- <div class="g-product-pop-up_input-box">
                    <div class="g-product-pop-up_label">Product Picture:</div>
                    <input ref="productFile" @change="onFileChange"  type="file" placeholder="2" class="g-product_input">
                </div> -->
                <div class="g-product-pop-up_input-box  desc ">
                    <div class="g-product-pop-up_label">Product description:</div>
                    <!-- <input type="text"> -->
                    <textarea class="g-product_input" v-model="desc"   :placeholder="productDesc" ></textarea>
                </div>
                <div class="g-product-pop-up_btn-box">
                    <button class="user-cart_btn-sec user-cart_btn-sec" @click="close" >Cancel</button>
                    <button class="user-cart_btn-sec user-cart_btn-main" @click="updateProduct"  >update</button>
                </div>
            </div>
        </transition>
        <!-- ================= -->
        <div v-if="popUp" @click="close" class="g-bk bk-notfication g-bk-product"  ></div>
</template>

<script>
import { ref } from 'vue';
import { useStore } from 'vuex';
export default {
    props:{
        productName:{
            default: 'product name'
        },
        productDesc:{
            default: 'product desc'
        },
        productQty:{
            default: 'product qty'
        },
        productPrice:{
            default: 'product price'
        },productId:{},
        productBrand:{

        }
    },
    setup(props){
        const popUp = ref(!true);
        function open(){
            popUp.value = true;
        }
        function close(){
            popUp.value = !true;
        }
        const name = ref(props.productName);
        const desc = ref(props.productDesc);
        const qty = ref(props.productQty);
        const price = ref(props.productPrice);
        const brand = ref(props.productBrand);
        let productFileImg = ref(null);
        const store = useStore();
        async function updateProduct  (){
            await store.dispatch('myProductStore/update',{
                name: name.value,
                desc: desc.value,
                qty: qty.value,
                price: price.value,
                id: props.productId,
                brand: brand.value,
            });
            close();
        }
        function onFileChange(event) {
            productFileImg.value = event.target.files[0];
        }
        
        return{
            popUp,
            open,
            close,
            updateProduct,
            name,
            desc,
            price,
            qty,
            brand,
            onFileChange,
        };
    },
}
</script>