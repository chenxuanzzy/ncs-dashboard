<template>
    <input type="number" placeholder="數值" min="0" max="100" v-model="inputNumber" @keyup="inputNum($event.target)">
</template>

<script src="./inputNumber.js"></script>