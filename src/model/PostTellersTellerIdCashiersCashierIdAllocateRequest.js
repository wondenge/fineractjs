

import ApiClient from '../ApiClient';

/**
 * The PostTellersTellerIdCashiersCashierIdAllocateRequest model module.
 * @module model/PostTellersTellerIdCashiersCashierIdAllocateRequest
 * @version 1.0
 */
class PostTellersTellerIdCashiersCashierIdAllocateRequest {
    /**
     * Constructs a new <code>PostTellersTellerIdCashiersCashierIdAllocateRequest</code>.
     * PostTellersTellerIdCashiersCashierIdAllocateRequest
     * @alias module:model/PostTellersTellerIdCashiersCashierIdAllocateRequest
     */
    constructor() { 
        
        PostTellersTellerIdCashiersCashierIdAllocateRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTellersTellerIdCashiersCashierIdAllocateRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTellersTellerIdCashiersCashierIdAllocateRequest} obj Optional instance to populate.
     * @return {module:model/PostTellersTellerIdCashiersCashierIdAllocateRequest} The populated <code>PostTellersTellerIdCashiersCashierIdAllocateRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTellersTellerIdCashiersCashierIdAllocateRequest();

            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('txnAmount')) {
                obj['txnAmount'] = ApiClient.convertToType(data['txnAmount'], 'Number');
            }
            if (data.hasOwnProperty('txnNote')) {
                obj['txnNote'] = ApiClient.convertToType(data['txnNote'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('txnDate')) {
                obj['txnDate'] = ApiClient.convertToType(data['txnDate'], 'Date');
            }
        }
        return obj;
    }


}

/**
 * @member {String} currencyCode
 */
PostTellersTellerIdCashiersCashierIdAllocateRequest.prototype['currencyCode'] = undefined;

/**
 * @member {Number} txnAmount
 */
PostTellersTellerIdCashiersCashierIdAllocateRequest.prototype['txnAmount'] = undefined;

/**
 * @member {String} txnNote
 */
PostTellersTellerIdCashiersCashierIdAllocateRequest.prototype['txnNote'] = undefined;

/**
 * @member {String} locale
 */
PostTellersTellerIdCashiersCashierIdAllocateRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostTellersTellerIdCashiersCashierIdAllocateRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Date} txnDate
 */
PostTellersTellerIdCashiersCashierIdAllocateRequest.prototype['txnDate'] = undefined;






export default PostTellersTellerIdCashiersCashierIdAllocateRequest;

