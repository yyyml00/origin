<template>
    <!-- <div class="userInfo"> -->
    <div class="gobackBox">
        <button @click="goBack" class="goback"><i class="fa fa-mail-reply"></i>返回 
        </button>
        <button @click="gonext" class="goback gonext">前进<i class="fa fa-mail-forward"></i>
        </button>
    </div>

    <!-- </div> -->
</template>
<script>
export default {
     methods: {
      goBack() {
        this.$router.go(-1)
      },
      gonext() {
          this.$router.go(+1)
      }
    }
}
</script>
<style scoped>
    .gobackBox {
        background-color: rgb(87, 87, 228);
    }
    .goback {
        width: 100px;
        background-color: rgb(87, 87, 228);
        height: 40px;
        line-height: 40px;
        color: white;
    }
    .goback:hover {
        background-color: blue;
    }
    .goback > i {
        margin: 0 8px;
    }
    .gonext {
        float: right;
    }

</style>
