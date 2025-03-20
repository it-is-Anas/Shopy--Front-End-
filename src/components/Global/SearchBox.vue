    <template>
    <div class="g-search-box ">
        <input @focus="openOldSearch" type="text" v-model="searchFor" placeholder="Search for item" class="g-search-box_input">
        <auth-form-btn :label="'Search'" />
        <i @click="openMobileSearch" class=" g-search-box_icon fa fa-search"></i>
        <transition name="fade" >
            <div v-if="oldSearch" class="g-search-box_predictable">
                <p v-for="i in 100" class="g-search-box-predictable_one" :key="i" >first OLD search</p>
            </div>
        </transition>
        <div v-if="oldSearch" @click='closeOldSearch' class="g-bk" ></div>
    </div>
    <transition>
        <div class="g-search-box mobile" v-if="mobileSearch" >
            <input type="text" v-model="searchFor" placeholder="Search for item" class="g-search-box_input">
            <auth-form-btn :label="'Search'" />
            <teleport to='body' ><div @click="closeMobileSearch" class="g-bk g-bk-search-mobile"></div></teleport>
        </div>
    </transition>
</template>
<script>
import { ref } from 'vue';
import AuthFormBtn from '../Custom/Buttons/AuthFormBtn.vue';
export default {
    components:{ 
        AuthFormBtn,
    },
    setup(){
        const mobileSearch = ref(false);
        const oldSearch = ref(false);
        function openMobileSearch(){
            mobileSearch.value = true;
        }
        function closeMobileSearch(){
            mobileSearch.value = false;
        }
        function openOldSearch(){
            oldSearch.value = true;
        }
        function closeOldSearch(){
            oldSearch.value = false;
        }
        const searchFor = ref('');
        return {
            mobileSearch,
            openMobileSearch,
            closeMobileSearch,
            searchFor,
            oldSearch,
            openOldSearch,
            closeOldSearch,
        };
    },
}
</script>