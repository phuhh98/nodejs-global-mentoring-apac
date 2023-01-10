import path from 'path';
import * as dotenv from 'dotenv';

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            SQL_HOST: string;
            SQL_USER: string;
            SQL_PWD: string;
            SQL_DBNAME: string;
            SQL_DBSYS: string;
        }
    }
}

const envPath = path.resolve(__dirname, '../config/.env');
dotenv.config({ path: envPath });
