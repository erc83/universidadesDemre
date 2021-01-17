const { Pool } = require("pg");

const pool = new Pool({
    user: "erc83",
    host: "localhost",
    password: "2210",
    database: "database",
    port: "5432", 
})


async function getUniversidades(){
    try {
    const result = await pool.query (`SELECT * FROM nombre_tabla`);
    return result.rows;
    }catch (e) {
        return e;
    }
}


module.exports = {
    getUniversidades

}

