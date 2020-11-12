

import ApiClient from '../ApiClient';

/**
 * The GetLoanProductsExpenseType model module.
 * @module model/GetLoanProductsExpenseType
 * @version 1.0
 */
class GetLoanProductsExpenseType {
    /**
     * Constructs a new <code>GetLoanProductsExpenseType</code>.
     * @alias module:model/GetLoanProductsExpenseType
     */
    constructor() { 
        
        GetLoanProductsExpenseType.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>GetLoanProductsExpenseType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GetLoanProductsExpenseType} obj Optional instance to populate.
     * @return {module:model/GetLoanProductsExpenseType} The populated <code>GetLoanProductsExpenseType</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new GetLoanProductsExpenseType();

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
GetLoanProductsExpenseType.prototype['id'] = undefined;

/**
 * @member {String} code
 */
GetLoanProductsExpenseType.prototype['code'] = undefined;

/**
 * @member {String} description
 */
GetLoanProductsExpenseType.prototype['description'] = undefined;






export default GetLoanProductsExpenseType;

