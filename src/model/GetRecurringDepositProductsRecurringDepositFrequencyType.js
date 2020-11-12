

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsRecurringDepositFrequencyType model module.
 * @module model/GetRecurringDepositProductsRecurringDepositFrequencyType
 * @version 1.0
 */
class GetRecurringDepositProductsRecurringDepositFrequencyType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsRecurringDepositFrequencyType</code>.
     * @alias module:model/GetRecurringDepositProductsRecurringDepositFrequencyType
     */
    constructor() { 
        
        GetRecurringDepositProductsRecurringDepositFrequencyType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsRecurringDepositFrequencyType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsRecurringDepositFrequencyType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsRecurringDepositFrequencyType} The populated <code>GetRecurringDepositProductsRecurringDepositFrequencyType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsRecurringDepositFrequencyType();

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
GetRecurringDepositProductsRecurringDepositFrequencyType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsRecurringDepositFrequencyType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsRecurringDepositFrequencyType.prototype['description'] = undefined;






export default GetRecurringDepositProductsRecurringDepositFrequencyType;

