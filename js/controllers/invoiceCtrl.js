var formatDate = function(date){
  var dd = date.getDate(),
      mm = date.getMonth() + 1,
      yy = date.getFullYear();
  return dd +'-'+ mm +'-'+ yy;
};



var date = new Date(),
    now = formatDate(date);
date.setDate(date.getDate() + 30);
var feature = formatDate( date );

var defaultInvoice = {
  companyName: 'Spathon',
  invoiceNr: 1,
  invoiceDate: now,
  invoiceLastDate: feature,

  address: 'Ditt namn\nGata 123\nStad',
  invoiceAddress: 'Företagsnamn\nGata 123\nStad',

  message: 'Skriv ett meddelande eller något trevligt ;)',

  items: [
    {
      name: ':)',
      desc: 'A happy smile',
      quantity: 2,
      price: 100
    },
    {
      name: 'Hello',
      desc: 'Say hello',
      quantity: 1,
      price: 400
    },
    {
      name: 'Candy',
      desc: 'Candy eaten',
      quantity: 53,
      price: 3
    },
    {
      name: 'Good bye',
      desc: 'Get a good bye when leaving',
      quantity: 1,
      price: 800
    }
  ],

  VAT: 25,

  phone: '076 878 17 12',
  webpage: 'http://spathon.com',
  email: 'patrik@spathon.com',

  orgNr: '8803240459',
  vatNr: 'SE880324045901',
  swift: '',
  iban: '',

  bankgiro: '',
  plusgiro: '',
  bankAccount: ''
};

function InvoiceCtrl($scope){
  $scope.data = defaultInvoice;

  $scope.sum = function(){
    var total = 0;
    angular.forEach($scope.data.items, function(item) {
      total += (item.quantity * item.price) || 0;
    });
    return total;
  };

  $scope.addRow = function(){
    $scope.data.items.push({});
  };
  $scope.removeRow = function(){
    $scope.data.items.pop();
  };

  $scope.rowTotal = function(item){
    var tot = (item.quantity * item.price)
    return (tot) ? tot +':-' : '';
  }

  $scope.vatSum = function(){
    return ~~($scope.sum() * ($scope.data.VAT / 100));
  };

  $scope.totalSum = function(){
    return ~~($scope.sum() + $scope.vatSum());
  };

  $scope.print = function(data){
    return (data) ? '' : 'no-print';
  };

}







