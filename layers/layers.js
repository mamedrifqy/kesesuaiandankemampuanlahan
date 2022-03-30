var wms_layers = [];

var format_Cabai_0 = new ol.format.GeoJSON();
var features_Cabai_0 = format_Cabai_0.readFeatures(json_Cabai_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cabai_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cabai_0.addFeatures(features_Cabai_0);
var lyr_Cabai_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Cabai_0, 
                style: style_Cabai_0,
                interactive: true,
    title: 'Cabai<br />\
    <img src="styles/legend/Cabai_0_0.png" /> Dataran Alluvial<br />\
    <img src="styles/legend/Cabai_0_1.png" /> Dataran Kolluvial<br />\
    <img src="styles/legend/Cabai_0_2.png" /> Igir<br />\
    <img src="styles/legend/Cabai_0_3.png" /> Lembah<br />\
    <img src="styles/legend/Cabai_0_4.png" /> Lereng<br />\
    <img src="styles/legend/Cabai_0_5.png" /> <br />'
        });

        var lyr_Sattelite_1 = new ol.layer.Tile({
            'title': 'Sattelite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_Roadmap_2 = new ol.layer.Tile({
            'title': 'Roadmap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_3 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_Terrain_4 = new ol.layer.Tile({
            'title': 'Terrain',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=p&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Kubis_5 = new ol.format.GeoJSON();
var features_Kubis_5 = format_Kubis_5.readFeatures(json_Kubis_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kubis_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kubis_5.addFeatures(features_Kubis_5);
var lyr_Kubis_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Kubis_5, 
                style: style_Kubis_5,
                interactive: true,
    title: 'Kubis<br />\
    <img src="styles/legend/Kubis_5_0.png" /> Dataran Alluvial<br />\
    <img src="styles/legend/Kubis_5_1.png" /> Dataran Kolluvial<br />\
    <img src="styles/legend/Kubis_5_2.png" /> Igir<br />\
    <img src="styles/legend/Kubis_5_3.png" /> Lembah<br />\
    <img src="styles/legend/Kubis_5_4.png" /> Lereng<br />\
    <img src="styles/legend/Kubis_5_5.png" /> <br />'
        });
var format_KemampuanLahan_6 = new ol.format.GeoJSON();
var features_KemampuanLahan_6 = format_KemampuanLahan_6.readFeatures(json_KemampuanLahan_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KemampuanLahan_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KemampuanLahan_6.addFeatures(features_KemampuanLahan_6);
var lyr_KemampuanLahan_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_KemampuanLahan_6, 
                style: style_KemampuanLahan_6,
                interactive: true,
    title: 'Kemampuan Lahan<br />\
    <img src="styles/legend/KemampuanLahan_6_0.png" /> Dataran Alluvial<br />\
    <img src="styles/legend/KemampuanLahan_6_1.png" /> Dataran Kolluvial<br />\
    <img src="styles/legend/KemampuanLahan_6_2.png" /> Igir<br />\
    <img src="styles/legend/KemampuanLahan_6_3.png" /> Lembah<br />\
    <img src="styles/legend/KemampuanLahan_6_4.png" /> Lereng<br />\
    <img src="styles/legend/KemampuanLahan_6_5.png" /> <br />'
        });
var format_Padi_7 = new ol.format.GeoJSON();
var features_Padi_7 = format_Padi_7.readFeatures(json_Padi_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Padi_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Padi_7.addFeatures(features_Padi_7);
var lyr_Padi_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Padi_7, 
                style: style_Padi_7,
                interactive: true,
    title: 'Padi<br />\
    <img src="styles/legend/Padi_7_0.png" /> Dataran Alluvial<br />\
    <img src="styles/legend/Padi_7_1.png" /> Dataran Kolluvial<br />\
    <img src="styles/legend/Padi_7_2.png" /> Igir<br />\
    <img src="styles/legend/Padi_7_3.png" /> Lembah<br />\
    <img src="styles/legend/Padi_7_4.png" /> Lereng<br />\
    <img src="styles/legend/Padi_7_5.png" /> <br />'
        });

lyr_Cabai_0.setVisible(true);lyr_Sattelite_1.setVisible(true);lyr_Roadmap_2.setVisible(true);lyr_OpenStreetMap_3.setVisible(true);lyr_Terrain_4.setVisible(true);lyr_Kubis_5.setVisible(true);lyr_KemampuanLahan_6.setVisible(true);lyr_Padi_7.setVisible(true);
var layersList = [lyr_Cabai_0,lyr_Sattelite_1,lyr_Roadmap_2,lyr_OpenStreetMap_3,lyr_Terrain_4,lyr_Kubis_5,lyr_KemampuanLahan_6,lyr_Padi_7];
lyr_Cabai_0.set('fieldAliases', {'Landform': 'Landform', 'PL': 'PL', 'Scoring': 'Scoring', 'Subjective': 'Subjective', 'Aritmathic': 'Aritmathic', 'Weight': 'Weight', 'Jenis_Tana': 'Jenis_Tana', });
lyr_Kubis_5.set('fieldAliases', {'Landform': 'Landform', 'PL': 'PL', 'Jenis_Tana': 'Jenis_Tana', 'Scoring': 'Scoring', 'Subjective': 'Subjective', 'Aritmathic': 'Aritmathic', 'Weight': 'Weight', });
lyr_KemampuanLahan_6.set('fieldAliases', {'Landform': 'Landform', 'Weight': 'Weight', 'Arithmatic': 'Arithmatic', 'Subjective': 'Subjective', 'PL': 'PL', });
lyr_Padi_7.set('fieldAliases', {'Landform': 'Landform', 'PL': 'PL', 'ARITMATIK': 'ARITMATIK', 'SUBJEKTIF': 'SUBJEKTIF', 'WEIGHT': 'WEIGHT', 'SKORING': 'SKORING', 'Jenis_Tana': 'Jenis_Tana', });
lyr_Cabai_0.set('fieldImages', {'Landform': 'TextEdit', 'PL': 'TextEdit', 'Scoring': 'TextEdit', 'Subjective': 'TextEdit', 'Aritmathic': 'TextEdit', 'Weight': 'TextEdit', 'Jenis_Tana': 'TextEdit', });
lyr_Kubis_5.set('fieldImages', {'Landform': 'TextEdit', 'PL': 'TextEdit', 'Jenis_Tana': 'TextEdit', 'Scoring': 'TextEdit', 'Subjective': 'TextEdit', 'Aritmathic': 'TextEdit', 'Weight': 'TextEdit', });
lyr_KemampuanLahan_6.set('fieldImages', {'Landform': 'TextEdit', 'Weight': 'TextEdit', 'Arithmatic': 'TextEdit', 'Subjective': 'TextEdit', 'PL': 'TextEdit', });
lyr_Padi_7.set('fieldImages', {'Landform': 'TextEdit', 'PL': 'TextEdit', 'ARITMATIK': 'TextEdit', 'SUBJEKTIF': 'TextEdit', 'WEIGHT': 'TextEdit', 'SKORING': 'TextEdit', 'Jenis_Tana': 'TextEdit', });
lyr_Cabai_0.set('fieldLabels', {'Landform': 'header label', 'PL': 'inline label', 'Scoring': 'inline label', 'Subjective': 'inline label', 'Aritmathic': 'inline label', 'Weight': 'inline label', 'Jenis_Tana': 'inline label', });
lyr_Kubis_5.set('fieldLabels', {'Landform': 'header label', 'PL': 'inline label', 'Jenis_Tana': 'inline label', 'Scoring': 'inline label', 'Subjective': 'inline label', 'Aritmathic': 'inline label', 'Weight': 'inline label', });
lyr_KemampuanLahan_6.set('fieldLabels', {'Landform': 'header label', 'Weight': 'inline label', 'Arithmatic': 'inline label', 'Subjective': 'inline label', 'PL': 'inline label', });
lyr_Padi_7.set('fieldLabels', {'Landform': 'header label', 'PL': 'inline label', 'ARITMATIK': 'inline label', 'SUBJEKTIF': 'inline label', 'WEIGHT': 'inline label', 'SKORING': 'inline label', 'Jenis_Tana': 'inline label', });
lyr_Padi_7.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});