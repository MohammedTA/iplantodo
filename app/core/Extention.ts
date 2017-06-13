export class TestData<T> {
    singleValue: T;
    urgentTasks: (x: T, y: T) => string;
}