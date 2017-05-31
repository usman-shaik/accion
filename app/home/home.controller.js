(function() {

    //console.log("controller loaded HomeController");


    angular.module("dustbinApp").controller("HomeController", homeController);

    function homeController($scope, postsFactory) {
    	
    	var home=this;
    	
        home.showLoader = false;



       // console.log("inside home controller");

        home.gridOptions = {
            enablePaginationControls: false,
            enableColumnMenus: false,
            enableSorting: true,
            paginationPageSize: 10,
            enableColumnResizing: true
        };

        home.gridOptions.columnDefs = [{
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

        home.gridOptions.onRegisterApi = function(gridApi) {
            home.gridApi = gridApi;
        };




        // rest api service call using promise
        home.showLoader = true;
        var result=postsFactory.getPosts();
        result.success(function(data){
        	console.log("total posts found::=====:"+data.length);
        	 home.showLoader = false;
             //console.log("=======" + JSON.stringify(data.length));
             //home.data = data;
             home.gridOptions.data = data;
             //console.log("total data::::" + home.data.length);
        }).error(function(data){
        	console.log("error in getting posts");
        	 home.showLoader = false;
             console.log("failed to load service");
        })





    }



})();