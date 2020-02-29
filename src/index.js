// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix === [] || matrix === undefined) {
        return [];
    } else if (matrix.length == 0) {
        return [];
    } else {
        return matrix.reduce((value, elem, index) => {
            if ((index + 1) % 2 === 0) {
                value.push(...elem.reverse());
                return value;
            } else {
                value.push(...elem)
            }
            return value;
        }, []);
    }
}
