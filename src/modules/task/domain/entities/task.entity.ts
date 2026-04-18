export class Task {
    constructor(
        private readonly id: string,
        private title: string,
        private completed: boolean,
        private createAt: Date,
    ) {}

    complete() {
        if (this.completed) {
            throw new Error('Task is already completed');
        }

        this.completed = true;
    }

    rename(newTitle: string) {
        if (newTitle.length < 3) {
            throw new Error('Title must be at least 3 characters long');
        }
        
        this.title = newTitle;
    }

    getId() {
        return this.id;
    }
    
    getTitle() {
        return this.title;
    }

    isCompleted() {
        return this.completed;
    }
}