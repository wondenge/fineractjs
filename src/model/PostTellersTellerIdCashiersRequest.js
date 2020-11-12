

import ApiClient from '../ApiClient';

/**
 * The PostTellersTellerIdCashiersRequest model module.
 * @module model/PostTellersTellerIdCashiersRequest
 * @version 1.0
 */
class PostTellersTellerIdCashiersRequest {
    /**
     * Constructs a new <code>PostTellersTellerIdCashiersRequest</code>.
     * PostTellersTellerIdCashiersRequest
     * @alias module:model/PostTellersTellerIdCashiersRequest
     */
    constructor() { 
        
        PostTellersTellerIdCashiersRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTellersTellerIdCashiersRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTellersTellerIdCashiersRequest} obj Optional instance to populate.
     * @return {module:model/PostTellersTellerIdCashiersRequest} The populated <code>PostTellersTellerIdCashiersRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTellersTellerIdCashiersRequest();

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
PostTellersTellerIdCashiersRequest.prototype['endDate'] = undefined;

/**
 * @member {String} description
 */
PostTellersTellerIdCashiersRequest.prototype['description'] = undefined;

/**
 * @member {Boolean} isFullDay
 */
PostTellersTellerIdCashiersRequest.prototype['isFullDay'] = undefined;

/**
 * @member {Number} staffId
 */
PostTellersTellerIdCashiersRequest.prototype['staffId'] = undefined;

/**
 * @member {String} locale
 */
PostTellersTellerIdCashiersRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostTellersTellerIdCashiersRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Date} startDate
 */
PostTellersTellerIdCashiersRequest.prototype['startDate'] = undefined;






export default PostTellersTellerIdCashiersRequest;

