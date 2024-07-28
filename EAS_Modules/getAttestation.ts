//This is to retrieve the onchain attestation of a given UID
//getAttestation function
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from '@ethereum-attestation-service/eas-sdk';
import { ethers } from 'ethers';

export const EASContractAddress = '0xC2679fBD37d54388Ce493F1DB75320D236e1815e'; // Sepolia v0.26

async function main() {
    // Initialize the sdk with the address of the EAS Schema contract address
    const eas = new EAS(EASContractAddress);

    // Gets a default provider (in production use something else like infura/alchemy)
    const provider = ethers.getDefaultProvider('sepolia');

    // Create a signer (you need a private key for this; here we use a dummy private key for illustration purposes)
    const privateKey = '0000000000000000000000000000000000000000000000000000000000000001';
    const signer = new ethers.Wallet(privateKey, provider);

    // Connect the signer to EAS
    eas.connect(signer);

    const uid = '0xff08bbf3d3e6e0992fc70ab9b9370416be59e87897c3d42b20549901d2cccc3e';

    try {
        const attestation = await eas.getAttestation(uid);
        console.log(attestation);
    } catch (error) {
        console.error('Error fetching attestation:', error);
    }
}

// Execute the async function
main().catch((error) => console.error('Error in main function:', error));
