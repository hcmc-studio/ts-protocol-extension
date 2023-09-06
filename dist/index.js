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
    function isResponse(o) {
        return 'type' in o && 'metadata' in o && 'result' in o;
    }
    Response.isResponse = isResponse;
    function isEmpty(o) {
        return isResponse(o) && o.result === undefined;
    }
    Response.isEmpty = isEmpty;
    function isObject(o, predicate) {
        return isResponse(o) && predicate(o.result);
    }
    Response.isObject = isObject;
    function isArray(o, predicate) {
        return isResponse(o) && Array.isArray(o.result) && predicate(o.result[0]);
    }
    Response.isArray = isArray;
    function isError(o) {
        return isResponse(o) && typeof o.result === 'string' &&
            'className' in o && typeof o.className === 'string' &&
            'status' in o && typeof o.status === 'number';
    }
    Response.isError = isError;
})(Response || (Response = {}));
