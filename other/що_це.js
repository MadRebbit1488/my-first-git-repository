describe('getMaxSubSum', function () {
  it('maximal subsum of [1, 2, 3] equals 6', function () {
    assert.equal(getMaxSubSum([1, 2, 3]), 6);
  });

  it('maximal subsum of [-1, 2, 3, -9] equals 5', function () {
    assert.equal(getMaxSubSum([-1, 2, 3, -9]), 5);
  });

  it('maximal subsum of [-1, 2, 3, -9, 11] equals 11', function () {
    assert.equal(getMaxSubSum([-1, 2, 3, -9, 11]), 11);
  });

  it('maximal subsum of [-2, -1, 1, 2] equals 3', function () {
    assert.equal(getMaxSubSum([-2, -1, 1, 2]), 3);
  });

  it('maximal subsum of [100, -9, 2, -3, 5] equals 100', function () {
    assert.equal(getMaxSubSum([100, -9, 2, -3, 5]), 100);
  });

  it('maximal subsum of [] equals 0', function () {
    assert.equal(getMaxSubSum([]), 0);
  });

  it('maximal subsum of [-1] equals 0', function () {
    assert.equal(getMaxSubSum([-1]), 0);
  });

  it('maximal subsum of [-1, -2] equals 0', function () {
    assert.equal(getMaxSubSum([-1, -2]), 0);
  });

  it('maximal subsum of [2, -8, 5, -1, 2, -3, 2] equals 6', function () {
    assert.equal(getMaxSubSum([2, -8, 5, -1, 2, -3, 2]), 6);
  });
});

___________________________

describe("truncate", function() {
  it("усекает строку до заданной длины (включая многоточие)", function() {
    assert.equal(
      truncate("Вот, что мне хотелось бы сказать на эту тему:", 20),
      "Вот, что мне хотело…"
    );
  });

  it("не меняет и так короткие строки", function() {
    assert.equal(
      truncate("Всем привет!", 20),
      "Всем привет!"
    );
  });

});
___________________________
describe("extractCurrencyValue", function() {

  it("возвращает для строки $120 число 120", function() {
    assert.strictEqual(extractCurrencyValue('$120'), 120);
  });


});
___________________________
<button 
onclick
="alert('Hello')">Click me.</button>
___________________________