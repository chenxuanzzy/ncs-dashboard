
export default {
    name: 'InputNumber',
    data() {
        return {
            inputNumber: ''
        }
    },
    methods: {
        inputNum(target) {
            let boolean = new RegExp("^[1-9][0-9]*$").test(target.value)
            if(!boolean){
                this.inputNumber = ' '
            } else if(target.value == '') {
                this.inputNumber = ' '
            } else if(target.value > 100) {
                this.inputNumber = ' '
            }
        }
    },
}