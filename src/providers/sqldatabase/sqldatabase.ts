import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';

@Injectable()
export class SqldatabaseProvider {

    private storage: SQLite;
    private isOpen: boolean;
    private db: SQLiteObject

    public constructor(db: SQLiteObject) {
        if(!this.isOpen) {
            this.storage = new SQLite();
            this.storage.create({name: "data.db", location: "default"}).then((db: SQLiteObject) => {
                this.db = db;
                this.db.executeSql("CREATE TABLE IF NOT EXISTS sources (id INTEGER PRIMARY KEY AUTOINCREMENT, link TEXT)", []);
                this.isOpen = true;
            });
        }
    }

    public createSource(link: string) {
        return new Promise((resolve, reject) => {
            return this.db.executeSql("INSERT INTO sources (link) VALUES (?)", [link]).then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
    }

    public getSources() {
        return new Promise((resolve, reject) => {
            this.db.executeSql("SELECT * FROM sources", []).then((data) => {
                let sources = [];
                if(data.rows.length > 0) {
                    for(var i = 0; i < data.rows.length; i++) {
                        sources.push({id: data.rows.item(i).id, link: data.rows.item(i).link});
                    }
                }
                resolve(sources);
            }, (error) => {
                reject(error);
            });
        });
    }

    public deleteSource(source: any) {
        return this.db.executeSql("DELETE FROM sources WHERE id = ?", [source.id]);
    }

}

//sorce: https://www.thepolyglotdeveloper.com/2016/06/build-an-rss-reader-mobile-app-with-ionic-2-and-angular-2/