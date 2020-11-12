

import ApiClient from '../ApiClient';

/**
 * The DeleteRecurringDepositProductsProductIdResponse model module.
 * @module model/DeleteRecurringDepositProductsProductIdResponse
 * @version 1.0
 */
class DeleteRecurringDepositProductsProductIdResponse {
    /**
     * Constructs a new <code>DeleteRecurringDepositProductsProductIdResponse</code>.
     * DeleteRecurringDepositProductsProductIdResponse
     * @alias module:model/DeleteRecurringDepositProductsProductIdResponse
     */
    constructor() { 
        
        DeleteRecurringDepositProductsProductIdResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>DeleteRecurringDepositProductsProductIdResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeleteRecurringDepositProductsProductIdResponse} obj Optional instance to populate.
     * @return {module:model/DeleteRecurringDepositProductsProductIdResponse} The populated <code>DeleteRecurringDepositProductsProductIdResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DeleteRecurringDepositProductsProductIdResponse();

            if (data.hasOwnProperty('resourceId')) {
                obj['resourceId'] = ApiClient.convertToType(data['resourceId'], 'Number');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} resourceId
 */
DeleteRecurringDepositProductsProductIdResponse.prototype['resourceId'] = undefined;






export default DeleteRecurringDepositProductsProductIdResponse;

