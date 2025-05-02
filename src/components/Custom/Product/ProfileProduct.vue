<template>
    <div class="home-product" >
        <img  class="home-product_img" :src="imgSrc" alt="">
        <!-- <h4 class="home-product_brand" >{{ brand }}</h4> -->
        <div class="home-product_name-price-box">
            <h4 class="home-product_title" >{{ name }}</h4>
            <p class="home-product_price">{{ price }}$</p>
        </div>
        <h4 class="home-product_desc" :class="[{'empty': !desc}]"  >{{ description }}</h4>
        <div class="home-product_footer">
            <div class="home-product-footer_rate-box">
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate >= 1}]" ></i>
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate >= 2}]" ></i>
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate >= 3}]" ></i>
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate >= 4}]" ></i>
                <i class=" home-product-footer-rate-box_star-icon  fa fa-star "  :class="[{'gold': rate === 5}]" ></i>
            </div>
            <div class="home-product_footer">
                <i class="fa fa-trash home-product_save-btn g-profile-page_product-btc sec" @click="deleteProduct" ></i>
                <i class="fa fa-cog home-product_add-to-cart  g-profile-page_product-btc main " @click="openEditPopUp" ></i>
                <!-- <p class="home-product_add-to-cart  g-profile-page_product-btc main " @click="openEditPopUp" >Edit Product</p> -->
            </div>
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
            
        },imgUrl:{
            default: null,
            type: String,
        }
        ,rate: {
            type: Number,
            default: 3,
        }
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


        const imgSrc = computed(()=>{
            if(props.imgUrl){
                return backIp.value + props.imgUrl;
            }
            return require('@/assets/logo.png');
        });

        const description = computed(()=>{
            const desc = props.desc;
            if(desc){
                if(desc.length <= 136 ){
                    return desc;
                }
                const newDesc = desc.slice(0,134) + ' ...';
                return newDesc;
            }
            return 'DONT HAS A DESCRIPTION';
        });

        return{
            editPopUp,
            deleteProduct,
            openEditPopUp,
            backIp,
            imgSrc,
            description,
        };
    }, 
}
</script>