module ol4 {
    export class createMap {
        constructor(para: ICreateMap) {
            let map = new ol.Map({
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
            })
        }
    }
    interface ICreateMap {
        target: string
    }
}