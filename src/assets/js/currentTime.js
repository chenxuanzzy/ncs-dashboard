function time() {
    const pad = digit =>
    digit.toString().padStart(2, '0');
    const today = new Date();
    const hours = today.getHours();
    const minutes = today.getMinutes();
    const seconds = today.getSeconds();
    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

export default time