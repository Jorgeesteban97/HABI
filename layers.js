var wms_layers = [];

var format_Colopuntos_0 = new ol.format.GeoJSON();
var features_Colopuntos_0 = format_Colopuntos_0.readFeatures(json_Colopuntos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colopuntos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colopuntos_0.addFeatures(features_Colopuntos_0);
var lyr_Colopuntos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Colopuntos_0, 
                style: style_Colopuntos_0,
                interactive: true,
                title: '<img src="styles/legend/Colopuntos_0.png" /> Colopuntos'
            });

lyr_Colopuntos_0.setVisible(true);
var layersList = [lyr_Colopuntos_0];
lyr_Colopuntos_0.set('fieldAliases', {'F1': 'F1', 'Identifica': 'Identifica', 'Activo': 'Activo', 'Fecha_fina': 'Fecha_fina', 'Fecha_inic': 'Fecha_inic', 'Final_Lati': 'Final_Lati', 'Final_Long': 'Final_Long', 'Valorarr_1': 'Valorarr_1', 'Valorven_1': 'Valorven_1', 'NOMBRE_DPT': 'NOMBRE_DPT', 'NOMBRE_MPI': 'NOMBRE_MPI', });
lyr_Colopuntos_0.set('fieldImages', {'F1': '', 'Identifica': '', 'Activo': '', 'Fecha_fina': '', 'Fecha_inic': '', 'Final_Lati': '', 'Final_Long': '', 'Valorarr_1': '', 'Valorven_1': '', 'NOMBRE_DPT': '', 'NOMBRE_MPI': '', });
lyr_Colopuntos_0.set('fieldLabels', {'F1': 'no label', 'Identifica': 'no label', 'Activo': 'no label', 'Fecha_fina': 'no label', 'Fecha_inic': 'no label', 'Final_Lati': 'no label', 'Final_Long': 'no label', 'Valorarr_1': 'no label', 'Valorven_1': 'no label', 'NOMBRE_DPT': 'no label', 'NOMBRE_MPI': 'no label', });
lyr_Colopuntos_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});