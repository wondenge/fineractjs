

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsInterestCalculationType model module.
 * @module model/GetRecurringDepositProductsInterestCalculationType
 * @version 1.0
 */
class GetRecurringDepositProductsInterestCalculationType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsInterestCalculationType</code>.
     * @alias module:model/GetRecurringDepositProductsInterestCalculationType
     */
    constructor() { 
        
        GetRecurringDepositProductsInterestCalculationType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsInterestCalculationType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsInterestCalculationType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsInterestCalculationType} The populated <code>GetRecurringDepositProductsInterestCalculationType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsInterestCalculationType();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'Number');
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
        }
        return obj;
    }


}

/**
 * @member {Number} id
 */
GetRecurringDepositProductsInterestCalculationType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsInterestCalculationType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsInterestCalculationType.prototype['description'] = undefined;






export default GetRecurringDepositProductsInterestCalculationType;

