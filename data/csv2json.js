#!/usr/bin/node
/*
 * Input:
 *  It takes input file name and output file name as
 *  the parameter
 *  eg., cvs2json('bestsellers.csv', 'data.json');
 */
var run = function(input, output, delimiter) {
    var csvFileName = "./" + input;

    var Converter = require("csvtojson").Converter;

    /*
     * The constructResult parameter=false will turn off
     * final result construction in memory for stream feature.
     * toArrayString will stream out a normal JSON array object.
     */
    var converterPara = {
        constructResult : false,
        toArrayString : true
    };

    if (delimiter) {
        converterPara.delimiter = delimiter;
    }

    var csvConverter = new Converter(converterPara);

    var readStream = require("fs").createReadStream(csvFileName);

    var writeStream = require("fs").createWriteStream(output);

    readStream.pipe(csvConverter).pipe(writeStream);
};
exports.run = run;

//Sample run
run('profiles.csv', 'profiles.json', '|');
