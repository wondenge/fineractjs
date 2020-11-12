

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsPreClosureInterestCalculationStrategy model module.
 * @module model/GetLoanProductsPreClosureInterestCalculationStrategy
 * @version 1.0
 */
class GetLoanProductsPreClosureInterestCalculationStrategy {
    /**
     * Constructs a new <code>GetLoanProductsPreClosureInterestCalculationStrategy</code>.
     * @alias module:model/GetLoanProductsPreClosureInterestCalculationStrategy
     */
    constructor() { 
        
        GetLoanProductsPreClosureInterestCalculationStrategy.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsPreClosureInterestCalculationStrategy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsPreClosureInterestCalculationStrategy} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsPreClosureInterestCalculationStrategy} The populated <code>GetLoanProductsPreClosureInterestCalculationStrategy</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsPreClosureInterestCalculationStrategy();

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
GetLoanProductsPreClosureInterestCalculationStrategy.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsPreClosureInterestCalculationStrategy.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsPreClosureInterestCalculationStrategy.prototype['description'] = undefined;






export default GetLoanProductsPreClosureInterestCalculationStrategy;

