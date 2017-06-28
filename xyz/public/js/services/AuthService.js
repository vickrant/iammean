acjvSrvc.factory('authService', function($http,$log,constants) {
        return {

            get : function() {
            	console.log('inside console');
                return $http.get('/api/todos');
            },
            
            create : function(data ,cb){
                console.log(data);
                //console.log(modelname);
                $http({
                    url: constants.server.LoopbackServerUrl+'/api/users',
                    method: 'POST',
                    data: data,

                }).then(function(resp){
                    $log.log(resp.data);
                    cb(resp.data);
                },function(err){
                    $log.error("ERROR occurred");
                    cb(err.data.error);
                });
                  },
         
            delete : function(id) {
                return $http.delete('/api/todos/' + id);
            }
        }
    });