
import { identifierModuleUrl } from "@angular/compiler";
import Dexie from "dexie";


export function createDb(table) {
    const db = new Dexie('SCAP_DB');
    console.log(db);
    let data = JSON.parse(table);
    db.version(1).stores(data);
    db.open();
  }

export const DATABASE = function() {
    new Dexie('SCAP_DB').open().then(res => {
    console.log("name: ", res.name)
    console.log("version: ", res.verno)
    res.tables.forEach(tab => {
    console.log("found table: ", tab.name)
    console.log("tableSchema: ", JSON.stringify(tab.schema, null, 4))
        
    })
}).catch('NoSuchDatabaseError', function(e) {
    console.error ("Database not found");
}).catch(function (e) {
    console.error ("Oh uh: " + e);
})};