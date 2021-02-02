module ol4 {
    export class Map {
        private map: ol.Map;
        private para: IMap = {};
        constructor(_para?: IMap) {
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
        private createMap() {
            let map = this.map;

            map = new ol.Map({
                target: this.para.target
            })

            map.setView(this.para.view.getView());

            this.para.layers.forEach(function (value) {
                let layerTile = new LayerTile(value);
                map.addLayer(layerTile.getLayer());
            })

        }
        public getView() {
            return this.para.view;
        }
    }
    interface IMap {
        target?: string,
        view?: View,
        layers?: ILayerTile[]
    }
    /********************************/
    export class View {
        private view: ol.View;
        private para: IView = {};
        constructor(_para?: IView) {
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
        createView() {
            this.view = new ol.View({
                center: ol.proj.fromLonLat([120.6402133, 23.546162]),
                zoom: 8
            })
        }
        getView() {
            return this.view;
        }
    }
    interface IView {
        center?: [number, number],
        zoom?: number
    }
    /********************************/
    export class LayerTile {
        private layer: ol.layer.Tile;
        private para: ILayerTile = {};
        constructor(_para?: ILayerTile) {
            this.para = _para;
            this.createLayer();
        }
        createLayer() {
            if (this.para.source) {
                this.layer = new ol.layer.Tile({
                    source: this.para.source
                });
            }
            else if (this.para.layerUrl) {
                let layer = this.para.layerUrl;
                switch (layer.type.toLowerCase()) {
                    case "xyz":
                        this.layer = new ol.layer.Tile({
                            source: new ol.source.XYZ({
                                url: layer.url
                            })
                        });
                        break;
                };
            }
            else {
                alert('source, layerUrl 不可都為空');
            }
        }
        getLayer() {
            return this.layer;
        }
    }
    interface ILayerTile {
        layerUrl?: {
            type: string,
            url: string,
        },
        source?: ol.source.Tile
    }
    /********************************/
}