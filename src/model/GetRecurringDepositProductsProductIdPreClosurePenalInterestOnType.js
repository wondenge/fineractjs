

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType model module.
 * @module model/GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType
 * @version 1.0
 */
class GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType</code>.
     * @alias module:model/GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType
     */
    constructor() { 
        
        GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType} The populated <code>GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType();

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
GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType.prototype['description'] = undefined;






export default GetRecurringDepositProductsProductIdPreClosurePenalInterestOnType;

