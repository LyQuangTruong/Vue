export interface IJob {
    title: string,
    location: string,
    salary: string,
    id: string,
}
export class FlashDomain implements IJob {
    title: string;
    location: string;
    salary: string;
    id: string;

    constructor(object: IJob) {
        // Be sure to initialize the values for non-nullable props
        this.title = object?.title
        this.location = object?.location;
        this.salary = object?.salary;
        this.id = object?.id;
    }
   
}