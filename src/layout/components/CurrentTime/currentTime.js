import time from '@/assets/js/currentTime.js'

export default {
    name: 'CurrentTime',
    data() {
        return {
            currentTime: ''
        }
    },
    created() {
        setInterval(() => {
            this.updateTime()
        }, 1000)
        this.updateTime()
    },
    methods: {
        updateTime() {
            this.currentTime = time()
        }
    },
}