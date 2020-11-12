

import ApiClient from '../ApiClient';

/**
 * The PutRecurringDepositProductsRequest model module.
 * @module model/PutRecurringDepositProductsRequest
 * @version 1.0
 */
class PutRecurringDepositProductsRequest {
    /**
     * Constructs a new <code>PutRecurringDepositProductsRequest</code>.
     * PutRecurringDepositProductsRequest
     * @alias module:model/PutRecurringDepositProductsRequest
     */
    constructor() { 
        
        PutRecurringDepositProductsRequest.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>PutRecurringDepositProductsRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PutRecurringDepositProductsRequest} obj Optional instance to populate.
     * @return {module:model/PutRecurringDepositProductsRequest} The populated <code>PutRecurringDepositProductsRequest</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PutRecurringDepositProductsRequest();

            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('locale')) {
                obj['locale'] = ApiClient.convertToType(data['locale'], 'String');
            }
            if (data.hasOwnProperty('minDepositTerm')) {
                obj['minDepositTerm'] = ApiClient.convertToType(data['minDepositTerm'], 'Number');
            }
            if (data.hasOwnProperty('minDepositTermTypeId')) {
                obj['minDepositTermTypeId'] = ApiClient.convertToType(data['minDepositTermTypeId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {String} description
 */
PutRecurringDepositProductsRequest.prototype['description'] = undefined;

/**
 * @member {String} locale
 */
PutRecurringDepositProductsRequest.prototype['locale'] = undefined;

/**
 * @member {Number} minDepositTerm
 */
PutRecurringDepositProductsRequest.prototype['minDepositTerm'] = undefined;

/**
 * @member {Number} minDepositTermTypeId
 */
PutRecurringDepositProductsRequest.prototype['minDepositTermTypeId'] = undefined;






export default PutRecurringDepositProductsRequest;

