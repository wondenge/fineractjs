

import ApiClient from '../ApiClient';

/**
 * The GetRecurringDepositProductsInterestPostingPeriodType model module.
 * @module model/GetRecurringDepositProductsInterestPostingPeriodType
 * @version 1.0
 */
class GetRecurringDepositProductsInterestPostingPeriodType {
    /**
     * Constructs a new <code>GetRecurringDepositProductsInterestPostingPeriodType</code>.
     * @alias module:model/GetRecurringDepositProductsInterestPostingPeriodType
     */
    constructor() { 
        
        GetRecurringDepositProductsInterestPostingPeriodType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetRecurringDepositProductsInterestPostingPeriodType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetRecurringDepositProductsInterestPostingPeriodType} obj Optional instance to populate.
     * @return {module:model/GetRecurringDepositProductsInterestPostingPeriodType} The populated <code>GetRecurringDepositProductsInterestPostingPeriodType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetRecurringDepositProductsInterestPostingPeriodType();

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
GetRecurringDepositProductsInterestPostingPeriodType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetRecurringDepositProductsInterestPostingPeriodType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetRecurringDepositProductsInterestPostingPeriodType.prototype['description'] = undefined;






export default GetRecurringDepositProductsInterestPostingPeriodType;

