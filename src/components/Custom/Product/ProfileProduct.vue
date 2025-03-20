<template>
    <div class="home-product" >
        <img v-if="imgUrl" class="home-product_img" :src="backIp+imgUrl" alt="">
        <img v-else class="home-product_img" src="../../../assets/logo.png" alt="">
        <h4 class="home-product_brand" >{{ brand }}</h4>
        <h4 class="home-product_title" >{{ name }}</h4>
        <h4 class="home-product_desc" >{{ desc }}</h4>
        <div class="home-product_footer">
            <p class="home-product_price">{{ price }}$</p>
            <i class="fa fa-trash home-product_save-btn g-profile-page_product-btc sec" @click="deleteProduct" ></i>
            <p class="home-product_add-to-cart  g-profile-page_product-btc main " @click="openEditPopUp" >Edit Product</p>
        </div>
    </div>
    <ProductPopUp 
        ref="editPopUp"
        :productName="name"
        :productDesc="desc"
        :productPrice="price"
        :productQty="qty"
        :productId="id"
        :productBrand="brand"
    />
</template>
<script>
import ProductPopUp from '@/components/Custom/ProductPopUp/EditProductPopUp.vue';
import { ref ,computed } from 'vue';
import { useStore } from 'vuex';
export default {
    components:{
        ProductPopUp,
    },
    props:{
        brand:{
            default:'brand',
        },
        name:{
            default:'product name',
        },
        desc:{
            default:'product description',
        },
        price:{
            default: '0',
        },qty:{
            default: '1',
        },id:{
            
        },imgUrl:{},
    },setup(props){
        const editPopUp = ref(null);
        const store = useStore();
        const backIp = computed(()=> store.getters['authStore/ip'].raw);

        async function deleteProduct  (){
            await store.dispatch('myProductStore/delete',{
                name: props.name,
                desc: props.desc,
                qty: props.qty,
                price: props.price,
                id: props.id,
            });
        }

        function openEditPopUp(){
            editPopUp.value.open();
        }

        return{
            editPopUp,
            deleteProduct,
            openEditPopUp,
            backIp
        };
    }, 
}
</script>