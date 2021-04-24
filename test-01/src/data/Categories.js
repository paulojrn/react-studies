export default class Categories
{
    constructor()
    {
        this.categories = [];
        this.subscribers = [];
    }

    subscribe(fn)
    {
        this.subscribers.push(fn);
    }

    unsubscribe(fn)
    {
        this.subscribers = this.subscribers.filter(f => f !== fn);
    }

    notify()
    {
        this.subscribers.forEach(fn => {
            fn(this.categories);
        });
    }

    addCategory(category)
    {
        this.categories.push(category);
        this.notify();
    }
}