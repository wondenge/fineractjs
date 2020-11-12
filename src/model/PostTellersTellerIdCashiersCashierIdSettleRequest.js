

import ApiClient from '../ApiClient';

/**
 * The PostTellersTellerIdCashiersCashierIdSettleRequest model module.
 * @module model/PostTellersTellerIdCashiersCashierIdSettleRequest
 * @version 1.0
 */
class PostTellersTellerIdCashiersCashierIdSettleRequest {
    /**
     * Constructs a new <code>PostTellersTellerIdCashiersCashierIdSettleRequest</code>.
     * PostTellersTellerIdCashiersCashierIdSettleRequest
     * @alias module:model/PostTellersTellerIdCashiersCashierIdSettleRequest
     */
    constructor() { 
        
        PostTellersTellerIdCashiersCashierIdSettleRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostTellersTellerIdCashiersCashierIdSettleRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostTellersTellerIdCashiersCashierIdSettleRequest} obj Optional instance to populate.
     * @return {module:model/PostTellersTellerIdCashiersCashierIdSettleRequest} The populated <code>PostTellersTellerIdCashiersCashierIdSettleRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostTellersTellerIdCashiersCashierIdSettleRequest();

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
PostTellersTellerIdCashiersCashierIdSettleRequest.prototype['currencyCode'] = undefined;

/**
 * @member {Number} txnAmount
 */
PostTellersTellerIdCashiersCashierIdSettleRequest.prototype['txnAmount'] = undefined;

/**
 * @member {String} txnNote
 */
PostTellersTellerIdCashiersCashierIdSettleRequest.prototype['txnNote'] = undefined;

/**
 * @member {String} locale
 */
PostTellersTellerIdCashiersCashierIdSettleRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostTellersTellerIdCashiersCashierIdSettleRequest.prototype['dateFormat'] = undefined;

/**
 * @member {Date} txnDate
 */
PostTellersTellerIdCashiersCashierIdSettleRequest.prototype['txnDate'] = undefined;






export default PostTellersTellerIdCashiersCashierIdSettleRequest;

