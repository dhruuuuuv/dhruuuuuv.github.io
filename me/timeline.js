google.charts.load('current', {'packages':['timeline']});
google.charts.setOnLoadCallback(drawChart);
function drawChart() {
  var container = document.getElementById('timeline');
  var chart = new google.visualization.Timeline(container);
  var dataTable = new google.visualization.DataTable();

  dataTable.addColumn({ type: 'string', id: 'Field' });
  dataTable.addColumn({ type: 'string', id: 'Info' });
  dataTable.addColumn({ type: 'date', id: 'Start' });
  dataTable.addColumn({ type: 'date', id: 'End' });

  var year = 1995;

  for (var i = 0; i < 22; i++) {
      dataTable.addRow(
          [ 'Age', i.toString(),		new Date(year, 03, 21), 	 new Date(year + 1, 03, 21) ]
      );
      year += 1;
  }

  dataTable.addRows([
    [ 'Housing', '18 Dunster', 					new Date(1995, 3, 21), 	 new Date(2005, 0, 08) ],
    [ 'Housing', '21 Queens Court',             new Date(2005, 0, 08),  new Date(2006, 11, 30) ],
    [ 'Housing', '36 Metchley Lane', 		    new Date(2006, 11, 30),  new Date(2014, 08, 22) ],
    [ 'Housing', '21 University Hall', 	        new Date(2014, 08, 22),  new Date(2015, 06, 15) ],
    [ 'Housing', '34 Elton Road ', 			    new Date(2015, 06, 15),  new Date(2016, 06, 15) ],
    [ 'Housing', '6 Woodfield Road', 	        new Date(2016, 06, 15),  new Date(2016, 07, 21) ],
    [ 'Housing', '11F-6-2 Signalhuset Kollegiet',
                                                new Date(2016, 07, 22),  new Date(2017, 06, 15) ],
    ]);


  dataTable.addRows([
    // [ 'Education', 'Nursery', 				    new Date(1995, 3, 21), 	 new Date(2005, 0, 08) ],
    [ 'Education', 'Highclare School',          new Date(1998, 08, 01),  new Date(1999, 06, 01) ],
    [ 'Education', 'Twycross House School',     new Date(1999, 08, 01),  new Date(2005, 06, 01) ],
    [ 'Education', 'Blue Coat School', 	        new Date(2005, 08, 01),  new Date(2006, 06, 01) ],
    [ 'Education', 'King Edwards School', 		new Date(2006, 08, 01),  new Date(2014, 05, 01) ],
    [ 'Education', 'University of Bristol', 	new Date(2014, 08, 22),  new Date(2018, 05, 15) ],
    [ 'Education', 'Københavns Universitet',    new Date(2016, 08, 01),  new Date(2017, 06, 30) ],
    ]);

  dataTable.addRows([
    [ 'Work', 'UH Bar', 	               new Date(2014, 09, 01),  new Date(2015, 09, 01) ],
    [ 'Work', 'Mediasite Co-ordinator',    new Date(2015, 08, 01),  new Date(2016, 00, 01) ],
    [ 'Work', 'Lab Demonstrator', 	       new Date(2015, 08, 01),  new Date(2016, 01, 01) ],
    [ 'Work', 'Research Internship',       new Date(2016, 05, 22),  new Date(2017, 07, 22) ],
    ]);

  dataTable.addRows([
    [ 'Relationships', 'AK', 	           new Date(2011, 0, 01),  new Date(2011, 02, 01) ],
    [ 'Relationships', 'AR',               new Date(2011, 03, 01),  new Date(2013, 03, 01) ],
    [ 'Relationships', 'RT', 	           new Date(2016, 03, 21),  new Date(2018, 05, 15) ],
    ]);

  dataTable.addRows([
      [ 'Travel', 'SEA (Thailand, Malaysia)',    new Date(2014, 05, 01),  new Date(2014, 06, 01) ],
      [ 'Travel', 'Spain (Andalucia)',    new Date(2015, 05, 09),  new Date(2015, 05, 20) ],
      [ 'Travel', 'America (LA, SF, DC, NY, Virginia, Philidelphia)', new Date(2015, 06, 10),  new Date(2015, 07, 10) ],
      [ 'Travel', 'Eastern Europe',    new Date(2015, 07, 13),  new Date(2015, 07, 27) ],
      [ 'Travel', 'Italy (Florence, Naples, Rome)',    new Date(2016, 06, 16),  new Date(2016, 06, 23) ],
      ]);

  dataTable.addRows([
      [ 'Significant Events', 'X NC', new Date(2005, 03, 14),  new Date(2005, 03, 15) ],
      ]);

  chart.draw(dataTable);
}
