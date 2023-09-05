export const SortOrder = {
    ASC: "ASC",
    DESC: "DESC",
    ASC_NULLS_FIRST: "ASC_NULLS_FIRST",
    DESC_NULLS_FIRST: "DESC_NULLS_FIRST",
    ASC_NULLS_LAST: "ASC_NULLS_LAST",
    DESC_NULLS_LAST: "DESC_NULLS_LAST"
};
export var Response;
(function (Response) {
    let Type;
    (function (Type) {
        Type["Empty"] = "Empty";
        Type["Object"] = "Object";
        Type["Array"] = "Array";
        Type["Error"] = "Error";
    })(Type = Response.Type || (Response.Type = {}));
})(Response || (Response = {}));
