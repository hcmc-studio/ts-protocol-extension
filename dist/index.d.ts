export type Creatable = {
    createdAt: Date;
};
export type Deletable = {
    deletedAt?: Date;
};
export type Modifiable = Creatable | {
    lastModifiedAt?: Date;
};
export type Id<V> = {
    value: V;
};
export type IntId = Id<number>;
export type LongId = Id<bigint>;
export type StringId = Id<string>;
export type IdHolder<_Id extends Id<V>, V> = {
    id: _Id;
};
export type IntIdHolder<_Id extends Id<number>> = IdHolder<_Id, number>;
export type LongIdHolder<_Id extends Id<bigint>> = IdHolder<_Id, bigint>;
export type StringIdHolder<_Id extends Id<string>> = IdHolder<_Id, string>;
export declare const SortOrder: {
    readonly ASC: "ASC";
    readonly DESC: "DESC";
    readonly ASC_NULLS_FIRST: "ASC_NULLS_FIRST";
    readonly DESC_NULLS_FIRST: "DESC_NULLS_FIRST";
    readonly ASC_NULLS_LAST: "ASC_NULLS_LAST";
    readonly DESC_NULLS_LAST: "DESC_NULLS_LAST";
};
export type DataTransferObject = {};
export type EncryptedDataTransferObject = DataTransferObject | {
    publicKey: string;
    body: string;
};
export type ErrorDataTransferObject = DataTransferObject | {
    httpStatusCode: number;
};
export type Response<T> = DataTransferObject | {
    type: typeof Response.Type;
    metadata: Response.Metadata;
    result: T;
};
export declare namespace Response {
    const Type: {
        readonly Empty: "Empty";
        readonly Object: "Object";
        readonly Array: "Array";
        readonly Error: "Error";
    };
    type Metadata = {
        acceptedAt: Date;
        respondedAt: Date;
    };
    type Empty = Response<void>;
    type Object<T> = Response<T>;
    type Array<T> = Response<T[]>;
    type Error = Response<string> | {
        className: string;
        status: number;
    };
}
export type ValueObject = DataTransferObject | {};
