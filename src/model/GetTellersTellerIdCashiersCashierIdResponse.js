

import ApiClient from '../ApiClient';

/**
 * The GetTellersTellerIdCashiersCashierIdResponse model module.
 * @module model/GetTellersTellerIdCashiersCashierIdResponse
 * @version 1.0
 */
class GetTellersTellerIdCashiersCashierIdResponse {
    /**
     * Constructs a new <code>GetTellersTellerIdCashiersCashierIdResponse</code>.
     * GetTellersTellerIdCashiersCashierIdResponse
     * @alias module:model/GetTellersTellerIdCashiersCashierIdResponse
     */
    constructor() { 
        
        GetTellersTellerIdCashiersCashierIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetTellersTellerIdCashiersCashierIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetTellersTellerIdCashiersCashierIdResponse} obj Optional instance to populate.
     * @return {module:model/GetTellersTellerIdCashiersCashierIdResponse} The populated <code>GetTellersTellerIdCashiersCashierIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetTellersTellerIdCashiersCashierIdResponse();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('tellerId')) {
                obj['tellerId'] = ApiClient.convertToType(data['tellerId'], 'Number');
            }
            if (data.hasOwnProperty('staffId')) {
                obj['staffId'] = ApiClient.convertToType(data['staffId'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('isFullDay')) {
                obj['isFullDay'] = ApiClient.convertToType(data['isFullDay'], 'Boolean');
            }
            if (data.hasOwnProperty('startTime')) {
                obj['startTime'] = ApiClient.convertToType(data['startTime'], 'String');
            }
            if (data.hasOwnProperty('endTime')) {
                obj['endTime'] = ApiClient.convertToType(data['endTime'], 'String');
            }
            if (data.hasOwnProperty('tellerName')) {
                obj['tellerName'] = ApiClient.convertToType(data['tellerName'], 'String');
            }
            if (data.hasOwnProperty('staffName')) {
                obj['staffName'] = ApiClient.convertToType(data['staffName'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['id'] = undefined;

/**
 * @member {Number} tellerId
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['tellerId'] = undefined;

/**
 * @member {Number} staffId
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['staffId'] = undefined;

/**
 * @member {String} description
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['description'] = undefined;

/**
 * @member {Date} startDate
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['startDate'] = undefined;

/**
 * @member {Date} endDate
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['endDate'] = undefined;

/**
 * @member {Boolean} isFullDay
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['isFullDay'] = undefined;

/**
 * @member {String} startTime
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['startTime'] = undefined;

/**
 * @member {String} endTime
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['endTime'] = undefined;

/**
 * @member {String} tellerName
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['tellerName'] = undefined;

/**
 * @member {String} staffName
 */
GetTellersTellerIdCashiersCashierIdResponse.prototype['staffName'] = undefined;






export default GetTellersTellerIdCashiersCashierIdResponse;

