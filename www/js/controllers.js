angular.module('app.controllers', [])

.controller('bEMVINDOCtrl', function($scope) {
   $scope.mostrar = function (){
       var pessoas2 = localStorage.getItem('peoa');
       pessoas2.substr(1,(pessoas2.length - 1));
       pessoa2 = pessoas2.replace("null,", "");
       pessoa2 = "["+pessoa2+"]";
       $scope.valores =  JSON.parse(pessoa2);

   };

})

.controller('membrosCtrl', function($scope) {

      var pessoas2 = localStorage.getItem('peoa');

      pessoas2.substr(1,(pessoas2.length - 1));
      pessoa2 = pessoas2.replace("null,", "");
      pessoa2 = "["+pessoa2+"]";
      $scope.valores =  JSON.parse(pessoa2);
      //console.log("aaa");
      

})

.controller('cLulasCtrl', function($scope) {

})

.controller('cLulaCtrl', function($scope) {

})

.controller('cADASTROCtrl', function($scope,$state) {



    $scope.addPessoa = function (cadastro){



        if(localStorage.getItem('peoa') != null){
          var pessoas2 = localStorage.getItem('peoa')+","+JSON.stringify(cadastro);
        }else{
          var pessoas2 = JSON.stringify(localStorage.getItem('peoa'));
        }

        localStorage.setItem("peoa", pessoas2);
        //  console.log($scope.cadastro);

        $state.go("menu.membros");
    };


})
