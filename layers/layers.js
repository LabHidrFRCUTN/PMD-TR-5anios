ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:4326").setExtent([-62.901058, -34.168545, -61.980719, -33.244364]);
var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleHybrid_1 = new ol.layer.Tile({
            'title': 'Google Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenTopomap_2 = new ol.layer.Tile({
            'title': 'OpenTopomap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_PMD5aos_3 = new ol.format.GeoJSON();
var features_PMD5aos_3 = format_PMD5aos_3.readFeatures(json_PMD5aos_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_PMD5aos_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PMD5aos_3.addFeatures(features_PMD5aos_3);
var lyr_PMD5aos_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PMD5aos_3, 
                style: style_PMD5aos_3,
                interactive: true,
    title: 'PMD 5 años<br />\
    <img src="styles/legend/PMD5aos_3_0.png" /> 0 mm - 36 mm<br />\
    <img src="styles/legend/PMD5aos_3_1.png" /> 36 mm - 50 mm<br />\
    <img src="styles/legend/PMD5aos_3_2.png" /> 50 mm - 71 mm<br />\
    <img src="styles/legend/PMD5aos_3_3.png" /> 71 mm - 86 mm<br />\
    <img src="styles/legend/PMD5aos_3_4.png" /> 86 mm - 98 mm<br />\
    <img src="styles/legend/PMD5aos_3_5.png" /> 98 mm - 116 mm<br />\
    <img src="styles/legend/PMD5aos_3_6.png" /> 116 mm - 694 mm<br />'
        });
var format_IsohietasPMD5aos_4 = new ol.format.GeoJSON();
var features_IsohietasPMD5aos_4 = format_IsohietasPMD5aos_4.readFeatures(json_IsohietasPMD5aos_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_IsohietasPMD5aos_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_IsohietasPMD5aos_4.addFeatures(features_IsohietasPMD5aos_4);
var lyr_IsohietasPMD5aos_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_IsohietasPMD5aos_4, 
                style: style_IsohietasPMD5aos_4,
                interactive: false,
                title: '<img src="styles/legend/IsohietasPMD5aos_4.png" /> Isohietas PMD 5 años'
            });
var format_LimiteProvincial_5 = new ol.format.GeoJSON();
var features_LimiteProvincial_5 = format_LimiteProvincial_5.readFeatures(json_LimiteProvincial_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_LimiteProvincial_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimiteProvincial_5.addFeatures(features_LimiteProvincial_5);
var lyr_LimiteProvincial_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_LimiteProvincial_5, 
                style: style_LimiteProvincial_5,
                interactive: false,
                title: '<img src="styles/legend/LimiteProvincial_5.png" /> LimiteProvincial'
            });

lyr_GoogleMaps_0.setVisible(false);lyr_GoogleHybrid_1.setVisible(true);lyr_OpenTopomap_2.setVisible(false);lyr_PMD5aos_3.setVisible(true);lyr_IsohietasPMD5aos_4.setVisible(true);lyr_LimiteProvincial_5.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_GoogleHybrid_1,lyr_OpenTopomap_2,lyr_PMD5aos_3,lyr_IsohietasPMD5aos_4,lyr_LimiteProvincial_5];
lyr_PMD5aos_3.set('fieldAliases', {'Latitud': 'Latitud', 'Longitud': 'Longitud', 'PMD 5 años': 'PMD 5 años [mm]', });
lyr_IsohietasPMD5aos_4.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_LimiteProvincial_5.set('fieldAliases', {'gid': 'gid', });
lyr_PMD5aos_3.set('fieldImages', {'Latitud': 'TextEdit', 'Longitud': 'TextEdit', 'PMD 5 años': 'TextEdit', });
lyr_IsohietasPMD5aos_4.set('fieldImages', {'fid': 'Hidden', 'ID': 'Hidden', 'ELEV': 'Hidden', });
lyr_LimiteProvincial_5.set('fieldImages', {'gid': 'Hidden', });
lyr_PMD5aos_3.set('fieldLabels', {'Latitud': 'inline label', 'Longitud': 'inline label', 'PMD 5 años': 'inline label', });
lyr_IsohietasPMD5aos_4.set('fieldLabels', {});
lyr_LimiteProvincial_5.set('fieldLabels', {});
lyr_LimiteProvincial_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});