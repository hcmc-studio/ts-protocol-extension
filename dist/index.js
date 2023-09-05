export var SortOrder;
(function (SortOrder) {
    SortOrder["ASC"] = "ASC";
    SortOrder["DESC"] = "DESC";
    SortOrder["ASC_NULLS_FIRST"] = "ASC_NULLS_FIRST";
    SortOrder["DESC_NULLS_FIRST"] = "DESC_NULLS_FIRST";
    SortOrder["ASC_NULLS_LAST"] = "ASC_NULLS_LAST";
    SortOrder["DESC_NULLS_LAST"] = "DESC_NULLS_LAST";
})(SortOrder || (SortOrder = {}));
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
