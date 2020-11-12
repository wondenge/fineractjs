

import ApiClient from '../ApiClient';

/**
 * The GetGroupsTemplateColumnHeaderData model module.
 * @module model/GetGroupsTemplateColumnHeaderData
 * @version 1.0
 */
class GetGroupsTemplateColumnHeaderData {
    /**
     * Constructs a new <code>GetGroupsTemplateColumnHeaderData</code>.
     * @alias module:model/GetGroupsTemplateColumnHeaderData
     */
    constructor() { 
        
        GetGroupsTemplateColumnHeaderData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetGroupsTemplateColumnHeaderData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetGroupsTemplateColumnHeaderData} obj Optional instance to populate.
     * @return {module:model/GetGroupsTemplateColumnHeaderData} The populated <code>GetGroupsTemplateColumnHeaderData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetGroupsTemplateColumnHeaderData();

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
                obj['columnValues'] = ApiClient.convertToType(data['columnValues'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {String} columnName
 */
GetGroupsTemplateColumnHeaderData.prototype['columnName'] = undefined;

/**
 * @member {String} columnType
 */
GetGroupsTemplateColumnHeaderData.prototype['columnType'] = undefined;

/**
 * @member {Number} columnLength
 */
GetGroupsTemplateColumnHeaderData.prototype['columnLength'] = undefined;

/**
 * @member {String} columnDisplayType
 */
GetGroupsTemplateColumnHeaderData.prototype['columnDisplayType'] = undefined;

/**
 * @member {Boolean} isColumnNullable
 */
GetGroupsTemplateColumnHeaderData.prototype['isColumnNullable'] = undefined;

/**
 * @member {Boolean} isColumnPrimaryKey
 */
GetGroupsTemplateColumnHeaderData.prototype['isColumnPrimaryKey'] = undefined;

/**
 * @member {Array.<Object>} columnValues
 */
GetGroupsTemplateColumnHeaderData.prototype['columnValues'] = undefined;






export default GetGroupsTemplateColumnHeaderData;

