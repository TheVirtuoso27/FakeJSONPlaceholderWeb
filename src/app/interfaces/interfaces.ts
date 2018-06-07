// export interface Profesor{
//     nombre: string;
//     apellido: string;
//     matricula: string;
// }

export interface Post{
    userId:number;
    id:number;
    title:String;
    body:String;
}

export interface Comment{
    postId:number;
    id:number;
    name:String;
    email:String;
    body:String;
}

export interface Album{
    userId:number;
    id:number;
    title:String;
}

export interface Photo{
    albumId:number;
    id:number;
    title:String;
    url:String;
    thumbnailUrl:String;
}

export interface Todo{
    userId:number;
    id:number;
    title:String;
    completed:boolean;
}

export interface User{
    id:number;
    name:String;
    username:String;
    email:String;
    address:{
        street:String;
        suite:String;
        city:String;
        zipcode:String;
        geo:{
            lat:String;
            lng:String;
        }
    };
    phone:String;
    website:String;
    company:{
        name:String;
        catchPhrase:String;
        bs:String;
    };
}