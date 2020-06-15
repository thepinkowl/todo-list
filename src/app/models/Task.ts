export class TaskInterface {
    id: string;
    title: string;
    when: number[];
    executions: Date[];
}

export default class Task extends TaskInterface {
    static today = Date.now();
    static WEEK = 7 * 24 * 60 * 60 * 1000;

    lastDone: Date;
    progress: number;

    static parseTasks(tasks: TaskInterface[]): Task[] {
        return tasks.map((t: TaskInterface) => new Task(t));
    }

    static createEmpty(): Task {
        return new Task({
            title: '',
            id: '',
            when: [],
            executions: [new Date()],
        });
    }

    constructor(task: TaskInterface) {
        super();
        Object.assign(this, task);
        this.computeProgress();
    }

    public computeProgress() {
        this.executions.sort((a: Date, b: Date) => (b.getTime() - a.getTime()));
        this.lastDone = this.executions[0];
        const lastDoneDuration = (Task.today - this.lastDone.getTime());
        this.progress = this.rangePercentage(Math.floor( (Task.WEEK - lastDoneDuration) / Task.WEEK * 100));
    }

    private rangePercentage(value: number, min = 0, max = 100) {
        return Math.min(Math.max(value, min), max);
    }
}
