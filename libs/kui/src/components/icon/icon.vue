<template>
    <i :class="classes" :style="styles" @click="handleClick"></i>
</template>
<script>
    const prefix = 'kui-icon';

    export default {
        name: 'Icon',
        props: {
            type: { type : String, required : true },
            size: [Number, String],
            color: String
        },
        computed: {
            classes () {
              return [prefix, prefix + '-' + this.type];
            },
            styles () {
              const style = {};
              if (this.size) {
                style['font-size'] = `${this.size}px`;
              }
              if (this.color) {
                style.color = this.color;
              }
              return style;
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        }
    }; 
</script>
