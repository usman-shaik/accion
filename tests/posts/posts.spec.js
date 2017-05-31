describe('postService factory', function() {
  var postService, $q, $httpBackend;

  // Add Pokeapi endpoint
  var API = 'http://jsonplaceholder.typicode.com/posts';

  // Add mocked Pokéapi response
  var RESPONSE_SUCCESS = [
  {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
  }];
  beforeEach(angular.mock.module('postsModule'));

  // Inject $q and $httpBackend for testing HTTP requests
  beforeEach(inject(function(_postsFactory_, _$q_, _$httpBackend_) {
    postService = _postsFactory_;
    $q = _$q_;
    $httpBackend = _$httpBackend_;
  }));

  it('should exist', function() {
    expect(postService).toBeDefined();
  });

  describe('getAllPosts()', function() {
    var result;

    beforeEach(function() {
        // Initialize our local result object to an empty object before each test
      result = {};

      // Spy on our service call but allow it to continue to its implementation
      spyOn(postService, "getAllPosts").and.callThrough();
    });

    it('should return a postService when called with a valid name', function() {
      var search = 'pikachu';

      // Declare the endpoint we expect our service to hit and provide it with our mocked return values
      $httpBackend.whenGET(API).respond(200, $q.when(RESPONSE_SUCCESS));

      expect(postService.getAllPosts).not.toHaveBeenCalled();
      expect(result).toEqual({});

      postService.getAllPosts()
      .then(function(res) {
    	  console.log("Get all posts::::");
        result = res;
          console.log("check response:::"+JSON.stringify(res));
      });

      // Flush pending HTTP requests
      $httpBackend.flush();

      expect(postService.getAllPosts).toHaveBeenCalledWith();
      expect(result[0].userId).toEqual(1);
      
    });
  })
});