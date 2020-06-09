export interface workStatusType{
    state: number;
    msg: string;
}

export interface resumeDatasType{
    id: number;
    name: string;
    age: string;
    birthday: string;
    race: string;
    work_status: workStatusType;
    language: string;
    dialect: string;
    work_year: string;
    technology_direction: string;
    job_interview: string;
    evaluation_remarks: string;
}

export interface resumeDatas {
    resumeDatas: resumeDatasType[];
}