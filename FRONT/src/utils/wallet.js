// TODO 2.a Setup a Beacon wallet instance
import { BeaconWallet } from "@taquito/beacon-wallet";

export const wallet = new BeaconWallet({
name: "Tezos Mobility Dapp",
preferredNetwork:"jakartanet" 

})
// Todo 2.b - Complete connectwallet function (for ithacanet)

export const connectwallet = async () => {

    await wallet.requestPermissions({ network: { type: "jakartanet" } });
};

//TODO 2.c - Complete getAccount function

export const getAccount = async () => {
    const activeAccount = await wallet.client.getActiveAccount();

    if (activeAccount){
        return activeAccount.adress;
}   else {
    return ""
}

};
