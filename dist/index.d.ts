export interface Creatable {
    createdAt: Date;
}
export interface Deletable {
    deletedAt?: Date;
}
export interface Modifiable extends Creatable {
    lastModifiedAt?: Date;
}
export interface Id<V> {
    value: V;
}
export interface IntId extends Id<number> {
}
export interface LongId extends Id<bigint> {
}
export interface StringId extends Id<string> {
}
export interface IdHolder<_Id extends Id<V>, V> {
    id: _Id;
}
export interface IntIdHolder<_Id extends Id<number>> extends IdHolder<_Id, number> {
}
export interface LongIdHolder<_Id extends Id<bigint>> extends IdHolder<_Id, bigint> {
}
export interface StringIdHolder<_Id extends Id<string>> extends IdHolder<_Id, string> {
}
export declare enum SortOrder {
    ASC = "ASC",
    DESC = "DESC",
    ASC_NULLS_FIRST = "ASC_NULLS_FIRST",
    DESC_NULLS_FIRST = "DESC_NULLS_FIRST",
    ASC_NULLS_LAST = "ASC_NULLS_LAST",
    DESC_NULLS_LAST = "DESC_NULLS_LAST"
}
export declare namespace SortOrder {
}
export interface DataTransferObject {
}
export interface EncryptedDataTransferObject extends DataTransferObject {
    publicKey: string;
    body: string;
}
export interface ErrorDataTransferObject extends DataTransferObject {
    httpStatusCode: number;
}
export interface Response<T> extends DataTransferObject {
    type: Response.Type;
    metadata: Response.Metadata;
    result: T;
}
export declare namespace Response {
    enum Type {
        Empty = "Empty",
        Object = "Object",
        Array = "Array",
        Error = "Error"
    }
    interface Metadata {
        acceptedAt: Date;
        respondedAt: Date;
    }
    interface Empty extends Response<void> {
    }
    interface Object<T> extends Response<T> {
    }
    interface Array<T> extends Response<T[]> {
    }
    interface Error extends Response<string> {
        className: string;
        status: number;
    }
    function isResponse<T>(o: any): o is Response<T>;
    function isEmpty(o: any): o is Response.Empty;
    function isObject<T>(o: any, predicate: (element: any) => boolean): o is Response.Object<T>;
    function isArray<T>(o: any, predicate: (element: any) => boolean): o is Response.Array<T>;
    function isError(o: any): o is Response.Error;
}
export interface ValueObject extends DataTransferObject {
}
