namespace HomeIndex {
    $(document).ready(function () {
        let map = new ol4.Map({
            layers: [{
                source: new ol.source.OSM()
            }]
        });

        new ol4.Map({
            target: "map2",
            view: map.getView(),
            layers: [{
                layerUrl: {
                    type: "XYZ",
                    url: "https://wmts.nlsc.gov.tw/wmts/PHOTO2/default/EPSG:3857/{z}/{y}/{x}"
                }
            }]
        });
    })
}