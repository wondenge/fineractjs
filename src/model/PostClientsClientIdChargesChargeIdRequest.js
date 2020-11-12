

import ApiClient from '../ApiClient';

/**
 * The PostClientsClientIdChargesChargeIdRequest model module.
 * @module model/PostClientsClientIdChargesChargeIdRequest
 * @version 1.0
 */
class PostClientsClientIdChargesChargeIdRequest {
    /**
     * Constructs a new <code>PostClientsClientIdChargesChargeIdRequest</code>.
     * PostClientsClientIdChargesChargeIdRequest
     * @alias module:model/PostClientsClientIdChargesChargeIdRequest
     */
    constructor() { 
        
        PostClientsClientIdChargesChargeIdRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostClientsClientIdChargesChargeIdRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostClientsClientIdChargesChargeIdRequest} obj Optional instance to populate.
     * @return {module:model/PostClientsClientIdChargesChargeIdRequest} The populated <code>PostClientsClientIdChargesChargeIdRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostClientsClientIdChargesChargeIdRequest();

            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('dateFormat')) {
                obj['dateFormat'] = ApiClient.convertToType(data['dateFormat'], 'String');
            }
            if (data.hasOwnProperty('transactionDate')) {
                obj['transactionDate'] = ApiClient.convertToType(data['transactionDate'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} amount
 */
PostClientsClientIdChargesChargeIdRequest.prototype['amount'] = undefined;

/**
 * @member {String} locale
 */
PostClientsClientIdChargesChargeIdRequest.prototype['locale'] = undefined;

/**
 * @member {String} dateFormat
 */
PostClientsClientIdChargesChargeIdRequest.prototype['dateFormat'] = undefined;

/**
 * @member {String} transactionDate
 */
PostClientsClientIdChargesChargeIdRequest.prototype['transactionDate'] = undefined;






export default PostClientsClientIdChargesChargeIdRequest;

