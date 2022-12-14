class Utilities {
    async sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}

export default new Utilities();
