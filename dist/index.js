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
    Response.Type = {
        Empty: "Empty",
        Object: "Object",
        Array: "Array",
        Error: "Error"
    };
})(Response || (Response = {}));
