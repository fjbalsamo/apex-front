export interface IFaq {
    question:string,
    ask:string
}

export interface IData {
    timestamp:number,
    error:boolean,
    data:IFaq[]
}