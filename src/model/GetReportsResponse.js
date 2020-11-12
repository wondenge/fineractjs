

import ApiClient from '../ApiClient';

/**
 * The GetReportsResponse model module.
 * @module model/GetReportsResponse
 * @version 1.0
 */
class GetReportsResponse {
    /**
     * Constructs a new <code>GetReportsResponse</code>.
     * GetReportsResponse
     * @alias module:model/GetReportsResponse
     */
    constructor() { 
        
        GetReportsResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetReportsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetReportsResponse} obj Optional instance to populate.
     * @return {module:model/GetReportsResponse} The populated <code>GetReportsResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetReportsResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('reportName')) {
                obj['reportName'] = ApiClient.convertToType(data['reportName'], 'String');
            }
            if (data.hasOwnProperty('reportType')) {
                obj['reportType'] = ApiClient.convertToType(data['reportType'], 'String');
            }
            if (data.hasOwnProperty('reportSubType')) {
                obj['reportSubType'] = ApiClient.convertToType(data['reportSubType'], 'String');
            }
            if (data.hasOwnProperty('reportCategory')) {
                obj['reportCategory'] = ApiClient.convertToType(data['reportCategory'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('reportSql')) {
                obj['reportSql'] = ApiClient.convertToType(data['reportSql'], 'String');
            }
            if (data.hasOwnProperty('coreReport')) {
                obj['coreReport'] = ApiClient.convertToType(data['coreReport'], 'Boolean');
            }
            if (data.hasOwnProperty('useReport')) {
                obj['useReport'] = ApiClient.convertToType(data['useReport'], 'Boolean');
            }
            if (data.hasOwnProperty('reportParameters')) {
                obj['reportParameters'] = ApiClient.convertToType(data['reportParameters'], [Object]);
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetReportsResponse.prototype['id'] = undefined;

/**
 * @member {String} reportName
 */
GetReportsResponse.prototype['reportName'] = undefined;

/**
 * @member {String} reportType
 */
GetReportsResponse.prototype['reportType'] = undefined;

/**
 * @member {String} reportSubType
 */
GetReportsResponse.prototype['reportSubType'] = undefined;

/**
 * @member {String} reportCategory
 */
GetReportsResponse.prototype['reportCategory'] = undefined;

/**
 * @member {String} description
 */
GetReportsResponse.prototype['description'] = undefined;

/**
 * @member {String} reportSql
 */
GetReportsResponse.prototype['reportSql'] = undefined;

/**
 * @member {Boolean} coreReport
 */
GetReportsResponse.prototype['coreReport'] = undefined;

/**
 * @member {Boolean} useReport
 */
GetReportsResponse.prototype['useReport'] = undefined;

/**
 * @member {Array.<Object>} reportParameters
 */
GetReportsResponse.prototype['reportParameters'] = undefined;






export default GetReportsResponse;

