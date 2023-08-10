sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'yfe/fesolocaltvo/test/integration/FirstJourney',
		'yfe/fesolocaltvo/test/integration/pages/SalesOrderList',
		'yfe/fesolocaltvo/test/integration/pages/SalesOrderObjectPage'
    ],
    function(JourneyRunner, opaJourney, SalesOrderList, SalesOrderObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('yfe/fesolocaltvo') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheSalesOrderList: SalesOrderList,
					onTheSalesOrderObjectPage: SalesOrderObjectPage
                }
            },
            opaJourney.run
        );
    }
);