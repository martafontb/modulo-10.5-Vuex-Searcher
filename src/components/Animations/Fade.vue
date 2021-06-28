<!-- TEMPLATE -->
<template>
    <transition-group 
      enter-active-class="animated fadeIn zoomIn" 
      leave-active-class="animated fadeOut zoomOut"
      tag="div">
        <slot></slot>   
    </transition-group>
</template>

 <!-- JAVASCRIPT -->
<script>
export default {

}
</script>

 <!-- CSS -->
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.5s ease;
}

.fade-enter-active {
    transition-delay:0.5s;
}

/* animation starts */
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* animation ends */
.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>