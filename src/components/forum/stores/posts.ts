import type { type } from "os";
import { ref } from "vue";

export type post = {
    id : number,
    name : string,
    content : string,
}
export type filter = {
    
    keyword: string,
    order: number,
    categories: number,
    topics: number,
}

export function dataOfPosts(){
    var posts = ref([] as post[])
    
    posts.value = [
        {
            id: 1,
            name: "k",
            content: "testPost1"
        },
        {
            id: 2,
            name: "j",
            content: "testPost2"
        },
        {
            id: 3,
            name: "l",
            content: "testPost1"
        },
        {
            id: 4,
            name: "s",
            content: "testPost4,welcome"
        },
        {
            id: 5,
            name: "k",
            content: "testPost5, still is k, and hello"
        },
    ];

    return posts
}