//inmport sqlite3 dependences
const sqlite3 = require("sqlite3").verbose()

//create object to do operations in data base
const db = new sqlite3.Database("./database/database.db")

db.serialize(() => {
    db.run(`
        CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)

    //Insert datas
    db.run(`
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (
                
        );
    `)
})