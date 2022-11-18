import  Client from '../database'
import QueryResult from "pg";


export abstract class AbstractModel<ModelType> {
    protected databaseName: string;

    protected constructor(database: string) {
        this.databaseName = database
    }

    // @ts-ignore
    protected async runQuery(sql: string, params: any[] | null): Promise<QueryResult<any>> {
        try {
            const conn = await Client.connect();
            let result;
            if (params) {
                result = await conn.query(sql, params);
            } else {
                result = await conn.query(sql);
            }
            conn.release();
            return result;
        } catch (err) {
            throw new Error(`Run query error: ${err}`)
        }
    }

    async index(): Promise<ModelType[]> {
        const result = await this.runQuery(`SELECT * FROM ${this.databaseName}`, null);
        return result.rows;
    }

    async show(id: string): Promise<ModelType[]> {
        const result = await this.runQuery(`SELECT * FROM ${this.databaseName} WHERE id=$1`, [id])
        return result.rows[0];
    }

}