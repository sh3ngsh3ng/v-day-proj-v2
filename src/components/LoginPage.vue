<template>
    <div id="login-page">
        <div class="searchBox">
            <input v-model="password" class="searchInput" type="text" name="" placeholder="Password">
            <button class="searchButton" href="#">
                <v-icon name="bi-calendar-heart"></v-icon>
            </button>
        </div>
    </div>

</template>



<script>
    import OhVueIcon from "oh-vue-icons"
    export default {
        data: function () {
            return {
                password: ""
            }
        },
        components: {
            "v-icon": OhVueIcon
        },
        watch: {
            password: function (newState) {
                if (newState == 'shirley') {
                    this.$emit('login-success', true)
                }
            }
        }
    };
</script>




<style scoped>
    #login-page {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    v-icon {
        color: pink
    }

    .searchBox {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, 50%);
        background: #e4d4c3;
        height: 30px;
        border-radius: 30px;
        padding: 10px;

    }

    .searchBox:hover>.searchInput {
        width: 100px;
        padding: 0 6px;
    }

    .searchBox:hover>.searchButton {
        background: white;
        color: #2f3640;
    }

    .searchButton {
        color: white;
        float: right;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        background: #e95757;
        display: flex;
        justify-content: center;
        align-items: center;
        transition: 0.4s;
    }

    .searchInput {
        border: none;
        background: none;
        outline: none;
        float: left;
        padding: 0;
        color: white;
        font-size: 16px;
        transition: 0.4s;
        line-height: 40px;
        width: 0px;
    }

    @media screen and (max-width: 620px) {
        .searchBox:hover>.searchInput {
            width: 80px;
            padding: 0 6px;
        }
    }
</style>