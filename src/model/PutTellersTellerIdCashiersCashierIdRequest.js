

import ApiClient from '../ApiClient';

/**
 * The PutTellersTellerIdCashiersCashierIdRequest model module.
 * @module model/PutTellersTellerIdCashiersCashierIdRequest
 * @version 1.0
 */
class PutTellersTellerIdCashiersCashierIdRequest {
    /**
     * Constructs a new <code>PutTellersTellerIdCashiersCashierIdRequest</code>.
     * PutTellersTellerIdCashiersCashierIdRequest
     * @alias module:model/PutTellersTellerIdCashiersCashierIdRequest
     */
    constructor() { 
        
        PutTellersTellerIdCashiersCashierIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutTellersTellerIdCashiersCashierIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutTellersTellerIdCashiersCashierIdRequest} obj Optional instance to populate.
     * @return {module:model/PutTellersTellerIdCashiersCashierIdRequest} The populated <code>PutTellersTellerIdCashiersCashierIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutTellersTellerIdCashiersCashierIdRequest();

            if (data.hasOwnProperty('endDate')) {
                obj['endDate'] = ApiClient.convertToType(data['endDate'], 'Date');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('isFullDay')) {
                obj['isFullDay'] = ApiClient.convertToType(data['isFullDay'], 'Boolean');
            }
            if (data.hasOwnProperty('staffId')) {
                obj['staffId'] = ApiClient.convertToType(data['staffId'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {Date} endDate
 */
PutTellersTellerIdCashiersCashierIdRequest.prototype['endDate'] = undefined;

/**
 * @member {String} description
 */
PutTellersTellerIdCashiersCashierIdRequest.prototype['description'] = undefined;

/**
 * @member {Boolean} isFullDay
 */
PutTellersTellerIdCashiersCashierIdRequest.prototype['isFullDay'] = undefined;

/**
 * @member {Number} staffId
 */
PutTellersTellerIdCashiersCashierIdRequest.prototype['staffId'] = undefined;

/**
 * @member {String} locale
 */
PutTellersTellerIdCashiersCashierIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PutTellersTellerIdCashiersCashierIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Date} startDate
 */
PutTellersTellerIdCashiersCashierIdRequest.prototype['startDate'] = undefined;






export default PutTellersTellerIdCashiersCashierIdRequest;

