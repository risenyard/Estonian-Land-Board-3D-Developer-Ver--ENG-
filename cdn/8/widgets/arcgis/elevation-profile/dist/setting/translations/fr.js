System.register([],(function(e){return{execute:function(){e({sourceLabel:"Source",selectMapWidgetLabel:"Sélectionner un widget Carte",warningMsgToSelectMap:"Un widget Carte doit être sélectionné pour générer un profil d’élévation.",dataConfigLabel:"Paramètres de la carte",warningMsgIfDefaultDs:"Le widget Carte ne contient pas de carte Web ou de scène Web. Dessinez sur la carte Web par défaut pour voir l’élévation du sol.",dataConfigTooltip:"Vous pouvez également cliquer sur une carte ci-dessous pour personnaliser les paramètres du profil d’élévation.",defaultWebMap:"Carte Web par défaut",generalSettingsLabel:"Paramètres généraux",allowExportLabel:"Autoriser l’exportation",activateToolOnLoadLabel:"Activer à l’ouverture du widget",activateToolOnLoadTooltip:"Activez l’outil de sélection ou de dessin automatiquement à l’ouverture du widget.",selectTool:"Sélectionner une ligne",drawTool:"Dessiner un profil",appearanceCollapsible:"Apparence",showChartGridsLabel:"Grilles du diagramme",showChartAxisTitlesLabel:"Titres des axes du diagramme",profileChart:"Paramètres du profil",elevationLayerLabel:"Sélectionner une couche d’élévation",elevationLayerTooltip:"Utilisez la couche d’élévation définie dans la scène Web ou configurez une couche d’élévation personnalisée. Si aucune couche d’élévation n’est définie ou si vous utilisez une carte Web, la couche d’élévation Terrain 3D d’Esri est utilisée.",useDefaultGround:"Utiliser la couche d’élévation du sol de la scène Web",useCustomElevation:"Utiliser une couche d’élévation personnalisée",setServiceLabel:"Définir la couche",alertPopupTitle:"Saisir l’URL du service",invalidElevationLayerURL:"Saisissez l’URL d’un service de couche d’élévation valide.",measurementUnitsHeadingLabel:"Unités",measurementUnitsHeadingTooltip:"Unités utilisées pour convertir et afficher les valeurs dans le diagramme de profil.",distanceUnitLabel:"Distance",elevationUnitLabel:"Élévation",displayGroundProfileStatsLabel:"Afficher les statistiques du profil",showLegend:"Légende",groundColor:"Couleur du sol",chooseHighlightColor:"Couleur de sélection de la carte",volumetricObjectsLabel:"Objets volumétriques",volumetricObjectsTooltip:"Générer un profil d’élévation pour des couches de scène, des couches de maillage intégré et des couches avec des symboles 3D volumétriques. Cette option est uniquement prise en charge dans les scènes Web.",showInGraph:"Afficher dans le diagramme",viewLineColor:"Couleur de ligne",profileSettingsLabel:"Couches sélectionnables",selectableLayersLabel:"Personnaliser les couches linéaires sélectionnables",selectableLayersTooltip:"Ajouter des couches linéaires à partir de la carte ou scène Web. Cliquez sur une couche de la liste pour ouvrir la fenêtre des paramètres.",selectableLayersWarning:"Aucune couche sélectionnable n’est définie. Ajoutez des couches linéaires de la carte pouvant être sélectionnées pour générer un profil.",distanceSettingLabel:"Paramètres de distance",distanceSettingsWarning:"Ces options ne sont plus disponibles. La projection cartographique permet d’afficher et de calculer une représentation topologique exacte des valeurs de distance dans le diagramme.",mapProjection:"Projection cartographique",sourceField:"Champ",styleLineTooltip:"Personnaliser le style à afficher dans le diagramme de profil pour toutes les lignes sélectionnées dans cette couche.",assetSettingsLabel:"Couches d’intersection",intersectingLayersLabel:"Personnaliser les couches d’intersection",intersectingLayersTooltip:"Ajouter des couches ponctuelles ou linéaires à partir de la carte ou scène Web. Cliquez sur une couche de la liste pour ouvrir la fenêtre des paramètres. Les entités ponctuelles ou linéaires qui intersectent le profil seront affichées dans le diagramme.",intersectingLayersWarning:"Aucune couche d’intersection n’est définie. Ajoutez des couches ponctuelles et linéaires pour afficher les entités qui intersectent le profil.",intersectingBufferSettingsLabel:"Zone tampon",intersectingBufferSettingsTooltip:"Les entités sont représentées dans le diagramme à leurs points d’intersection avec la zone tampon. Les points connectés permettent de représenter les points et lignes traversants avec une élévation à deux champs.",displayFieldLabel:"Champ d’affichage",displayFieldTooltip:"Valeur de champ à afficher lors du survol pour chaque ressource de cette couche représentée dans le diagramme.",stylePointTooltip:"Les entités ponctuelles de cette couche qui intersectent le profil seront affichées dans le diagramme sous forme de symboles ponctuels au point d’intersection.",symbology:"Symbologie",mapLabel:"Carte",customLabel:"Personnalisé",styleColor:"Couleur du style",styleShape:"Forme du style",styleSize:"Taille du style",assetTriangle:"Triangle",assetRectangle:"Rectangle",assetCircle:"Cercle",assetSquare:"Carré",profileRendering:"Rendu du profil",profileRenderingTooltip:"Afficher les entités linéaires sélectionnées au sol ou personnaliser les couches sélectionnables et leurs paramètres d’élévation",groundElevation:"Élévation du sol",customizeSelectableLayersLabel:"Personnaliser",selectableButton:"+ Ajouter une couche",styleLabel:"Style",styleGroundTooltip:"Personnalisez la couleur d’affichage pour la sélection de la carte et le sol.",valueType:"Valeur d’élévation",meters:"Mètres",feet:"Pieds",kilometers:"Kilomètres",miles:"Miles",yards:"Yards",maxDistance:"Distance MAX",minElevation:"Élévation MIN",maxElevation:"Élévation MAX",avgElevation:"Élévation MOY",elevationGain:"Dénivelé positif",elevationLoss:"Dénivelé négatif",maxPositiveSlope:"Pente positive MAX",maxNegativeSlope:"Pente négative MAX",avgPositiveSlope:"Pente positive MOY",avgNegativeSlope:"Pente négative MOY",noElevationHint:"Astuce : les entités sans élévation s’affichent au sol.",noVerticalParamHint:"Astuce : aucune unité n’est définie pour la valeur Z verticale dans la couche, l’unité de la référence spatiale du sol est utilisée.",elevationSettingLabel:"Paramètres d’élévation",elevationSettingTooltip:"Sélectionnez le mode de calcul de l’élévation d’une ligne sélectionnée à l’aide de la couche d’élévation définie dans les paramètres du profil ou en utilisant jusqu’à deux valeurs de champ.",elevationSettingIntersectingTooltip:"Sélectionner le mode de calcul de l’élévation d’une entité d’intersection à l’aide de la couche d’élévation définie dans les paramètres du profil ou en utilisant jusqu’à deux valeurs de champ.",noElevation:"Aucune élévation",zValue:"Valeur Z",noSelectionItemLabel:"- Sélectionner -",oneField:"Un champ",twoField:"Deux champs",oneFieldLabel:"Champ 1",twoFieldLabel:"Champ 2",valueUnit:"Unités",legendLabel:"Légende",legendTooltip:"Légende",statsDisplayLabel:"Statistiques de la couche",statisticsListLabel:"Personnaliser les statistiques",statisticsListTooltip:"Personnalisez l’affichage et l’ordre des statistiques du profil.",deleteLayer:"Supprimer",backButton:"Retour",alert:"Ajouter une couche",alreadySelectedLayerMsg:"Cette couche est déjà ajoutée à la liste."})}}}));