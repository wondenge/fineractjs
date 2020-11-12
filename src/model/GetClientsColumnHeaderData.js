

import ApiClient from '../ApiClient';

/**
 * The GetClientsColumnHeaderData model module.
 * @module model/GetClientsColumnHeaderData
 * @version 1.0
 */
class GetClientsColumnHeaderData {
    /**
     * Constructs a new <code>GetClientsColumnHeaderData</code>.
     * @alias module:model/GetClientsColumnHeaderData
     */
    constructor() { 
        
        GetClientsColumnHeaderData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetClientsColumnHeaderData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetClientsColumnHeaderData} obj Optional instance to populate.
     * @return {module:model/GetClientsColumnHeaderData} The populated <code>GetClientsColumnHeaderData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetClientsColumnHeaderData();

            if (data.hasOwnProperty('columnName')) {
                obj['columnName'] = ApiClient.convertToType(data['columnName'], 'String');
            }
            if (data.hasOwnProperty('columnType')) {
                obj['columnType'] = ApiClient.convertToType(data['columnType'], 'String');
            }
            if (data.hasOwnProperty('columnLength')) {
                obj['columnLength'] = ApiClient.convertToType(data['columnLength'], 'Number');
            }
            if (data.hasOwnProperty('columnDisplayType')) {
                obj['columnDisplayType'] = ApiClient.convertToType(data['columnDisplayType'], 'String');
            }
            if (data.hasOwnProperty('isColumnNullable')) {
                obj['isColumnNullable'] = ApiClient.convertToType(data['isColumnNullable'], 'Boolean');
            }
            if (data.hasOwnProperty('isColumnPrimaryKey')) {
                obj['isColumnPrimaryKey'] = ApiClient.convertToType(data['isColumnPrimaryKey'], 'Boolean');
            }
            if (data.hasOwnProperty('columnValues')) {
                obj['columnValues'] = ApiClient.convertToType(data['columnValues'], ['String']);
            }
        }
        return obj;
    }


}

/**
 * @member {String} columnName
 */
GetClientsColumnHeaderData.prototype['columnName'] = undefined;

/**
 * @member {String} columnType
 */
GetClientsColumnHeaderData.prototype['columnType'] = undefined;

/**
 * @member {Number} columnLength
 */
GetClientsColumnHeaderData.prototype['columnLength'] = undefined;

/**
 * @member {String} columnDisplayType
 */
GetClientsColumnHeaderData.prototype['columnDisplayType'] = undefined;

/**
 * @member {Boolean} isColumnNullable
 */
GetClientsColumnHeaderData.prototype['isColumnNullable'] = undefined;

/**
 * @member {Boolean} isColumnPrimaryKey
 */
GetClientsColumnHeaderData.prototype['isColumnPrimaryKey'] = undefined;

/**
 * @member {Array.<String>} columnValues
 */
GetClientsColumnHeaderData.prototype['columnValues'] = undefined;






export default GetClientsColumnHeaderData;

