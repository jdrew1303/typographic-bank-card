var tbc = require('..'),
    assert = require('assert');

describe('tbc(input)', function () {
    it('format only card number', function () {
        assert(tbc("5441168611005540") === '5441 1686 1100 5540');
    });

    it('format card number with string', function () {
        assert(tbc("This is a credit card number 5441168611005540") === 'This is a credit card number 5441 1686 1100 5540');
    });

    it('format multiple card number with string', function () {
        assert(tbc("This is a credit card number 5441168611005540 and 6011881485017922")
            === 'This is a credit card number 5441 1686 1100 5540 and 6011 8814 8501 7922');
    });
});