import InputNumber from './components/InputNumber/inputNumber.vue'
export default {
    name: 'Setting',
    props: {
        popSettingOpen: {
            type: Boolean,
            default: false
        },
        inputNumber: 0
    },
    components: {
        InputNumber
    },
    methods: {
        updatePopSetting() {
            this.$emit('popSetting', false)
        },
    },
}