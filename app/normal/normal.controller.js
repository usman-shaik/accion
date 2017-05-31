(function() {
    angular.module("dustbinApp").controller("NormalController", normalController);


    function normalController($scope, $http) {

       // console.log("normal controller loaded");
    	var normal=this;
    	normal.showLoader=false;
       normal.gridOptions = {
            enablePaginationControls: false,
            enableColumnMenus: false,
            enableSorting: true
            //paginationPageSize: 10,
            //enableColumnResizing: true
        };

        //9910344424 - kalpana

       normal.gridOptions.columnDefs = [{
                name: 'userId',
                width: '15%'
            },
            {
                name: 'id',
                width: '15%'
            },
            {
                name: 'title',
                width: '30%'
            },
            {
                name: 'body',
                width: '50%'
            }
        ];

       normal.gridOptions.onRegisterApi = function(gridApi) {
           normal.gridApi = gridApi;
        };
        normal.showLoader=true;
        $http.get('http://jsonplaceholder.typicode.com/posts')
            .then(function(response) {
            	normal.showLoader=false;
            	//$scope.result=response.data;
               normal.gridOptions.data = response.data;
            },function(err){
            	normal.showLoader=false;
            });
    }

})();