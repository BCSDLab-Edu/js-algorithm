class DefaultMap extends Map {
    constructor(defaultFn, entries) {
        super(entries);
        this.default = defaultFn;
    }

    get(key) {
        if (!this.has(key)) this.set(key, this.default());

        return super.get(key);
    }

    pop(key) {
        const ret = this.get(key);
        super.delete(key);

        return ret;
    }
}

module.exports = {
    DefaultMap: DefaultMap
};
