<template>
    <svg class="svg-icon">
        <use :xlink:href="`#${iconName}`" />
    </svg>
</template>

<script>
export default {
    name: "SvgIcon",
    props: {
        iconName: {
            type: String,
            required: true
        }
    }
}
</script>

<style lang="scss" scoped>
.svg-icon {
    width: 1rem;
    height: 1rem;
    fill: currentColor !important;
    overflow: hidden;
}
</style>