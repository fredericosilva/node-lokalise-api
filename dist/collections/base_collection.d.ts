import { Options } from "got";
import { StandartParams } from "../interfaces/standart_params";
import { ApiError } from "../models/api_error";
import { PaginatedResult } from "../models/paginated_result";
import { Keyable } from "../interfaces/keyable";
import { ClientData } from "../interfaces/client_data";
export declare class BaseCollection {
    clientData: ClientData;
    protected static rootElementName: string;
    protected static rootElementNameSingular: string | null;
    protected static endpoint: string | null;
    protected static prefixURI: string | null;
    protected static elementClass: any;
    protected static secondaryElementNameSingular: string | null;
    protected static secondaryElementClass: any;
    constructor(clientData: ClientData);
    get(id: string | number, params?: StandartParams): Promise<any>;
    list(params?: StandartParams): Promise<any>;
    create(body: object | object[] | null, params?: StandartParams): Promise<any>;
    update(id: string | number, body: object | object[] | null, params?: StandartParams): Promise<any>;
    delete(id: string | number, params?: StandartParams): Promise<Keyable>;
    protected populateObjectFromJsonRoot(json: object, headers: object): any;
    protected populateSecondaryObjectFromJsonRoot(json: object, headers: object): any;
    protected populateObjectFromJson(json: object, _headers: object, secondary?: boolean): any;
    protected populateArrayFromJson(json: Keyable, headers: object): PaginatedResult | Keyable | this[];
    protected populateApiErrorFromJson(json: any): ApiError;
    protected returnBareJSON(json: Keyable | Array<Keyable>): Keyable | Array<Keyable>;
    protected handleReject(data: any): ApiError;
    protected createPromise(method: Options["method"], params: StandartParams, resolveFn: Function, rejectFn: Function, body: object | object[] | null, uri?: string | null): Promise<any>;
    protected objToArray(raw_body: object | object[]): Array<object>;
}
