
import { TaskStatus } from "./TaskStatus";

export class Task {
	public name:string;
	public status:TaskStatus;

	constructor (name:string,status:TaskStatus) {
		this.name = name;
		this.status=status;
	}

}  