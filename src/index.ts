export interface Creatable {
    createdAt: Date
}

export interface Deletable {
    deletedAt?: Date
}

export interface Modifiable extends Creatable {
    lastModifiedAt?: Date
}

export interface Id<V> {
    value: V
}

export interface IntId extends Id<number> {}

export interface LongId extends Id<bigint> {}

export interface StringId extends Id<string> {}

export interface IdHolder<_Id extends Id<V>, V> {
    id: _Id
}

export interface IntIdHolder<_Id extends Id<number>> extends IdHolder<_Id, number> {}

export interface LongIdHolder<_Id extends Id<bigint>> extends IdHolder<_Id, bigint> {}

export interface StringIdHolder<_Id extends Id<string>> extends IdHolder<_Id, string> {}

export const SortOrder = {
    ASC: "ASC",
    DESC: "DESC",
    ASC_NULLS_FIRST: "ASC_NULLS_FIRST",
    DESC_NULLS_FIRST: "DESC_NULLS_FIRST",
    ASC_NULLS_LAST: "ASC_NULLS_LAST",
    DESC_NULLS_LAST: "DESC_NULLS_LAST"
} as const

// io
export interface DataTransferObject {}

export interface EncryptedDataTransferObject extends DataTransferObject {
    publicKey: string
    body: string
}

export interface ErrorDataTransferObject extends DataTransferObject {
    httpStatusCode: number
}

export interface Response<T> extends DataTransferObject {
    type: Response.Type
    metadata: Response.Metadata
    result: T
}

export namespace Response {
    export enum Type {
        Empty = 'Empty',
        Object = 'Object',
        Array = 'Array',
        Error = 'Error'
    }

    export interface Metadata {
        acceptedAt: Date
        respondedAt: Date
    }

    export interface Empty extends Response<void> {}

    export interface Object<T> extends Response<T> {}

    export interface Array<T> extends Response<T[]> {}

    export interface Error extends Response<string> {
        className: string
        status: number
    }
}

export interface ValueObject extends DataTransferObject {}