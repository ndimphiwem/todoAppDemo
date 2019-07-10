export class Todo {
    name: string;
    category: string;
    priority: string;
    description: string;
    contents: string;
    constructor(
        name: string,
        category: string,
        priority: string,
        description: string,
        contents: string
    ) {
        this.name = name;
        this.category = category;
        this.priority = priority;
        this.description = description;
        this.contents = contents;
     }
}
