

import ApiClient from '../ApiClient';

/**
 * The PostChargesRequest model module.
 * @module model/PostChargesRequest
 * @version 1.0
 */
class PostChargesRequest {
    /**
     * Constructs a new <code>PostChargesRequest</code>.
     * PostChargesRequest
     * @alias module:model/PostChargesRequest
     */
    constructor() { 
        
        PostChargesRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PostChargesRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PostChargesRequest} obj Optional instance to populate.
     * @return {module:model/PostChargesRequest} The populated <code>PostChargesRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PostChargesRequest();

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('chargeAppliesTo')) {
                obj['chargeAppliesTo'] = ApiClient.convertToType(data['chargeAppliesTo'], 'Number');
            }
            if (data.hasOwnProperty('currencyCode')) {
                obj['currencyCode'] = ApiClient.convertToType(data['currencyCode'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('chargeTimeType')) {
                obj['chargeTimeType'] = ApiClient.convertToType(data['chargeTimeType'], 'Number');
            }
            if (data.hasOwnProperty('chargeCalculationType')) {
                obj['chargeCalculationType'] = ApiClient.convertToType(data['chargeCalculationType'], 'Number');
            }
            if (data.hasOwnProperty('chargePaymentMode')) {
                obj['chargePaymentMode'] = ApiClient.convertToType(data['chargePaymentMode'], 'Number');
            }
            if (data.hasOwnProperty('active')) {
                obj['active'] = ApiClient.convertToType(data['active'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {String} name
 */
PostChargesRequest.prototype['name'] = undefined;

/**
 * @member {Number} chargeAppliesTo
 */
PostChargesRequest.prototype['chargeAppliesTo'] = undefined;

/**
 * @member {String} currencyCode
 */
PostChargesRequest.prototype['currencyCode'] = undefined;

/**
 * @member {String} locale
 */
PostChargesRequest.prototype['locale'] = undefined;

/**
 * @member {Number} amount
 */
PostChargesRequest.prototype['amount'] = undefined;

/**
 * @member {Number} chargeTimeType
 */
PostChargesRequest.prototype['chargeTimeType'] = undefined;

/**
 * @member {Number} chargeCalculationType
 */
PostChargesRequest.prototype['chargeCalculationType'] = undefined;

/**
 * @member {Number} chargePaymentMode
 */
PostChargesRequest.prototype['chargePaymentMode'] = undefined;

/**
 * @member {String} active
 */
PostChargesRequest.prototype['active'] = undefined;






export default PostChargesRequest;

