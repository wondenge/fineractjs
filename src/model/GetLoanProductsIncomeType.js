

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsIncomeType model module.
 * @module model/GetLoanProductsIncomeType
 * @version 1.0
 */
class GetLoanProductsIncomeType {
    /**
     * Constructs a new <code>GetLoanProductsIncomeType</code>.
     * @alias module:model/GetLoanProductsIncomeType
     */
    constructor() { 
        
        GetLoanProductsIncomeType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsIncomeType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsIncomeType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsIncomeType} The populated <code>GetLoanProductsIncomeType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsIncomeType();

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
GetLoanProductsIncomeType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsIncomeType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsIncomeType.prototype['description'] = undefined;






export default GetLoanProductsIncomeType;

