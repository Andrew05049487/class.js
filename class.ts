import { UpdateResult } from "mongodb";
import { D8 } from "./classes/D8";
import { Student } from "./interfaces/Student";
import { csvImport } from "./utils/import";
require('dotenv').config()

const main = async (): Promise<void> => {

    const mongo: D8 = new D8({
        name:process.env.DBUSER as string,
        password:process.env.DBPASSWORD as string,
        host:process.env.DBHOST as string,
        port:process.env.DBPORT as string,
        dbName:process.env.DBNAME as string
    });

    const student:Student = {
        userNAME: "Andrew0504"
        sid: 1,
        name: "張峰碩",
        department: "資訊管理系",
        grade: "三年級",
        class: "C"
        Email: "413638122@o365.tku.edu.tw"
    };

    await mongo.connectD8();

    
    }
    await update = async (mongo:D8,collectionName:string)=>{
    }

    main();