
export interface RequestError {
    error?: string;
    headers?:any;
    message?:string;
    name:string;
    ok:boolean;
    status:number;
    statusText:string;
    url:string;
}

export class Container {
    constructor(){
        this.IsActive = true;
    }

    ContainerSpecID: number;
    ContainerSpecCode: string;
    ContainerSpecDesc: string;
    ContainerSpecImage: string;
    ContainerSizeID: number;
    ContainterLength: number;
    ContainterWidth: number;
    ContainterHeight: number;
    IsActive: boolean;
    SortingOrder: number;
    ContainerLoadType: string;
    ContainerSubDetail?: any;
    MaxGrossWeight: number;
    MinGWT?: any;
    MaxGWT?: any;
    DimensionUnit: string;
    WeightUnit: string;
}