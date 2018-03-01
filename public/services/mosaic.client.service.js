angular.module('webapp').service('MosaicService', ["$http", MosaicService]);

function MosaicService($http){
	return {
		mosaicListByNamespace: function(params, callback) {
			$http.post("/mosaic/mosaicListByNamespace", params).success(function(data){
				callback(data);
			});
		},
		mosaicList: function(callback) {
			$http.post("/mosaic/mosaicList").success(function(data){
				callback(data);
			});
		},
		mosaic: function(params, callback) {
			$http.post("/mosaic/mosaic", params).success(function(data){
				callback(data);
			});
		},
		mosaicTransferList: function(params, callback) {
			$http.post("/mosaic/mosaicTransferList", params).success(function(data){
				callback(data);
			});
		}
	}
}