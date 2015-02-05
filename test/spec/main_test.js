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
  it('should add row to table', function () {
    var stock = {Name: "SuperCorp", Symbol: "SCRP", LastPrice: "11.34" };
    $('tr').length.should.equal(0);
    addStockToTable(stock);
    $('tr').length.should.equal(1);
  });
  it('it should use stock data in the append row', function () {
    var stock = {Name: "SuperCorp", Symbol: "SCRP", LastPrice: "11.34" },
      $row = addStockToTable(stock),
      $tds = $row.find('td');

    $tds.length.should.equal(3);
    $($tds[0]).text().should.equal('SuperCorp');
    $($tds[1]).text().should.equal('SCRP');
    $($tds[2]).text().should.equal('11.34');
  
  })
});

