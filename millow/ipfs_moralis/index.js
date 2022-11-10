const Moralis = require('moralis').default;
const { EvmChain } = require('@moralisweb3/evm-utils');

const runApp = async () => {
  await Moralis.start({
    apiKey: "oTaHYuC1KAGCe9MmBipl9sPmgr05Xau240KFWsX06H0jiErUt1Cp15b867nAD0ix",
    // ...and any other configuration
  });
  
    const abi = [
    {
        path: "millow/metadata/1.json",
        content: "ewogICAgIm5hbWUiOiAiTHV4dXJ5IE5ZQyBQZW50aG91c2UiLAogICAgImFkZHJlc3MiOiAiMXI3IFcgNTd0aCBTdCBBUFQgNDlCLCBOZXcgWW9yaywgTlkgMTAwMTkiLAogICAgImRlc2NyaXB0aW9uIjogIkx1eHVyeSBQZW50aG91c2UgbG9jYXRlZCBpbiB0aGUgaGVhcnQgb2YgTllDIiwKICAgICJpbWFnZSI6ICJodHRwczovL2lwZnMuaW8vaXBmcy9RbVFVb3pySExBdXNYRHhydnNFU0ozUFlCM3JVZVV1QkF2Vld3Nm5vcDJ1dTdjLzEucG5nIiwKICAgICJpZCI6ICIxIiwKICAgICJhdHRyaWJ1dGVzIjogWwogICAgICAgIHsKICAgICAgICAgICAgInRyYWl0X3R5cGUiOiAiUHVyY2hhc2UgUHJpY2UiLAogICAgICAgICAgICAidmFsdWUiOiAyMAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAidHJhaXRfdHlwZSI6ICJUeXBlIG9mIFJlc2lkZW5jZSIsCiAgICAgICAgICAgICJ2YWx1ZSI6ICJDb25kbyIKICAgICAgICB9LAogICAgICAgIHsKICAgICAgICAgICAgInRyYWl0X3R5cGUiOiAiQmVkIFJvb21zIiwKICAgICAgICAgICAgInZhbHVlIjogMgogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAidHJhaXRfdHlwZSI6ICJCYXRocm9vbXMiLAogICAgICAgICAgICAidmFsdWUiOiAzCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJ0cmFpdF90eXBlIjogIlNxdWFyZSBGZWV0IiwKICAgICAgICAgICAgInZhbHVlIjogMjIwMAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAidHJhaXRfdHlwZSI6ICJZZWFyIEJ1aWx0IiwKICAgICAgICAgICAgInZhbHVlIjogMjAxMwogICAgICAgIH0KICAgIF0KfQ==",
    },
    ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
  
  console.log(response.toJSON());
}

runApp();