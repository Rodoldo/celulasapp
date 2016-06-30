angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('menu.bEMVINDO', {
    url: '/page1',
    views: {
      'side-menu21': {
        templateUrl: 'templates/bEMVINDO.html',
        controller: 'bEMVINDOCtrl'
      }
    }
  })

  .state('menu.membros', {
    url: '/page2',
    views: {
      'side-menu21': {
        templateUrl: 'templates/membros.html',
        controller: 'membrosCtrl'
      }
    }
  })

  .state('menu.cLulas', {
    url: '/page3',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cLulas.html',
        controller: 'cLulasCtrl'
      }
    }
  })

  .state('menu.cLula', {
    url: '/page6',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cLula.html',
        controller: 'cLulaCtrl'
      }
    }
  })

  .state('menu.cADASTRO', {
    url: '/page5',
    views: {
      'side-menu21': {
        templateUrl: 'templates/cADASTRO.html',
        controller: 'cADASTROCtrl'
      }
    }
  })

  .state('menu', {
    url: '/side-menu21',
    templateUrl: 'templates/menu.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/side-menu21/page1')

  

});