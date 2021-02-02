var ol4;
(function (ol4) {
    var createMap = /** @class */ (function () {
        function createMap(para) {
            var map = new ol.Map({
                target: para.target,
                view: new ol.View({
                    center: ol.proj.fromLonLat([120.6402133, 23.546162]),
                    zoom: 8
                }),
                layers: [
                    new ol.layer.Tile({
                        source: new ol.source.OSM()
                    })
                ]
            });
        }
        return createMap;
    }());
    ol4.createMap = createMap;
})(ol4 || (ol4 = {}));
//# sourceMappingURL=ol4.js.map