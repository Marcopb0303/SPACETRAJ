var mission = trajectory;

function startSimulation() {
    console.log("Starting simulation...");
    var segIndex = 0; // segment counter
    var orbitCoords = "";

    mission.coordinates.forEach((coordinate, index) => {
        var s = document.createElement('Shape'); // Shape Node
        s.setAttribute("id", "segment" + segIndex);
        var app = document.createElement('Appearance'); // Appearance Node
        var mat = document.createElement('Material'); // Material Node
        mat.setAttribute("id", "Mat" + segIndex);
        mat.setAttribute("diffuseColor", "1 0 0");
        mat.setAttribute("emissiveColor", "1 0 0.3");
        app.appendChild(mat);
        s.appendChild(app);
        var segCoords = [
            coordinate.X / 10000,
            coordinate.Y / 10000,
            coordinate.Z / 10000
        ];
        console.log("Segment:", segCoords);
        orbitCoords = orbitCoords + segCoords[0] + " " + segCoords[1] + " " + segCoords[2] + " ";
        var line = document.createElement('IndexedLineSet');
        line.setAttribute("coordIndex", segIndex);
        var coords = document.createElement('Coordinate');
        coords.setAttribute("point", orbitCoords);
        line.appendChild(coords);
        s.appendChild(line);
        var ot = document.getElementById('theEarth');
        ot.appendChild(s);
        segIndex++;
    });

    var pos = [mission.coordinates[0].X / 10000, mission.coordinates[0].Y / 10000, mission.coordinates[0].Z / 10000];
    var t = document.createElement('Transform'); // create a transform object
    t.setAttribute("translation", pos[0] + " " + pos[1] + " " + pos[2]);
    t.setAttribute("id", 'satPosition');
    var satellite = document.createElement('Shape'); // Shape Node for satellite
    satellite.setAttribute("id", "satellite");
    var satapp = document.createElement('Appearance'); // Appearance Node
    var satmat = document.createElement('Material'); // Material Node
    satmat.setAttribute("id", "SatMat");
    satmat.setAttribute("diffuseColor", "0 1 0");
    satmat.setAttribute("emissiveColor", "0 1 0.3");
    satapp.appendChild(satmat);
    satellite.appendChild(satapp);
    var satmodel = document.createElement('Box');
    satmodel.setAttribute("size", "0.2 0.2 0.2");
    satellite.appendChild(satmodel);
    t.appendChild(satellite);
    var objsat = document.getElementById('theEarth');
    objsat.appendChild(t);
    simulationInterval = setInterval(updatePosition, 50);
}

var step = 0;

function updatePosition() {
    if (step >= mission.coordinates.length) {
        clearInterval(simulationInterval);
        return;
    }

    var pos = [mission.coordinates[step].X / 10000, mission.coordinates[step].Y / 10000, mission.coordinates[step].Z / 10000];
    var Xpos = pos[0];
    var Ypos = pos[1];
    var Zpos = pos[2];
    document.getElementById('satPosition').setAttribute('translation', Xpos + " " + Ypos + " " + Zpos);
    console.log("Update position:", pos);
    document.getElementById("demo").innerHTML = "<p><H2>Date: " + mission.coordinates[step].Date + " Time: " + mission.coordinates[step].Time + "</H2><p>";
    step++;
}

function resetPosition() {
    step = 0;
    updatePosition();
}

startSimulation();  // Initialize the simulation on page load using the existing mission variable
