#!/usr/bin/env node

var BDCashBVC = require('../lib/index.js')

var args = process.argv.splice(process.execArgv.length + 2);
var command = args[0];
const console = require('better-console')

switch(command){
    
    case "importkey":
        if(args[1] !== undefined && args[2] !== undefined){
            let privatekey = args[1]
            let passphrase = args[2]
            BDCashBVC.importkey(privatekey, passphrase)
        }else{
            console.log('Please define a private key to import')
        }
    break;

    case "init":
        if(args[1] !== undefined){
            let folder = args[1]
            BDCashBVC.initfolder(folder)
        }else{
            BDCashBVC.initfolder('./')
        }
    break;

    case "hash":
        if(args[1] !== undefined){
            let folder = args[1]
            BDCashBVC.hashfolder(folder)
        }else{
            BDCashBVC.hashfolder('./')
        }
    break;

    case "upload":
        if(args[1] !== undefined){
            let folder = args[1]
            BDCashBVC.uploadfolder(folder).then(hashed => {
                console.log(JSON.stringify(hashed))
            })
        }else{
            BDCashBVC.uploadfolder('.').then(hashed => {
                console.log(JSON.stringify(hashed))
            })
        }
    break;

    case "publish":
        if(args[1] !== undefined && args[2] !== undefined && args[1] !== '-ipfs'){
            if(args[1] !== '-ipfs'){
                let folder = args[1]
                if(args[2] !== undefined){
                    let passphrase = args[2]
                    BDCashBVC.publishfolder(folder, passphrase)
                }else{
                    console.error('Passphrase not defined, use the command like `bdcash-bvc Folder Passphrase`')
                }
            }else{
                let folder = args[2]
                if(args[3] !== undefined){
                    let passphrase = args[3]
                    BDCashBVC.publishfolder(folder, passphrase, true)
                }else{
                    console.error('Passphrase not defined, use the command like `bdcash-bvc Folder Passphrase`')
                }
            }
        }else{
            if(args[1] !== undefined){
                let passphrase = args[1]
                let ipfs = false
                if(args[1] === '-ipfs'){
                    ipfs = true
                    passphrase = args[2]
                }
                BDCashBVC.publishfolder('.', passphrase, ipfs)
            }else{
                console.error('Passphrase not defined, use the command like `bdcash-bvc Passphrase`')
            }
        }
    break;

    case "verify":
        if(args[1] !== undefined){
            let folder = args[1]
            BDCashBVC.verifyfolder(folder)
        }else{
            BDCashBVC.verifyfolder('./')
        }
    break;
}