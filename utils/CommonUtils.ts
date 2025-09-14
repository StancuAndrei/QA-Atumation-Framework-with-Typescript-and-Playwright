import crytoJs from 'crypto-js'

export default class CommonUtils{

    private secretKey: string;

    constructor(){
        this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : "Please provide key before execution";
    }

    //aici aceasta const este folosita pentru a contine date criptate
    public encryptData(data: string){
        const encryptedData =  crytoJs.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }


    public decryptData(encData: string){;
        crytoJs.AES.decrypt(encData, this.secretKey)
    }


}




