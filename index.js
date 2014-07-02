module.exports = dancer;

/*
 * Create a dancer who knows an array of moves. The returned dancer is a function
 * that returns an ascii string cycling through a provided number of moves.
 * Negative lengths will cycle through the dance moves in reverse order.
 */
function dancer (moves) {
    return function (length) {
        var step = 1,
            begin = 0,
            length = (typeof length === 'number' ? length || 0 : 0);
            end = length;

        if (length < 0) {
            // go through moves backwards, always starting with last move
            step = -1;
            length = length * -1;
            begin = length + moves.length - 1 - (length % moves.length);
            end = begin - length;
        }

        dance = [];

        for (var i = begin; i !== end; i += step) {
            dance.push(moves[i % moves.length]);
        }

        return dance.join(' ');
    }
}
