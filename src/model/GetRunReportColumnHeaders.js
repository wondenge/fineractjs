

import ApiClient from '../ApiClient';

/**
 * The GetRunReportColumnHeaders model module.
 * @module model/GetRunReportColumnHeaders
 * @version 1.0
 */
class GetRunReportColumnHeaders {
    /**
     * Constructs a new <code>GetRunReportColumnHeaders</code>.
     * @alias module:model/GetRunReportColumnHeaders
     */
    constructor() { 
        
        GetRunReportColumnHeaders.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRunReportColumnHeaders</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRunReportColumnHeaders} obj Optional instance to populate.
     * @return {module:model/GetRunReportColumnHeaders} The populated <code>GetRunReportColumnHeaders</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRunReportColumnHeaders();

            if (data.hasOwnProperty('columnName')) {
                obj['columnName'] = ApiClient.convertToType(data['columnName'], 'String');
            }
            if (data.hasOwnProperty('columnType')) {
                obj['columnType'] = ApiClient.convertToType(data['columnType'], 'String');
            }
            if (data.hasOwnProperty('isColumnNullable')) {
                obj['isColumnNullable'] = ApiClient.convertToType(data['isColumnNullable'], 'Boolean');
            }
            if (data.hasOwnProperty('isColumnPrimaryKey')) {
                obj['isColumnPrimaryKey'] = ApiClient.convertToType(data['isColumnPrimaryKey'], 'Boolean');
            }
            if (data.hasOwnProperty('columnValues')) {
                obj['columnValues'] = ApiClient.convertToType(data['columnValues'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} columnName
 */
GetRunReportColumnHeaders.prototype['columnName'] = undefined;

/**
 * @member {String} columnType
 */
GetRunReportColumnHeaders.prototype['columnType'] = undefined;

/**
 * @member {Boolean} isColumnNullable
 */
GetRunReportColumnHeaders.prototype['isColumnNullable'] = undefined;

/**
 * @member {Boolean} isColumnPrimaryKey
 */
GetRunReportColumnHeaders.prototype['isColumnPrimaryKey'] = undefined;

/**
 * @member {String} columnValues
 */
GetRunReportColumnHeaders.prototype['columnValues'] = undefined;






export default GetRunReportColumnHeaders;

