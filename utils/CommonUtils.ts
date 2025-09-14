import crytoJs from 'crypto-js'

export default class CommonUtils{

    private secretKey: string;

    constructor(){
        //this.secretKey = process.env.SECRET_KEY ? process.env.SECRET_KEY : throw new Error ("Please provide key before execution");
        if(process.env.SECRET_KEY){
            this.secretKey = process.env.SECRET_KEY
        } else {
            throw new Error ("Please provide key before execution");
        }
    }

    //aici aceasta const este folosita pentru a contine date criptate
    public encryptData(data: string){
        const encryptedData =  crytoJs.AES.encrypt(data, this.secretKey).toString();
        console.log(encryptedData);
        return encryptedData;
    }


    public decryptData(encData: string){;
        const decryptedData = crytoJs.AES.decrypt(encData, this.secretKey).toString(crytoJs.enc.Utf8);
        return decryptedData;
    }


}




