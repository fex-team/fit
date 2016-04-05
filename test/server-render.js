import React from 'react'
import ReactDOMServer from 'react-dom/server'

//import Badge from '../lib/common/badge/src'

import * as A from './config';

import colors from 'colors/safe';

//const result = ReactDOMServer.renderToString(<Badge count="123"/>)
//console.log(result)

for(var i in A.data_info){
    //console.log(A.data_info[i].name);
    var X = A.data_info[i];
    if(true){
        try {
            const result = ReactDOMServer.renderToString(<X count="123"/>)
            //console.log(result)
            console.log(colors.green(X.name + ".............. OK"));
        }catch (e){
            console.log(colors.red.underline(X.name + ".............. Failed"));
            console.log(X.name + "'s error msg : " + e);
        }
    }
}