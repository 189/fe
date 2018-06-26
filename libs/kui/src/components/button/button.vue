<template>
    <button
        :type="htmlType"
        :class="classes"
        :disabled="disabled"
        @click="handleClick">
        <Icon class="kui-load-loop" type="loading" v-if="loading"></Icon>
        <Icon :type="icon" v-if="icon && !loading"></Icon>
        <span v-if="showSlot" ref="slot"><slot></slot></span>
    </button>
</template>
<script>
    import Icon from '../icon';
    import { oneOf } from '../../utils/assist';

    const prefix = 'kui-btn';

    export default {
        name: 'Button',
        components: { Icon },
        props: {
            type: {
                validator (value) {
                    return oneOf(value, ['primary', 'ghost', 'dashed', 'text', 'info', 'success', 'warning', 'error', 'default']);
                }
            },
            shape: {
                validator (value) {
                    return oneOf(value, ['circle', 'circle-outline']);
                }
            },
            size: {
                validator (value) {
                    return oneOf(value, ['small', 'large', 'default']);
                }
            },
            loading: Boolean,
            disabled: Boolean,
            htmlType: {
                default: 'button',
                validator (value) {
                    return oneOf(value, ['button', 'submit', 'reset']);
                }
            },
            icon: String,
            long: {
                type: Boolean,
                default: false
            }
        },
        data () {
            return {
                showSlot: true
            };
        },
        computed: {
            classes () {
                return [
                    `${prefix}`,
                    {
                        [`${prefix}-${this.type}`]: !!this.type,
                        [`${prefix}-long`]: this.long,
                        [`${prefix}-${this.shape}`]: !!this.shape,
                        [`${prefix}-${this.size}`]: !!this.size,
                        [`${prefix}-loading`]: this.loading != null && this.loading,
                        [`${prefix}-icon-only`]: !this.showSlot && (!!this.icon || this.loading)
                    }
                ];
            }
        },
        methods: {
            handleClick (event) {
                this.$emit('click', event);
            }
        },
        mounted () {
            this.showSlot = this.$slots.default !== undefined;
        }
    };
</script>
