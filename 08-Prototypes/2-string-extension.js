(function () {
    String.prototype.ensureStart = function (str) {
        if (!this.startsWith(str)) {
            return str + this;
        }
        return this.toString();
    };

    String.prototype.ensureEnd = function (str) {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    };

    String.prototype.isEmpty = function () {
        return this.length === 0;
    };

    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }

        if (this.length <= n) {
            return this.toString();
        }

        let tokens = this.split(' ');
        let result = '';

        for (let word of tokens) {
            if ((result + word).length + 3 > n) {
                break;
            }
            result += (result ? ' ' : '') + word;
        }

        if (result.length > 0) {
            return result + '...';
        }

        return this.slice(0, n - 3) + '...';
    };

    String.format = function (string, ...params) {
        return string.replace(/{(\d+)}/g, (match, index) => {
            return params[index] !== undefined ? params[index] : match;
        });
    };
})();