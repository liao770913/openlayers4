var ol4;
(function (ol4) {
    var Map = /** @class */ (function () {
        function Map(_para) {
            this.para = {};
            if (_para && _para.target) {
                this.para.target = _para.target;
            }
            else {
                this.para.target = "map";
            }
            if (_para && _para.view) {
                this.para.view = _para.view;
            }
            else {
                this.para.view = new View();
            }
            if (_para && _para.layers) {
                this.para.layers = _para.layers;
            }
            else {
                this.para.layers = [{
                        source: new ol.source.OSM()
                    }];
            }
            this.createMap();
        }
        Map.prototype.createMap = function () {
            var map = this.map;
            map = new ol.Map({
                target: this.para.target
            });
            map.setView(this.para.view.getView());
            this.para.layers.forEach(function (value) {
                var layerTile = new LayerTile(value);
                map.addLayer(layerTile.getLayer());
            });
        };
        Map.prototype.getView = function () {
            return this.para.view;
        };
        return Map;
    }());
    ol4.Map = Map;
    /********************************/
    var View = /** @class */ (function () {
        function View(_para) {
            this.para = {};
            if (_para && _para.center) {
                this.para.center = _para.center;
            }
            else {
                this.para.center = ol.proj.fromLonLat([120.6402133, 23.546162]);
            }
            if (_para && _para.zoom) {
                this.para.zoom = _para.zoom;
            }
            else {
                this.para.zoom = 8;
            }
            this.createView();
        }
        View.prototype.createView = function () {
            this.view = new ol.View({
                center: ol.proj.fromLonLat([120.6402133, 23.546162]),
                zoom: 8
            });
        };
        View.prototype.getView = function () {
            return this.view;
        };
        return View;
    }());
    ol4.View = View;
    /********************************/
    var LayerTile = /** @class */ (function () {
        function LayerTile(_para) {
            this.para = {};
            this.para = _para;
            this.createLayer();
        }
        LayerTile.prototype.createLayer = function () {
            if (this.para.source) {
                this.layer = new ol.layer.Tile({
                    source: this.para.source
                });
            }
            else if (this.para.layerUrl) {
                var layer = this.para.layerUrl;
                switch (layer.type.toLowerCase()) {
                    case "xyz":
                        this.layer = new ol.layer.Tile({
                            source: new ol.source.XYZ({
                                url: layer.url
                            })
                        });
                        break;
                }
                ;
            }
            else {
                alert('source, layerUrl 不可都為空');
            }
        };
        LayerTile.prototype.getLayer = function () {
            return this.layer;
        };
        return LayerTile;
    }());
    ol4.LayerTile = LayerTile;
    /********************************/
})(ol4 || (ol4 = {}));
//# sourceMappingURL=ol4.js.map