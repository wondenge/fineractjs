

import ApiClient from '../ApiClient';

/**
 * The ResultsetColumnHeaderData model module.
 * @module model/ResultsetColumnHeaderData
 * @version 1.0
 */
class ResultsetColumnHeaderData {
    /**
     * Constructs a new <code>ResultsetColumnHeaderData</code>.
     * @alias module:model/ResultsetColumnHeaderData
     */
    constructor() { 
        
        ResultsetColumnHeaderData.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ResultsetColumnHeaderData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResultsetColumnHeaderData} obj Optional instance to populate.
     * @return {module:model/ResultsetColumnHeaderData} The populated <code>ResultsetColumnHeaderData</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ResultsetColumnHeaderData();

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
            if (data.hasOwnProperty('columnCode')) {
                obj['columnCode'] = ApiClient.convertToType(data['columnCode'], 'String');
            }
            if (data.hasOwnProperty('optional')) {
                obj['optional'] = ApiClient.convertToType(data['optional'], 'Boolean');
            }
            if (data.hasOwnProperty('string')) {
                obj['string'] = ApiClient.convertToType(data['string'], 'Boolean');
            }
            if (data.hasOwnProperty('dateDisplayType')) {
                obj['dateDisplayType'] = ApiClient.convertToType(data['dateDisplayType'], 'Boolean');
            }
            if (data.hasOwnProperty('dateTimeDisplayType')) {
                obj['dateTimeDisplayType'] = ApiClient.convertToType(data['dateTimeDisplayType'], 'Boolean');
            }
            if (data.hasOwnProperty('integerDisplayType')) {
                obj['integerDisplayType'] = ApiClient.convertToType(data['integerDisplayType'], 'Boolean');
            }
            if (data.hasOwnProperty('decimalDisplayType')) {
                obj['decimalDisplayType'] = ApiClient.convertToType(data['decimalDisplayType'], 'Boolean');
            }
            if (data.hasOwnProperty('booleanDisplayType')) {
                obj['booleanDisplayType'] = ApiClient.convertToType(data['booleanDisplayType'], 'Boolean');
            }
            if (data.hasOwnProperty('codeValueDisplayType')) {
                obj['codeValueDisplayType'] = ApiClient.convertToType(data['codeValueDisplayType'], 'Boolean');
            }
            if (data.hasOwnProperty('codeLookupDisplayType')) {
                obj['codeLookupDisplayType'] = ApiClient.convertToType(data['codeLookupDisplayType'], 'Boolean');
            }
            if (data.hasOwnProperty('mandatory')) {
                obj['mandatory'] = ApiClient.convertToType(data['mandatory'], 'Boolean');
            }
        }
        return obj;
    }


}

/**
 * @member {String} columnName
 */
ResultsetColumnHeaderData.prototype['columnName'] = undefined;

/**
 * @member {String} columnType
 */
ResultsetColumnHeaderData.prototype['columnType'] = undefined;

/**
 * @member {Number} columnLength
 */
ResultsetColumnHeaderData.prototype['columnLength'] = undefined;

/**
 * @member {String} columnDisplayType
 */
ResultsetColumnHeaderData.prototype['columnDisplayType'] = undefined;

/**
 * @member {String} columnCode
 */
ResultsetColumnHeaderData.prototype['columnCode'] = undefined;

/**
 * @member {Boolean} optional
 */
ResultsetColumnHeaderData.prototype['optional'] = undefined;

/**
 * @member {Boolean} string
 */
ResultsetColumnHeaderData.prototype['string'] = undefined;

/**
 * @member {Boolean} dateDisplayType
 */
ResultsetColumnHeaderData.prototype['dateDisplayType'] = undefined;

/**
 * @member {Boolean} dateTimeDisplayType
 */
ResultsetColumnHeaderData.prototype['dateTimeDisplayType'] = undefined;

/**
 * @member {Boolean} integerDisplayType
 */
ResultsetColumnHeaderData.prototype['integerDisplayType'] = undefined;

/**
 * @member {Boolean} decimalDisplayType
 */
ResultsetColumnHeaderData.prototype['decimalDisplayType'] = undefined;

/**
 * @member {Boolean} booleanDisplayType
 */
ResultsetColumnHeaderData.prototype['booleanDisplayType'] = undefined;

/**
 * @member {Boolean} codeValueDisplayType
 */
ResultsetColumnHeaderData.prototype['codeValueDisplayType'] = undefined;

/**
 * @member {Boolean} codeLookupDisplayType
 */
ResultsetColumnHeaderData.prototype['codeLookupDisplayType'] = undefined;

/**
 * @member {Boolean} mandatory
 */
ResultsetColumnHeaderData.prototype['mandatory'] = undefined;






export default ResultsetColumnHeaderData;

