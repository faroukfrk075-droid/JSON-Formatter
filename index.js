#!/usr/bin/env node 

import fs from 'fs' ;
import { readFile } from 'fs';
import { json } from 'stream/consumers';

const inputjsonpath = process.argv[2] ;

fs.readFile(inputjsonpath , 'utf-8' , (err,fileContent) => {

    if (err) {
        console.error('your path is incorrecte ' , err);
    }
    else {
        try{
            const parsedjson = JSON.parse(fileContent) ;
            console.log('file parsed successfully ') ;
            const stringifyedcontent = JSON.stringify(parsedjson , null , 2);
            console.log(stringifyedcontent);
            
        
        }
        catch (error){0
            if ( error instanceof SyntaxError){
                console.error('inalid json file ');
            }
            else{
                console.error(error.message);
            }
            
        }
        
    
    }
    
    
})