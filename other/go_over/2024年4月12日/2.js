class Storage{
    setItem(key,value){}
    getItem(key){}
    static getInstance(){
        if(!Storage.instance){
            Storage.instance = new Storage();
        }
        return Storage.instance;
    }
}
const s1 = Storage.getInstance();