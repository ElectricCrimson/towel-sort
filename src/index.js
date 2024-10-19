
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix) {
        for (let i = 0; i < matrix.length; i += 1) {
            if ((i === 1) || ((i > 1) && (i % 2 !== 0))) {
                matrix[i].reverse();
            }
        }
        const arr = matrix.flat();
        return arr;
    } else {
        return [];
    }
}
