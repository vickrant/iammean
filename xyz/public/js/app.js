angular.module('acjv', ['helpers'])
// config(function() { 
//    // provider-injector
//   // This is an example of config block.
//   // You can have as many of these as you want.
//   // You can only inject Providers (not instances)
//   // into config blocks.
// })

  // instance-injector
  // This is an example of a run block.
  // You can have as many of these as you want.
  // You can only inject instances (not Providers)
  // into run blocks


.config(["$provide", "$locationProvider",'toastrConfig',function($provide, $locationProvider,toastrConfig) {
         
            angular.extend(toastrConfig, {
            allowHtml: false,
            closeButton: false,
            closeHtml: '<button>&times;</button>',
            extendedTimeOut: 500,
            positionClass: "toast-bottom-left",
            iconClasses: {
                error: 'toast-error',
                info: 'toast-info',
                success: 'toast-success',
                warning: 'toast-warning'
            },
            messageClass: 'toast-message',
            onHidden: null,
            onShown: null,
            onTap: null,
            progressBar: false,
            tapToDismiss: true,
            templates: {
                toast: 'directives/toast/toast.html',
                progressbar: 'directives/progressbar/progressbar.html'
            },
            timeOut: 3500,
            titleClass: 'toast-title',
            toastClass: 'toast'
        });

    }])

.run(['$state', '$rootScope',
        function($state, $rootScope) {
            angular.element = jQuery.noConflict();
            $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams, options) {
            alert('adasd');
            console.log(toState);
            console.log(fromState);
                // handle route changes
            });

        }
    ])

var acjvRoutes = angular.module('acjv.routes', []);
var acjvCtrl = angular.module('acjv.controllers', []);
var acjvSrvc = angular.module('acjv.services', []);
var acjvDir = angular.module('acjv.directives', []);
var acjvConstant = angular.module('acjv.constants',[]);
