import { makeId } from '../services/utilService.js'

export class User {

    constructor(public _id: String , public name: string, public coins: number , public moves: Array<Object> ,) {

    }

    setId?() {
        // Implement your own set Id
        this._id = makeId()
    }


}