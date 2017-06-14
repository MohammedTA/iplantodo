export class Extention<T> {
    mainValue: T;
    urgentTasks: (x: T, y: T) => string;
}