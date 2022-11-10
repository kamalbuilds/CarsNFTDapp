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
        content: "",
    },
    {
        path: "millow/metadata/2.json",
        content: "ewogICAgIm5hbWUiOiAiTWVyY2VkZXMtQmVueiBBTUcgR1QiLAogICAgImRlc2NyaXB0aW9uIjogIk1lcmNlZGVzLUJlbnogaXMgYSAyIHNlYXRlciBMdXh1cnkuIEl0IGlzIGF2YWlsYWJsZSB3aXRoIEF1dG9tYXRpYyB0cmFuc21pc3Npb24uIiwKICAgICJpbWFnZSI6ICJodHRwczovL2lwZnMubW9yYWxpcy5pbzoyMDUzL2lwZnMvUW1aYmFudkdFZ1BCZFk1R1RoeDVpeDZxUDY0dkNuZE5ncUxHWHdLWjF6Ykw2VC9taWxsb3cvY2Fycy9tZXJjZWRlcy5wbmciLAogICAgImlkIjogIjIiLAogICAgImF0dHJpYnV0ZXMiOiBbCiAgICAgICAgewogICAgICAgICAgICAidHJhaXRfdHlwZSI6ICJQdXJjaGFzZSBQcmljZSIsCiAgICAgICAgICAgICJ2YWx1ZSI6IDIwMAogICAgICAgIH0sCiAgICAgICAgewogICAgICAgICAgICAidHJhaXRfdHlwZSI6ICJNaWxlYWdlIiwKICAgICAgICAgICAgInZhbHVlIjogIjEyLjY1IGttcGwiCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJ0cmFpdF90eXBlIjogIkVuZ2luZSAodXB0bykiLAogICAgICAgICAgICAidmFsdWUiOiAiMzk4MiBjYyIKCiAgICAgICAgfSwKICAgICAgICB7CiAgICAgICAgICAgICJ0cmFpdF90eXBlIjogIkJvb3QgU3BhY2UiLAogICAgICAgICAgICAidmFsdWUiOiAyODUKICAgICAgICB9CiAgICBdCn0=",
    },
    ];

  const response = await Moralis.EvmApi.ipfs.uploadFolder({ abi });
  
  console.log(response.toJSON());
}

runApp();