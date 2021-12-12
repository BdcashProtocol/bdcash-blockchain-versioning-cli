# BDCash Blockchain Versioning CLI

<p><img style="display: block; margin-left: auto; margin-right: auto;" src="https://raw.githubusercontent.com/BdcashProtocol/bdcash-mediakit/main/cole%C3%A7%C3%A3o/bdcash-logo-300h.png" alt="" data-canonical-src="https://raw.githubusercontent.com/BdcashProtocol/bdcash-mediakit/main/cole%C3%A7%C3%A3o/bdcash-logo-300h.png" /></p>

This package has been created to maintain and verify code thanks to the blockchain. It's not an alternative to `git` but it can be used *with* `git` to create trustless open-source software.

## How it works

BDCash BVC or `bdcash-bvc` is an `npm` module that must be installed globally:

```
npm i -g @bdcash-protocol/bvc
```

When you've installed it you can use it from any folder you desire to track with the blockchain.

First of all you need a Lyra address, you can obtain an address thanks to [https://wallet.bdcashprotocol.com](https://wallet.bdcashprotocol.com) or [https://id.bdcashprotocol.com](https://id.bdcashprotocol.com) or simply downloading the QT wallet and creating a new address.

After you've an address with at least `0.001 BDCASH` you can import the private key with:

```
bdcash-bvc importkey YourPrivateKey AStrongPassphrase
```

## Init a new folder

When you've created a new project (it doesn't matter what's the  programming language or if it's a software at all) you can enter the folder and init the project with a `bdcash-manifest.json` file like this:

```
cd myAwesomeProject
bdcash-bvc init
```

This will create a new file called `bdcash-manifest.json` like this one:

```
{
    "version": "1.0.0",
    "name": "",
    "alias": "",
    "options": {
        "folders": { "exclude": [".*", "node_modules", "db"] },
        "files": { "include": ["*.*"] }
    },
    "address": ""
}
```

You need to write all the blank fields with your informations:
- `name`: a name for the entire project
- `alias` a short alias for the project, it can be used in near future to globally check or download something from the blockchain
- `options`: includes and excludes options for `folder-hash` package. You can see usage here: [https://www.npmjs.com/package/folder-hash](https://www.npmjs.com/package/folder-hash)
- `address`: this is the Lyra address we imported before (not private key obviously)

## Publish updates

After we initializated our folder we can publish the hashed contents to the blockchain like this:

```
bdcash-bvc publish MyStrongPassphrase
```

This will create a genesis transaction with the entire `scrypta-manifest.json` file and will create first version, supposing `1.0.0`.

Any change to the version will allow to publish other versions, like 1.0.1 etc.

## Verify a folder

Supposing you've published your folder you can verify it simply with: 

```
cd myAwesomeProject
bdcash-bvc verify
```

If your file matches the blockchain one you will receive a success message, if they're different you will be notified about that and you should download it or simply don't trust the source.
