// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var starter = angular.module('starter', ['ionic', 'ngRoute'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.Keyboard) {
      window.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }
  });
});

starter.config(['$routeProvider', function($routeProvider){
  $routeProvider.
  when('/', {
    templateUrl: '../Login/login.html',
    controller: 'loginController'
  }).
  otherwise({
    redirectTo: '/'
})
}]);

starter.controller('loginController', function($scope, $ionicPopup){

  $scope.selectOnClick = function(){
    if($scope.selectO == 1)
    {
      document.getElementById("hell1").style.color = "black";
      document.getElementById("hell2").style.color = "#9a9a9a";
      document.getElementById("phonetd").classList.add('tdborderbottom');
      document.getElementById("emailtd").classList.remove('tdborderbottom');
      document.getElementById("emailAddressi").style.display = 'none';
      document.getElementById("phoneNumberi").style.display = 'block';
    }
    else if($scope.selectO == 2)
    {
      document.getElementById("hell1").style.color = "#9a9a9a";
      document.getElementById("hell2").style.color = "black";
      document.getElementById("phonetd").classList.remove('tdborderbottom');
      document.getElementById("emailtd").classList.add('tdborderbottom');
      document.getElementById("emailAddressi").style.display = 'block';
      document.getElementById("phoneNumberi").style.display = 'none';
    }
  }

  $scope.onChangeInput = function(id){
    //signupemaili

    console.log('asdsad email');

    if(id == 1)
    {

    if(document.getElementById("signupPhonei").value.length > 0){
      document.getElementById("nextButtoni").style.backgroundColor = "#3897f1";
      document.getElementById("nextButtoni").style.color = "white";
      console.log("applied");
    }
    else{
      document.getElementById("nextButtoni").style.backgroundColor = "transparent";
      document.getElementById("nextButtoni").style.color = "#c3ddf4";
      
      console.log("applied else");
    }

  }
    if(id == 2)
    {
      if(document.getElementById("signupemaili").value.length > 0){
        document.getElementById("nextButtoni").style.backgroundColor = "#3897f1";
        document.getElementById("nextButtoni").style.color = "white";
        console.log("applied");
      }
      else{
        document.getElementById("nextButtoni").style.backgroundColor = "transparent";
        document.getElementById("nextButtoni").style.color = "#c3ddf4";
        
        console.log("applied else ", id);
      }
    }
  }

  $scope.countryCodes = [
    {country: 'Pakistan', code: '+92', short: 'PK'},
    {country: 'India', code: '+91', short: 'IN'},
    {country: 'USA', code: '+1',  short: 'US'}
  ];

  $scope.selectedCode = $scope.countryCodes[0].short + " " + $scope.countryCodes[0].code;

  // When button is clicked, the popup will be shown...
  $scope.showPopup = function() {
    $scope.data = {}

    $scope.countryCodeList = "";

    $scope.countryCodes.forEach(element => {
      $scope.countryCodeList =  $scope.countryCodeList + `<tr><td><a href="javascript:;" class="countryCodeRow" style="color: black; text-decoration:none; padding-left: 2%;" on-tap="onCodeSelect('` + element.short + `','` + element.code + `')">` + element.country + ` (` + element.code + `)</a>` + `</td></tr>`;      
    });

    $scope.popupHtml = `<table class="countryCodeTable">
    <tr>
        <td>
        <label class="item item-input" style="border:0; height: 30px;"><i class="icon ion-search placeholder-icon"></i><input type = "text" placeholder = "Country name or code" class="countryCodeInput" ng-model = "data.model"></label>
        </td>
    </tr>` 
        + $scope.countryCodeList +
        `
</tr>
</table>`;
  
    // Custom popup
    var myPopup = $ionicPopup.show({
       template: $scope.popupHtml,
       title: 'SELECT YOUR COUNTRY',
       subTitle: '',
       scope: $scope,
       cssClass: 'custom-popup',
    
        // buttons: [
        //   /*{ text: 'Cancel' },*/ {
        //      text: '<b>Save</b>',
        //      type: 'button-positive',
        //      onTap: function(e) {
          
        //         if (!$scope.data.model) {
        //            //don't allow the user to close unless he enters model...
        //            e.preventDefault();
        //         } else {
        //            return $scope.data.model;
        //         }
        //      }
        //   }
        // ]
    });

    $scope.onCodeSelect = function(short, code) {
    //   $scope.$watch('short', function () {
    //     console.log('asdasdsad fly');
    //     console.log($scope.short); 
    // });

      $scope.selectedCode = short + " " + code;
      myPopup.close();
    }


    myPopup.then(function(res) {
       console.log('Tapped!', res);
    });    
  };

  console.log('Login Controller');

});
  
