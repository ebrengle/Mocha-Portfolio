/* jshint mocha: true, expr: true, strict: false */

describe('test suite', function () {
  it('should assert true', function() {
    true.should.be.true;
    false.should.be.false;
  });
});

describe('hello', function () {
  it('should return world', function () {
    hello().should.equal('world');
  });
});

describe('getStock', function () {
  it('should return the stock object', function(done){
    getStock('AAPL', function (stock) {
      stock.Name.should.equal('Apple Inc');
      done();
    });

   //getStock('MSFT', function (stock) {
     //stock.Name.should.equal('Microsoft Corp');
   //});
  });
});

describe('addStockToTable', function () {
  it('should use stock info to append to table', function () {
    var stock = {Name: "SuperCorp", Symbol: "SCRP", LastPrice: "11.34" };
    $('tr').length.should.equal(0);
    addStockToTable(stock);
    $('tr').length.should.equal(1);
  });
});

